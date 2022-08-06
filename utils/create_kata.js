const axios = require('axios')
const fs = require('fs')
const { addKataToReadme } = require('./update_readme')

function removeHtmlEntities(str) {
  return str.replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g, '')
}

/**
 * Get function name from string
 *
 * @param {string} string
 * @returns {string|null} function name if found
 */
function getFunctionName(string) {
  const match = string.match(
    /(?:var|let|const)\s+(\w+?)\s*=|(\w+?)\.prototype|function\s+(\w+?)\s*?\(|class\s+(\w+?)\s/
  )
  return match?.length > 1 ? match.slice(1).filter(functionName => functionName && functionName.length)[0] : null
}

/**
 * Get project id from html string
 *
 * @param {string} html - html string
 * @returns {string|null} projectId
 */
function getProjectId(html) {
  const match = html.match(/projects\/(.+?)\//i)
  return match?.length > 1 ? match[1] : null
}

/**
 * Get JWT token from string
 *
 * @param {string} html - html string
 * @returns {string|null} JWT token
 */
function getJwt(html) {
  const match = html.match(/jwt\\?":\\?"(.+?)"/i)
  return match?.length > 1 ? match[1] : null
}

/**
 * Get kata id from string
 *
 * @param {string} html - html string
 * @returns {string|null} kata id
 */
function getKataId(html) {
  const match = html.match(/data-id="(.+?)"/i)
  return match?.length > 1 ? match[1] : null
}

/**
 * @typedef {Object} Secrets
 * @property {string} kataId
 * @property {string} jwt
 * @property {string} projectId
 * @property {string} csrfToken
 * @property {string} sessionId
 */

/**
 * Get some HTTP request info that are required to get kata details and tests cases
 *
 * @async
 * @param {string} kataLink - Kata link
 * @throws {Error} - If projectId is not found
 * @throws {Error} - If JWT token is not found
 * @throws {Error} - if Kata ID is not found
 * @throws {Error} - If CSRF-TOKEN is not found
 * @returns {Promise<Secrets>}
 */
async function genSecrets(kataLink) {
  return axios({
    method: 'GET',
    url: kataLink
  }).then(response => {
    const csrfTokenMatch = response.headers['set-cookie'][0].match(/=(.+?);/i)
    const csrfToken = csrfTokenMatch?.length > 1 ? decodeURIComponent(csrfTokenMatch[1]) : null
    if (!csrfToken) {
      throw new Error('Could not get csrf token')
    }

    const sessionIdMatch = response.headers['set-cookie'][1].match(/=(.+?);/i)
    const sessionId = sessionIdMatch?.length > 1 ? decodeURIComponent(sessionIdMatch[1]) : null
    if (!sessionId) {
      throw new Error('Could not get session id')
    }

    const projectId = getProjectId(response.data)
    if (!projectId) {
      throw new Error('Project id not found')
    }

    const jwt = getJwt(response.data)
    if (!jwt) {
      throw new Error('Could not get JWT token')
    }

    const kataId = getKataId(response.data)
    if (!kataId) {
      throw new Error('Could not get kata ID')
    }

    return {
      kataId,
      jwt,
      projectId,
      csrfToken,
      sessionId
    }
  })
}

/**
 * @typedef {Object} KataRank
 * @property {number} id
 * @property {string} name
 * @property {string} color
 */

/**
 * @typedef {Object} Kata
 * @property {string} id
 * @property {string} name
 * @property {string} slug
 * @property {string} url
 * @property {string} description
 * @property {string} createdAt
 * @property {KataRank} rank
 */

/**
 * Get codewars kata details
 *
 * @async
 * @param {string} kataId
 * @returns {Promise<Kata>} kata
 */
async function getKataDetails(kataId) {
  return axios({
    method: 'GET',
    url: `https://www.codewars.com/api/v1/code-challenges/${kataId}`
  }).then(res => {
    return {
      ...res.data,
      description: removeHtmlEntities(res.data.description)
    }
  })
}

/**
 * @typedef {Object} KataCodes
 * @property {string} setup - initial setup code
 * @property {string} testCodes - test codes
 * @property {string} label
 * @property {string} icon
 * @property {string} languageName
 */

/**
 *  Get kata codes
 *
 * @async
 * @param {Object} secrets
 * @param {string} secrets.projectId
 * @param {string} secrets.jwt
 * @param {string} secrets.csrfToken
 * @param {string} secrets.sessionId
 * @returns {Promise<KataCodes>}
 */
async function getKataCodes({ projectId, jwt, csrfToken, sessionId }) {
  const config = {
    method: 'post',
    url: `https://www.codewars.com/kata/projects/${projectId}/javascript/session`,
    headers: {
      authorization: jwt,
      'x-csrf-token': decodeURIComponent(csrfToken),
      Cookie: `CSRF-TOKEN=${csrfToken}; _session_id=${sessionId}`
    }
  }

  return axios(config).then(res => {
    return {
      setup: res.data.setup,
      label: res.data.label,
      icon: res.data.icon,
      testCodes: res.data.exampleFixture
    }
  })
}

const generateCode = ({ title, description, link, initialCode, exportName }) => {
  return `
/*
  Title: ${title}

  Kata Link: ${link}

  Discuss Link: ${link}/discuss

  Solutions Link: ${link}/solutions

  Description:
  ${description.padStart(description.lengt + 4)}

  Examples:

  Notes:
*
*/

${initialCode}


module.exports = ${exportName}
`
}

const generateTests = ({ exportName, initialTests }) => {
  return `
const ${exportName} = require('.')

${initialTests}

`
}

async function main(url) {
  let kataLink = url
  if (!kataLink.includes('/train')) {
    kataLink += '/train/javascript'
  }

  if (!kataLink || !kataLink.match(/\/kata\//)) {
    console.warn('Please enter a valid kata link')
    return
  }

  const secrets = await genSecrets(kataLink)
  const kataDetails = await getKataDetails(secrets.kataId)
  const kataCodes = await getKataCodes(secrets)

  const kyu = kataDetails.rank.name.split(' ')[0]
  const exportName = getFunctionName(kataCodes.setup)
  const newDirectoryPath = `javascript/${kyu}_${kataDetails.name.toLowerCase().replace(/\s+|\//g, '_')}`

  const codes = generateCode({
    title: kataDetails.name,
    link: kataDetails.url,
    description: kataDetails.description,
    initialCode: kataCodes.setup,
    exportName
  })

  const tests = generateTests({
    exportName,
    initialTests: kataCodes.testCodes
  })

  if (fs.existsSync(newDirectoryPath)) {
    console.error(`${newDirectoryPath} folder already exists!`)
    return
  }

  fs.promises
    .mkdir(newDirectoryPath, { recursive: true })
    .then(async () => {
      await fs.promises.writeFile(`${newDirectoryPath}/index.js`, codes, 'utf8')
      await fs.promises.writeFile(`${newDirectoryPath}/index.test.js`, tests, 'utf8')
    })
    .then(() => {
      return addKataToReadme({
        kyu,
        kataName: kataDetails.name,
        kataLink: kataDetails.url,
        filePath: `${newDirectoryPath}/index.js`
      })
    })
    .then(() => console.log(`Kata created under ${newDirectoryPath}`))
    .catch(error => console.log(error))
}

main(process.argv[2])
