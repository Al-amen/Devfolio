import { useState } from "react";

import viteLogo from "/vite.svg";
import { Button } from "./components/ui/button";
import { Navbar } from "./ui_components/Navbar";
import Header from "./ui_components/Header";
import BlogContainer from "./ui_components/BlogContainer";
import Footer from "./ui_components/Footer";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar/>
      <Header/>
      <BlogContainer/>
      <Footer/>
    </div>
  );
}

export default App;
