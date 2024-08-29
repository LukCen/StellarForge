import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
const apiURL = 'https://dummyjson.com/products/'

async function fetchProductData() {
  const randomNumber = Math.floor(Math.random() * 100)
  const productData = await fetch(`${apiURL}${randomNumber}`)
  const data = await productData.json()
  return data
}

export default function ProductCard() {
  const [productParams, setProductParams] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProductData()
        if (data) {
          setProductParams(data)
          console.dir(productParams)
        }

      } catch (e) {
        console.error(`Błąd: ${e}`)
      }
    }
    fetchData()
  }, [])


  return (

    <div className="flex flex-col gap-2 bg-white text-grey-superdark max-w-[200px] max-h-[350px] text-center rounded-md shadow-md">

      {productParams && (
        <>
          <img src={productParams?.images[0]} alt="" height={200} width={200} />
          <h3>{productParams?.title}</h3>
          <span>${productParams?.price}</span>
          <Link to={"/product"} title="Click me">Click me </Link>
        </>
      )
      }

    </div>
  )



}
