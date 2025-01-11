import { Link } from 'react-router'

const Explore: React.FC = () => {
  return (
    <section id="explore">
      <div className="container">
        <div className="row row__column">
          <h2>
            Explore more <span className="purple">Books</span>
          </h2>
          <Link to="/books">
            <button type="button" className="btn">Explore books</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Explore
