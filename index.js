var assert = require('nanoassert')

class Views {
  static init () {
    return new this(...arguments)
  }

  constructor (h, views) {
    assert.equal(typeof h, 'function', '`h` should be an element factory function')

    for (var prop in views) {
      if (this[prop]) {
        throw cannotOverwrite(prop)
      } else {
        this[prop] = data => views[prop](h, data)
      }
    }
  }
}

function cannotOverwrite (prop) {
  return new Error('[abstract-views] Cannot overwrite property: ' + prop)
}

module.exports = Views
