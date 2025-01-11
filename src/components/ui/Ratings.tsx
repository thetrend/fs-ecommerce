import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { v4 as uuidv4 } from 'uuid'

interface RatingProps {
  rating: number
}

const Ratings: React.FC<RatingProps> = ({ rating }) => {
  return (
    <div className="book__ratings">
      {new Array(Math.floor(rating)).fill(0).map((value) => (
        <FontAwesomeIcon icon="star" key={uuidv4() + value} />
      ))}
      {!Number.isInteger(rating) && <FontAwesomeIcon icon="star-half-alt" />}
    </div>
  )
}

export default Ratings
