import Orb from '../reactbits/Orb'

const LandingPageOrb = () => {
  return (
    <section className="w-full h-200 relative flex items-center justify-center">
        <Orb
            hoverIntensity={0}
            hue={0}
            backgroundColor="#000000"
        />
        <div className="absolute flex flex-col gap-12">
        <div>
            <h1 className="text-4xl font-bold text-center">THE FUTURE OF COOKING</h1>
            <h2 className="text-2xl text-center">IS HERE</h2>
        </div>
        <p className="text-center">The only pans you will ever need</p>
        </div>
    </section>
  )
}

export default LandingPageOrb