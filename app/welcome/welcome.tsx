import { useEffect, useState } from "react"
import type { Product } from "~/types/Product"


export function Welcome() {

  const [productList, setProductlist] = useState<Product[]>(
    [{
      id: 0,
      title: "",
      price: "",
      description: "",
      category: "",
      image: "",
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
       <div>
        <p>id: {id}</p>
        <p>title: {title}</p>
        <p>image: {image}</p>
        <p>id: {description}</p>
        <p>price: {price}</p>
        <p>rating, count: {rating.count}</p>
        <p>rating, rate: {rating.rate}</p>
        <p>category: {category}</p>
        
       </div>
      ) 
      )}
  </div>
}