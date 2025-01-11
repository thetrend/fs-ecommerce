import { v4 as uuidv4 } from 'uuid'

import { type bookType, books } from '../data'
import Book from './Book'

const DiscountedBooks: React.FC = () => {
  return (
    <section id="recent">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Discounted <span className="purple">Books</span>
          </h2>
          <div className="books">
            {
              books
                .filter((book: bookType) => typeof book.salePrice === 'number' && book.salePrice > 0)
                .slice(0, 8)
                .map((book: bookType) => <Book key={`${uuidv4()}-${book.id}`} book={book} />)
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default DiscountedBooks
