const fs = require('fs').promises
const path = require('path')
const prettier = require('prettier')

/**
 * Mardown table to array
 *
 * @param {string} str
 * @returns {Array<string>}
 */
function markdownTableToArray(str) {
  return str.split('\n').reduce((result, line) => {
    const splits = line.split('|')
    if (splits.length === 5) {
      result.push(splits.slice(1))
    }
    return result
  }, [])
}

/**
 * Generate array to markdown table
 *
 * @param {Array<string>} array
 *  @returns {string} markdown table
 */
function arrayToMdTalbe(array) {
  return array.reduce((result, line) => {
    // eslint-disable-next-line no-param-reassign
    result += `| ${line[0]} | ${line[1]} | ${line[2]} |\n`
    return result
  }, ``)
}

/**
 * Add kata entry to README.md
 *
 * @async
 * @param {Object} obj
 * @param {string} obj.kyu - kata kyu number
 * @param {string} obj.kataName
 * @param {string} obj.filePath
 * @param {string} obj.kataLink
 * @returns {Promise<boolean>}
 */
async function addKataToReadme({ kyu, kataName, filePath, kataLink }) {
  const readmePath = path.join(__dirname, '../', 'README.md')
  const content = await fs.readFile(readmePath, 'utf-8')
  const tableChunks = content.split('### ')
  const chunks = tableChunks.map(chunk => {
    if (/^javascript/i.test(chunk)) {
      let tableArr = markdownTableToArray(chunk)
      tableArr.push([kyu, `[${kataName}](${filePath})`, `[→](${kataLink})`])
      // sort by kyu
      tableArr = tableArr.sort((a, b) => {
        const aInt = parseInt(a, 10)
        const bInt = parseInt(b, 10)
        if (aInt && bInt) {
          return aInt - bInt
        }
        return 0
      })
      const tableMarkdonw = arrayToMdTalbe(tableArr)
      return `Javascript

${tableMarkdonw}
`
    }
    return chunk
  })

  const formatedMarkdown = prettier.format(chunks.join('\n### '), { parser: 'markdown' })

  await fs.writeFile(readmePath, formatedMarkdown, 'utf8')
}

module.exports = {
  addKataToReadme
}
