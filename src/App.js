import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import locationData from "./locationData";

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

  const locations = locationData.map((location, index) => {
    return (<Card 
      key={index}
      classkey={index}
      img={location.img} 
      title={location.title} 
      booked={location.booked} 
      rating={location.rating} 
      reviewCount={location.reviewCount} 
      price={location.price} 
      // or pass everything item = {location} or {...location}
    />
    )
  }
  )
  return (
    <div className="App">
      <Navbar items='1'/>
      <Hero />
      <Carousel responsive={responsive}>
        {locations}
      </ Carousel>
    </div>
  );
}

export default App;
