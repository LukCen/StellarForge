import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
const apiURL = 'https://dummyjson.com/products/'

export default function ProductPage() {
  const [isActive, setIsActive] = useState(false)
  let { productId } = useParams()
  const [productParams, setProductParams] = useState(null)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await fetch(`${apiURL}${productId}`)
        const data = await productData.json()
        if (data) {
          setProductParams(data)
        }
      }
      catch (e) {
        console.error(e)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="product_page flex max-w-[1200px] m-[0_auto]">
      {
        productParams &&
        <>
          <section className="gallery flex gap-5 shadow-lg p-4 rounded-md">
            <div className="subgallery flex flex-col gap-2">
              {productParams?.images.map((e, index) => {

                return (
                  <button>
                    <img data-active={isActive} onClick={() => { isActive === false ? setIsActive(true) : setIsActive(false) }} className="subgallery_img shadow-md rounded-lg" data-id={index} key={`0${index}`} src={e} alt="" height={80} width={80} />
                  </button>
                )
              })}
            </div>
            <div className="main_gallery">
              <div className="main_gallery__text">
                <h1>{productParams?.title}</h1>
                <h2>${productParams?.price}</h2>
              </div>

            </div>
          </section>
          <section className="details flex gap-5 shadow-lg">


          </section>
        </>
      }
    </div>
  )
}
