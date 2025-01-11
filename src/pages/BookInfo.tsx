import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useParams } from 'react-router'
import BestBooks from '../components/ui/BestBooks'
import Price from '../components/ui/Price'
import Ratings from '../components/ui/Ratings'
import type { bookType } from '../data'
import type { BooksProps } from '../pages/Books'

const BookInfo: React.FC<BooksProps> = ({ books, addToCart }) => {
  const { id } = useParams()
  const book = id && books.find((book: bookType) => book.id === +id)

  return book && (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">
                  Books
                </h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={book.url} alt="" className="book__selected--img" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Ratings rating={book.rating} />
                <div className="book__selected--price">
                  <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus delectus ducimus, magni ab neque ex iure praesentium facere placeat tempora, hic provident architecto quae asperiores voluptatibus veritatis, repellendus dolorum dolor.
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus delectus ducimus, magni ab neque ex iure praesentium facere placeat tempora, hic provident architecto quae asperiores voluptatibus veritatis, repellendus dolorum dolor.
                  </p>
                </div>
                <button type="button" className="btn" onClick={() => addToCart?.(book)}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">
                Recommended Books
              </h2>
            </div>
            <BestBooks id={+id} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default BookInfo