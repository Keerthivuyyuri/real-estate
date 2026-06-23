import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import FeaturedProperties from "./components/FeaturedProperties";
import List from "./components/List";
import Details from "./components/Detail";
import Agent from "./components/Agent";
import Testimonials from "./components/Testimonials";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

   useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen overflow-x-hidden bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <HomeBanner />
        <FeaturedProperties />
        <List />
        <Details />
        <Agent />
        <Testimonials />
        <Form />
        <Footer />
      </div>
    </div>
  );
}

export default App;