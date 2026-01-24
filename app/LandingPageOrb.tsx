import Orb from "@/components/reactbits/Orb"

const LandingPageOrb = () => {
  return (
    <section className="w-full min-h-[600px] md:min-h-[800px] relative flex items-center justify-center">
        <div className="absolute inset-0">
          <Orb
              hoverIntensity={0}
              hue={0}
              backgroundColor="#000000"
          />
        </div>
        <div className="absolute flex flex-col gap-6 md:gap-12 px-4 z-10">
          <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">THE FUTURE OF COOKING</h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-center">IS HERE</h2>
          </div>
          <p className="text-base md:text-lg text-center">The only pans you will ever need</p>
        </div>
    </section>
  )
}

export default LandingPageOrb