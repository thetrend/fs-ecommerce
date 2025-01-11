import Highlight, { type HighlightType } from './ui/Highlight'

const highlights: HighlightType[] = [
  {
    icon: 'bolt',
    subtitle: 'Easy and Quick',
    para: 'Get access to the book you purchased instantly.'
  },
  {
    icon: 'book-open',
    subtitle: '10,000+ Books',
    para: 'Library has books in all your favorite categories.'
  },
  {
    icon: 'tags',
    subtitle: 'Affordable',
    para: 'Get your hands on popular books for as little as $10.'
  },
]

const Highlights: React.FC = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">Library</span>
          </h2>
          <div className="highlight__wrapper">
            {highlights.map(highlight => <Highlight key={highlight.subtitle} {...highlight} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Highlights
