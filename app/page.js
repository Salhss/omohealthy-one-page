import HeroHome from "./components/home/hero";
import ProductHome from "./components/home/product";
import BenefitHome from "./components/home/benefit";
import AchievementHome from "./components/home/achievement";
import TestimoniHome from "./components/home/testimoni";
import BestFriendHome from "./components/home/best-friend";
import StoreHome from "./components/home/store";
import Footer from "./components/layout/footer";

export default function Home() {
  return (
    <>
      <HeroHome />
      <ProductHome />
      <BenefitHome />
      <AchievementHome />
      <TestimoniHome />
      <BestFriendHome />
      <StoreHome />
      <Footer />
    </>
  );
}
