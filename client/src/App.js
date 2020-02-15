import React from "react";
import "./css/styles.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
