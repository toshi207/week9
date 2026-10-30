import ProductCard from './ProductCard.jsx'

function ProductList(props) {
  const inStockCount = props.products.filter((p) => p.inStock).length

  return (
    <div>
      <p className="summary">
        В наличии: {inStockCount} из {props.products.length}
      </p>
      <div className="list">
        {props.products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            inStock={product.inStock}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductList
