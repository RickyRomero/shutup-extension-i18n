/*
 * Extremely basic check to ensure that no JSON files have syntax errors.
 */

const fs = require('fs')

let errorFlag = false

recurse('../data')

if (errorFlag) {
  console.error('Found some errors. Please fix.')
} else {
  console.log('Success! All files passed inspection.')
}



function recurse (into) {
  let contents = fs.readdirSync(into)

  contents.forEach(item => {
    let fullPath = into + '/' + item

    if (fs.statSync(fullPath).isDirectory()) {
      recurse(fullPath)
    } else {
      if (/\.json$/.test(item)) {
        testJSON(fullPath)
      }
    }
  })
}

function testJSON (path) {
  try {
    JSON.parse(fs.readFileSync(path, {encoding: 'utf8'}))
  } catch (e) {
    errorFlag = true
    console.warn(`Unable to parse JSON at ${path}.\n\tError was: ${e.message}`)
  }
}
