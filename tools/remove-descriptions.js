/*
 * Removes descriptions to create smaller translation files for the end product.
 */

const fs = require('fs')



recurse('../data')

function recurse (into) {
  let contents = fs.readdirSync(into)

  contents.forEach(item => {
    let fullPath = into + '/' + item

    if (fs.statSync(fullPath).isDirectory()) {
      recurse(fullPath)
    } else {
      if (/\.json$/.test(item)) {
        removeDescriptions(fullPath)
      }
    }
  })
}

function removeDescriptions (path) {
  console.log(path)
  let strings = JSON.parse(fs.readFileSync(path, {encoding: 'utf8'}))

  Object.keys(strings).forEach((key) => {
    if (strings[key].description) {
      delete strings[key].description
    }
  })

  console.log(JSON.stringify(strings, null, 2))

  console.log('\n')
  console.log('\n')
  console.log('\n')
}
