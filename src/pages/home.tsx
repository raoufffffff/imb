import Advantages from "../computent/home/Advantages";
import BoostYourMoney from "../computent/home/BoostYourMoney";
import Hero from "../computent/home/Hero";
import InvestmentCards from "../computent/home/InvestmentTypes ";


export default function Home() {
  return (
    <main
      className="w-full from-[#f0f8ff] to-[#e1f5fe] "
    >
      <Hero />
      {/* <h2
        className="my-5 w-10/12 mx-auto text-center text-xl font-bold text-[#1b3d4e] md:text-3xl"
      >الاستثمارات الحلال القائمة على الأخلاق والتركيز على الأثر</h2> */}
      <InvestmentCards />
      <BoostYourMoney />
      <Advantages />
    </main>
  );
}
