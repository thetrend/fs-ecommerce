import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import type { bookType } from '../data'
import Price from './ui/Price'
import Ratings from './ui/Ratings'

export interface BookProps {
  book: bookType
}

const Book: React.FC<BookProps> = (
  { book: { id, title, url, originalPrice, salePrice, rating }
  }) => {
  const [img, setImg] = useState<string | undefined>(undefined)
  const mountedRef = useRef(true)

  useEffect(() => {
    mountedRef.current = true
    const image = new Image()
    image.src = url
    image.onload = () => {
      setTimeout(() => {
        if (mountedRef.current) {
          setImg(image.src)
        }
      }, 300)
    }
    return () => {
      mountedRef.current = false
    }
  }, [url])

  useEffect(() => {
    console.log('img', img)
  }, [img])

  return (
    <div className="book">
      {!img ? (
        <>
          <div className="book__img--skeleton" />
          <div className="skeleton book__title--skeleton" />
          <div className="skeleton book__rating--skeleton" />
          <div className="skeleton book__price--skeleton" />
        </>
      ) :
        (
          <>
            <Link to={`/books/${id}`}>
              <figure className="book__img--wrapper">
                <img className="book__img" src={img} alt={title} />
              </figure>
            </Link>
            <div className="book__selected--title">
              <Link to={`/books/${id}`} className="book__title--link">
                {title}
              </Link>
            </div>
            <Ratings rating={rating} />
            <Price salePrice={salePrice} originalPrice={originalPrice} />
          </>
        )
      }
    </div>
  )
}

export default Book
