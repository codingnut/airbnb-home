import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
};
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Carousel responsive={responsive}>
        <Card img="/images/featured.png" title="Card one" />
        <Card img="/images/featured.png" title="Card Two" />
        <Card img="/images/featured.png" title="Card Three" />
        <Card img="/images/featured.png" title="Card Four"/>
      </ Carousel>
    </div>
  );
}

export default App;
