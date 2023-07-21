import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const state = useSelector((state) => state.handleCart)
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <NavLink
            className="navbar-brand fw-bold fs-3"
            to="/"
            style={{
              fontFamily: 'Great Vibes',
              fontSize: '30px',
            }}
          >
            OnlineStore
          </NavLink>

          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NavLink
                className="nav-link text-dark"
                style={{ fontSize: '20px' }}
                aria-current="page"
                to="/search"
              >
                Search
              </NavLink>
            </li>
          </ul>

          <NavLink to="/" className="btn btn-outline-dark">
            <ShoppingCartIcon />
            Cart [{state.length}]
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Header
