import Header from './Component/Header';
import Navbar from './Component/Navbar';
import NewLaunchCarousel from './Component/NewLaunchCarousel';
import PropertyTypeExplorer from './Component/PropertyTypeExplorer';
import TopDevelopers from './Component/TopDevelopers';
import WorldsBestDeveloper from './Component/worldsbestdevloper';
import WhyChooseUs from './Component/WhyChooseUs';
import TestimonialsCarousel from './Component/TestimonialsCarousel';
import OurBlog from './Component/ourblog';
import Download from './Component/download';
import Footer from './Component/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <NewLaunchCarousel />
      <PropertyTypeExplorer />
      <TopDevelopers />
      <WorldsBestDeveloper />
      <WhyChooseUs />
      <TestimonialsCarousel />
      <OurBlog />
      <Download />
      <Footer />  
    </>
  );
}

export default App;
