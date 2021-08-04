import ProductItem from './ProductItem'
import classes from './Products.module.css'

const FAKE_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'First book',
    description: 'xxxxxxx'
  },
  {
    id: 'p2',
    price: 10,
    title: 'Second book',
    description: 'yyyyyyyyy'
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {FAKE_PRODUCTS.map(({ title, price, description, id }) => {
          return (
            <ProductItem
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
            />
          )
        })}
      </ul>
    </section>
  )
}

export default Products
