import { useEffect, useState } from "react";
import { Product as ProductType } from "../../../../types";
import { getStoreProdutcs } from "../helper";
import { useParams } from "react-router-dom";
import { notify, NotificationComponent } from "../../components/notification/toast";
import { formatter } from "../../helper/tools";

const Product = ({
  name,
  image,
  description,
  price
}: {
  image: string;
  name: string;
  description: string;
  price: number
}) => (
  <div className="card p-2 md:m-4 my-2 mx-1">
    <img className="rounded-lg" src={image} alt="image" />
      <div className="pt-2">
        <p className="line-clamp-1 font-medium text-slate-700 dark:text-navy-100">
          {name}
        </p>
        <p className="line-clamp-1 text-xs text-slate-400 dark:text-navy-300">
          {description}
        </p>
        <p className="text-right font-medium text-primary dark:text-accent-light">
          {formatter.format(price)}
        </p>
      </div>
  </div>
)

const Products = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  const {id: shop_id} = useParams();
  useEffect(() => {
    const setUp = async () =>{
      const [error,_products] = await getStoreProdutcs(shop_id!);
      if (error) {
        notify(
          (<NotificationComponent message='Error fetching trades' />),
          {
            className: 'bg-red-400 text-white'
          })

        console.log(error)
      }

      if (_products) {
        setProducts(_products)
      }
    }

    setUp()
  }, [shop_id]);

  return (
    <div className="my-6 grid md:grid-cols-4 grid-cols-2" >
      {products && products.map((product, index) => (
        <Product
          name={product.name}
          description={product.description}
          image={product.imageUrls![0]}
          price={Number(product.price)}
          key={index}
        />
      ))}
    </div>
  )
}

export default Products;