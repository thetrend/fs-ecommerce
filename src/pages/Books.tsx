import { useEffect, useState } from 'react'
import Book from '../components/Book'
import type { bookType } from '../data'

export interface BooksProps {
  books: bookType[]
  addToCart?: (book: bookType) => void
}

type filterType = "LOW_TO_HIGH" | "HIGH_TO_LOW" | "RATING"

const Books: React.FC<BooksProps> = ({ books: booksList }) => {
  const [books, setBooks] = useState<bookType[]>()

  useEffect(() => {
    setBooks(booksList)
  }, [booksList])

  function filterBooks(filter: filterType) {
    switch (filter) {
      case "LOW_TO_HIGH":
        return books && setBooks(
          books?.slice()
            .sort(
              (a, b) =>
                (a.salePrice ?? a.originalPrice) -
                (b.salePrice ?? b.originalPrice)
            )
        )
      case "HIGH_TO_LOW":
        return setBooks(
          books?.slice()
            .sort(
              (a, b) =>
                (b.salePrice ?? b.originalPrice) -
                (a.salePrice ?? a.originalPrice)
            )
        );
      case "RATING":
        return setBooks(
          books?.slice()
            .sort((a, b) => b.rating - a.rating)
        )
      default:
        break
    }
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">All Books</h2>
                <select name="sortBooks" id="filter" defaultValue={"DEFAULT"}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => filterBooks(e.target.value as filterType)}>
                  <option value="DEFAULT" disabled>Sort</option>
                  <option value="LOW_TO_HIGH">Price, Low to High</option>
                  <option value="HIGH_TO_LOW">Price, High to Low</option>
                  <option value="RATING">Rating</option>
                </select>
              </div>
              <div className="books">
                {
                  books?.map((book: bookType) => <Book key={book.id} book={book} />)
                }
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Books
