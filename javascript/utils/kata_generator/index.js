const fs = require('fs')
const puppeteer = require('puppeteer')

const generateCode = ({ title, description, link, initialCode, exportName }) => {
  return `
/*
  Title: ${title}

  Kata Link: ${link}

  Discuss Link: ${link}/discuss

  Solutions Link: ${link}/solutions

  Description: ${description}

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

async function getKataDetails(page) {
  const data = await page.evaluate(() => {
    const kyu = document.querySelector('#shell_content div.inner-small-hex.is-extra-wide').textContent
    let title = document.querySelector('h4.ml-2.mb-3').textContent?.replace(/loading kata: /gi, '') || ''
    const description = document.querySelector('div#description.markdown').textContent
    const code = document.querySelectorAll('div#code_container .CodeMirror-line')
    const tests = document.querySelectorAll('div#fixture_container pre.CodeMirror-line')

    const firstCodeLine = code[0].textContent

    let exportName = ''
    if (firstCodeLine.includes('prototype')) exportName = firstCodeLine.split('.prototype')[0]
    if (firstCodeLine.includes('= function')) exportName = firstCodeLine.split('=')[0].trim().replace('var ', '')
    else if (firstCodeLine.includes('function')) exportName = firstCodeLine.split('function ')[1].split('(')[0]

    const parsedDescription = description
      .split('\n')
      .map(line => line.padStart(line.length + 2))
      .join('\n')
    const initialCode = [...code].map(line => line.textContent).join('\n')

    const initialTests = [...tests]
      .map((line, index, array) => {
        if (index === array.length - 1) return null
        if (!line.textContent) return null

        const test = line.textContent.trimStart()

        if (test.includes('This is just an example') || test.includes('//')) return null

        if (test.includes('describe(') || test.includes('it(')) return null

        if (test.includes('assert(')) {
          const testCase = test.split('assert(')[1]
          const [fn, equal] = testCase.includes('),') ? testCase.split('),') : testCase.split(') ,')
          let matchFn = `toBe(${equal}`
          if (equal.includes('true')) matchFn = `toBeTrue()`
          if (equal.includes('false')) matchFn = `toBeFalse()`

          return `test('Test ${index}', () => {
          expect(${fn})).${matchFn}
        })\n`.trimStart()
        }

        if (test.includes('assertEquals')) {
          const testCase = test.split('assertEquals(')[1]
          const [fn, equal] = testCase.includes('),') ? testCase.split('),') : testCase.split(') ,')
          let matchFn = `toBe(${equal}`

          if (equal) {
            if (equal.includes('true')) matchFn = `toBeTrue()`
            if (equal.includes('false')) matchFn = `toBeFalse()`
          }

          return `test('Test ${index}', () => {
          expect(${fn})).${matchFn}
        })\n`.trimStart()
        }

        if (test.includes('assertDeepEquals')) {
          const testCase = test.split('assertDeepEquals(')[1]
          const [fn, equal] = testCase.includes('),') ? testCase.split('),') : testCase.split(') ,')
          let matchFn = `toBe(${equal}`
          if (equal.includes('true')) matchFn = `toBeTrue()`
          if (equal.includes('false')) matchFn = `toBeFalse()`

          return `test('Test ${index}', () => {
          expect(${fn})).${matchFn}
        })\n`.trimStart()
        }

        if (test.includes('assertSimilar')) {
          const testCase = test.split('assertSimilar(')[1]
          const [fn, equal] = testCase.includes('),') ? testCase.split('),') : testCase.split(') ,')
          const matchFn = `toEqual(${equal}`

          return `test('Test ${index + 1}', () => {
          expect(${fn})).${matchFn}
        })\n`.trimStart()
        }

        return test
      })
      .filter(Boolean)
      .join('\n')

    return {
      exportName,
      initialCode,
      initialTests,
      kyu: kyu.split(' ')[0],
      title,
      description: parsedDescription
    }
  })

  return data
}

/**
 * @param {string} kataLink
 */
async function main(kataLink) {
  if (!kataLink || !kataLink.match(/\/kata\//)) {
    console.warn('Please enter a valid kata link')
    return
  }

  let link = kataLink.replace(/\/train.*$/g, '')

  const browser = await puppeteer.launch({
    headless: false
  })
  const page = await browser.newPage()
  await page.goto(link + '/train', { waitUntil: 'networkidle0' })
  const data = await getKataDetails(page)

  const codes = generateCode({ ...data, link })
  const tests = generateTests({ ...data })

  const newDirectoryPath = `src/${data.kyu}_${data.title.toLowerCase()}`

  fs.promises
    .mkdir(newDirectoryPath, { recursive: true })
    .then(() => {
      fs.promises.writeFile(`${newDirectoryPath}/index.js`, codes, 'utf8')
      fs.promises.writeFile(`${newDirectoryPath}/index.test.js`, tests, 'utf8')
    })
    .then(() => console.log(`Kata created under ${newDirectoryPath}`))
    .catch(error => console.log(error))

  await browser.close()
}

main(process.argv[2])
