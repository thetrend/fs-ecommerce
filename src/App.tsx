import { Route, Routes } from 'react-router'
import './App.css'
import { useState } from 'react'
import Footer from './components/Footer'
import Nav from './components/Nav'
import { type bookType, books } from './data'
import BookInfo from './pages/BookInfo'
import Books from './pages/Books'
import Cart from './pages/Cart'
import Home from './pages/Home'

const App: React.FC = () => {
  const [cart, setCart] = useState<bookType[]>([])

  function addToCart(book: bookType) {
    const dupeItem = cart.find((item) => item.id === book.id)
    setCart((oldCart) =>
      dupeItem ?
        [
          ...oldCart.map((item) => item.id === +dupeItem.id ? {
            ...item,
            quantity: (item.quantity ?? 1) + 1
          } : item)
        ] :
        [...oldCart, { ...book, quantity: 1 }]
    )
  }

  function updateCart(item: bookType, newQuantity: number) {
    setCart((oldCart) =>
      oldCart.map((oldItem) =>
        oldItem.id === item.id ? {
          ...oldItem,
          quantity: newQuantity,
        } : oldItem
      )
    );
  }

  function removeItem(item: bookType) {
    setCart((oldCart) => oldCart.filter((cartItem) => cartItem.id !== item.id));
  }

  function numberOfItems() {
    let counter = 0
    for (const item of cart) {
      counter += item.quantity ?? 1;
    }
    return counter
  }

  function calcPrices() {
    let total = 0
    for (const item of cart) {
      total += (item.salePrice ?? item.originalPrice) * (item.quantity ?? 1)
    }
    return {
      subTotal: total * 0.9,
      tax: total * 0.1,
      total,
    }
  }

  return (
    <>
      <Nav numberOfItems={numberOfItems()} />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/books" index element={<Books books={books} />} />
        <Route path="/books/:id" element={<BookInfo books={books} addToCart={addToCart} />} />
        <Route path="/cart" element={
          <Cart cart={cart} books={books} updateCart={updateCart} removeItem={removeItem} totals={calcPrices} />
        } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
