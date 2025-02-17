import Counter from '../components/widgets/Counter'
import HomepageNav from '../components/widgets/HomepageNav'

type Props = {}

const Homepage = (props: Props) => {
  return (
    <div className="relative h-screen bg-[url('images/home-cover.jpg')] bg-cover bg-center flex flex-col">
      
      <HomepageNav />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>

      {/* Hero Section */}
      <div className="flex flex-col items-left justify-center h-full text-left text-white px-6">
        <h1 className="max-w-3/4 text-5xl md:text-7xl font-bold drop-shadow-lg">
          Trust in healthcare, backed by the security of Web3.
        </h1>
        <p className="mt-4 text-lg md:text-2xl max-w-2xl drop-shadow-lg">
          Sync and manage your healthcare data across the blockchain using UHI.
        </p>
      
      </div>
    </div>
  )
}

export default Homepage
