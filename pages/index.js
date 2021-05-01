import Info from '../components/info.js'
import Pricing from '../components/pricing.js'
import Presentation from '../components/presentation.js'
import Hero from '../components/hero.js'

export default function Home() {
  return (
    <div>
      <Hero />
      <Info />
      <Presentation />
      <Pricing />
    </div>
  )
}
