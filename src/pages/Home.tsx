import DiscountedBooks from '../components/DiscountedBooks'
import Explore from '../components/Explore'
import FeaturedBooks from '../components/FeaturedBooks'
import Highlights from '../components/Highlights'
import Landing from '../components/Landing'

const Home = () => {
  return (
    <>
      <Landing />
      <main>
        <Highlights />
        <FeaturedBooks />
        <DiscountedBooks />
        <Explore />
      </main>
    </>
  )
}

export default Home