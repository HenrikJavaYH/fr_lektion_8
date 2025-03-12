import { useEffect, useState } from "react"
import { ProductCard } from "~/components/ProductCard"
import type { Product } from "~/types/Product"


export function Welcome() {

  const [productList, setProductlist] = useState<Product[]>(
    [{
      id: 0,
      title: "",
      price: "",
      description: "",
      category: "",
      image: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
      rating: {
        rate: 0,
        count: 0
      }
    }]
  )

  //on component/view creation
  useEffect( () => {
    console.log("Created! - Hello world!")

    //fetch
    async function fetchData() {
      const result = await fetch("https://fakestoreapi.com/products")
      const products: Product[] = await result.json()
      
      setProductlist(products)
    }

    fetchData()
    
  }, [])
  


  return <div>
    {/*loop trough Products*/}

    {productList.map( (
      { id, title, description, image, price, rating, category}) => (
       <ProductCard
       key={id} 
       id={id} 
       title={title} 
       price={price} 
       description={description} 
       category={category} 
       image={image} 
       rating={rating}
       />
      ) 
      )}
  </div>
}