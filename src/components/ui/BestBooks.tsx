import { books } from '../../data'
import Book from '../Book'

const BestBooks: React.FC<{ id?: number }> = ({ id }) => {
  return (
    <div className="books">
      {books
        .filter(book => {
          return id ? book.rating === 5 && book.id !== id : book.rating === 5;
        })
        .slice(0, 4)
        .map(book => (
          <Book key={book.id} book={book} />
        ))}
    </div>
  )
}

export default BestBooks
