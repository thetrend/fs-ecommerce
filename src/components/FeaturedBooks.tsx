import BestBooks from './ui/BestBooks'

const FeaturedBooks: React.FC = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="purple">Books</span>
          </h2>
          <BestBooks />
        </div>
      </div>
    </section>
  )
}

export default FeaturedBooks
