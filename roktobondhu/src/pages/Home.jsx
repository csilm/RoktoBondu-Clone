import Banner from "../components/HomeComponent/Banner/Banner";
import Event from "../components/HomeComponent/EventComponent/Event";
import FAQ from "../components/HomeComponent/FAQ/FAQ";
import Gallary from "../components/HomeComponent/Gallary/Gallary";

const Home = () => {
  return (
    <div>
      <Banner />
      <Event />
      <Gallary />
      <FAQ />
    </div>
  );
};

export default Home;
