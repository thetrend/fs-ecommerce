import undrawBooksLogo from '../assets/Undraw_Books.svg'

const Landing: React.FC = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>Connecticut's most awarded online library platform</h1>
            <h2>Find your dream book with <span className="purple">Library</span></h2>
            <a href="#features">
              <button type="button" className="btn">Browse books</button>
            </a>
          </div>
          <figure className="header__img--wrapper">
            <img src={undrawBooksLogo} alt="" />
          </figure>
        </div>
      </header>
    </section>
  )
}

export default Landing
