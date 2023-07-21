import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import ProductList from './components/ProductList'
import { Routes, Route } from 'react-router-dom'
import ProductDetail from './components/ProductDetail'
import Searchbar from './components/Searchbar'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" Component={ProductList}></Route>
        <Route exact path="/product/:id" Component={ProductDetail}></Route>
        <Route exact path="/search" Component={Searchbar}></Route>
      </Routes>
    </>
  )
}

export default App
