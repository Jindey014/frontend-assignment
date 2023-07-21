import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addCart } from '../redux/action'
import { Link, useParams } from 'react-router-dom'

const ProductDetail = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState([])
  const dispatch = useDispatch()
  const addProduct = (product) => {
    dispatch(addCart(product))
  }

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true)
      const res = await fetch(`https://fakestoreapi.com/products/${id}`)
      setProduct(await res.json())
      setLoading(false)
    }
    getProduct()
  }, [])

  const Loading = () => {
    return <>Loading...</>
  }

  const ShowProductDetails = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="500px"
            width="500px"
          />
        </div>
        <div className="col-md-6  ">
          <h4 className="text-uppercase fw-bolder">{product.category}</h4>
          <h1>{product.title}</h1>
          <h3 className="fw-bold my-3">$ {product.price}</h3>
          <p className="lead ">{product.description}</p>
          <button
            className="btn btn-outline-dark px-4 py-2 "
            onClick={() => addProduct(product)}
          >
            Add to Cart
          </button>
          <Link to="/cart" className="btn btn-dark px-4 py-2 ms-2">
            {' '}
            Go to Cart
          </Link>
        </div>
      </>
    )
  }

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProductDetails />}
        </div>
      </div>
    </div>
  )
}
export default ProductDetail
