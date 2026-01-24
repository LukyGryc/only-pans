import LandingPageOrb from "@/components/landingPage/LandingPageOrb";
import ProductsIntro from "@/components/landingPage/ProductsIntro";

export default function Home() {
  return (
    <div className="bg-white w-full h-auto">
      <main>
        <LandingPageOrb />
        <ProductsIntro />
      </main>
    </div>
  );
}
