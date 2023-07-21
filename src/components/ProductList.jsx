import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductList = () => {
  const [data, setData] = useState([])
  const [loading, setloading] = useState(false)

  useEffect(() => {
    const fetchProduct = async () => {
      setloading(true)
      const res = await fetch('https://fakestoreapi.com/products')

      setData(await res.json())
      setloading(false)
      console.log(data)
    }
    fetchProduct()
  }, [])

  const Loading = () => {
    return <>Loading...</>
  }

  const ShowProducts = () => {
    return (
      <>
        {data.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 " key={product.id}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height="350px"
                    style={{ objectFit: 'contain' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title ">
                      {product.title.substring(0, 25)}
                    </h5>
                    <p className="card-text fw-bold">${product.price}</p>
                    <a
                      href={`/product/${product.id}`}
                      className="btn btn-outline-dark"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </>
    )
  }

  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="col-12">
            <h1 className=" fw-bold">Our Products</h1>
          </div>
        </div>
        <div className="row">{loading ? <Loading /> : <ShowProducts />}</div>
      </div>
    </div>
  )
}
export default ProductList
