import { g, config } from '@grafbase/sdk'

const product = g.type('Product', {
  id: g.id(),
  name: g.string(),
  price: g.int()
})

g.query('products', {
  returns: g.ref(product).list(),
  resolver: 'products'
})

export default config({
  schema: g
})
