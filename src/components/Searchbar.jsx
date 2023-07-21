import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Searchbar = () => {
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="container">
      <div className=" ">
        <h1 className="fw-bold ">Search for your products</h1>
        <input
          style={{
            outline: 'none',
            width: '50%',
            height: '2rem',
            border: '2px solid black',
            borderRadius: '9px',
            marginBottom: '40px',
          }}
          type="search"
          name="src"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {data
        .filter((product) => {
          if (search == '') {
            return product
          } else if (
            product.title.toLowerCase().includes(search.toLowerCase())
          ) {
            return product
          }
        })
        .map((product) => {
          return (
            <>
              <div className="container ">
                <div className="row">
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
                </div>
              </div>
            </>
          )
        })}
    </div>
  )
}

export default Searchbar
