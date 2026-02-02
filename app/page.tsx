import LandingPageOrb from "./LandingPageOrb";
import ProductsIntro from "./ProductsIntro";

export default function Home() {
  return (
    <div className="bg-white w-full h-auto">
      <main id="main-content">
        <LandingPageOrb />
        <ProductsIntro />
      </main>
    </div>
  );
}
