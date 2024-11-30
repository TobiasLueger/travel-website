import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { ResortSection } from '@/components/resort-section'
import { DestinationMap } from '@/components/destination-map'
import { BestPackage } from '@/components/best-package'
import { Newsletter } from '@/components/newsletter'
import { PromoCard } from '@/components/promo-card'
import { Stats } from '@/components/stats'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="container mx-auto px-4 space-y-20">
        <Hero />
        <ResortSection />
        <DestinationMap />
        <BestPackage />
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <Newsletter />
          <PromoCard />
        </div>
        <Stats />
      </main>
    </div>
  )
}

