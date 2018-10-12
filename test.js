var Views = require('./')
var h = require('hyperscript')
var test = require('tape')

test('register and render', t => {
  var views = Views.init(h, {
    main: (h, data) => h('body', data.text)
  })

  t.equal(
    views.main({ text: 'Hello world!' }).outerHTML,
    '<body>Hello world!</body>'
  )

  t.end()
})

test('throw expected errors', t => {
  try {
    Views.init(null, {})
    t.notOk(true)
  } catch (err) {
    t.ok(err)
  }

  try {
    Views.init(h, { constructor: (h, data) => null })
    t.notOk(true)
  } catch (err) {
    t.ok(err)
  }

  t.end()
})
