import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Nav from "../components/Nav"
const apiURL = 'https://dummyjson.com/products/'

export default function ProductPage() {
  const [isActive, setIsActive] = useState(null)
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
    <div className="product_page flex flex-col max-w-[1200px] m-[0_auto]">
      <Nav />
      {
        productParams &&
        <>
          <section className="gallery flex gap-5 shadow-lg p-4 rounded-md">
            <div className="subgallery flex flex-col gap-2">
              {productParams?.images.map((e, index) => {
                return (
                  <button className="hover:scale-110 transition-transform " onClick={() => setIsActive(index)}>
                    <img className="subgallery_img shadow-md rounded-lg" data-id={index} key={`0${index}`} src={e} alt="" height={80} width={80} />
                  </button>
                )
              })}
            </div>
            <div className="main_gallery">
              <div className="main_gallery__text">
                <h1>{productParams?.title}</h1>
                <h2>${productParams?.price}</h2>
              </div>

              <img width={400} height={400} src={isActive !== null ? productParams?.images[isActive] : productParams?.images[1]} alt="" />
            </div>
          </section>
          <section className="details flex gap-5 shadow-lg">
            <div>

            </div>
          </section>
          <section className="opinions flex flex-col gap-4">
            <h2>Opinions</h2>
            {productParams &&
              productParams?.reviews.map((e, index) => {
                return (
                  <div className="opinion_block flex flex-col shadow-md rounded-md gap-2">
                    <h3>{e?.reviewerName}</h3>
                    {/* <span>{e?.date}</span> */}
                    <span>{`${e?.rating}/5`}</span>
                    <p>{e?.comment}</p>
                  </div>
                )
              })
            }
          </section>
        </>
      }
    </div>
  )
}
