function ProductCard(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>Цена: {props.price} тг</p>
      <p className={props.inStock ? 'stock' : 'stock stock-out'}>
        {props.inStock ? 'В наличии' : 'Нет в наличии'}
      </p>
    </div>
  )
}

export default ProductCard
