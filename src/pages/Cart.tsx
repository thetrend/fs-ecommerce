import { Link } from 'react-router';
import EmptyCart from '../assets/empty_cart.svg'
import type { bookType } from '../data'
import type { BooksProps } from './Books'

type totalsProps = {
  subTotal: number;
  tax: number;
  total: number;
}

interface CartProps extends BooksProps {
  cart: BooksProps['books'],
  updateCart: (item: bookType, newQuantity: number) => void,
  removeItem: (item: bookType) => void,
  totals: () => totalsProps
}

const Cart: React.FC<CartProps> = ({ cart, updateCart, removeItem, totals }) => {
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                {
                  cart.map((book) => {
                    const itemPrice = book.salePrice ?? book.originalPrice
                    return (
                      <div className="cart__item" key={book.id}>
                        <div className="cart__book">
                          <img className="cart__book--img" src={book.url} alt="" />
                          <div className="cart__book--info">
                            <span className="cart__book--title">{book.title}</span>
                            <span className="cart__book--price">${(book.salePrice ?? book.originalPrice).toFixed(2)}</span>
                            <button className="cart__book--remove" type="button"
                              onClick={() => removeItem(book)}>Remove</button>
                          </div>
                        </div>
                        <div className="cart__quantity">
                          <input
                            type="number"
                            className="cart__input"
                            min={0}
                            max={99}
                            value={book.quantity}
                            onChange={(event) =>
                              updateCart(book, +event.target.value)
                            }
                          />
                        </div>
                        <div className="cart__total">
                          ${(itemPrice * (book.quantity ?? 1)).toFixed(2)}
                        </div>
                      </div>
                    )
                  })
                }
                {(!cart?.length) && (
                  <div className="cart__empty">
                    <img className="cart__empty--img" src={EmptyCart} alt="" />
                    <h2>You don't have any books in your cart!</h2>
                    <Link to="/books">
                      <button type="button" className="btn">Browse books</button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
            {!!cart?.length && (
              <div className="total">
                <div className="total__item total__sub-total">
                  <span>Subtotal</span>
                  <span>${totals().subTotal.toFixed(2)}</span>
                </div>
                <div className="total__item total__tax">
                  <span>Tax</span>
                  <span>${totals().tax.toFixed(2)}</span>
                </div>
                <div className="total__item total__price">
                  <span>Total</span>
                  <span>${totals().total.toFixed(2)}</span>
                </div>
                <button type="button"
                  className="btn btn__checkout no-cursor"
                  onClick={() => alert('Checkout is not available yet!')}
                >Proceed to Checkout</button>
              </div>
            )
            }
          </div>
        </div>
      </main>
    </div>
  )
}

export default Cart
