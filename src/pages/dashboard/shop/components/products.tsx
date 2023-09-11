const Product = () => (
  <div className="card p-2 md:m-4 my-2 mx-1">
    <img className="rounded-lg" src="images/800x600.png" alt="image" />
      <div className="pt-2">
        <p className="line-clamp-1 font-medium text-slate-700 dark:text-navy-100">
          Duck Salad
        </p>
        <p className="line-clamp-1 text-xs text-slate-400 dark:text-navy-300">
          Description
        </p>
        <p className="text-right font-medium text-primary dark:text-accent-light">
          35.00 $
        </p>
      </div>
  </div>
)

const Products = () => {
  return (
    <div className="my-6 grid md:grid-cols-4 grid-cols-2" >
      {[0, 1, 2, 3, 4, 5].map((v) => (
        <Product
          key={v}
        />
      ))}
    </div>
  )
}

export default Products;