import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Features from "./components/Features";
import ExtensionSection from "./components/ExtensionSection";
import FAQ from "./components/FAQ";
import Subscription from "./components/Subscription";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <div>
        <Features />
      </div>
      <ExtensionSection />
      <FAQ />
      <Subscription />
      <Footer />
    </>
  );
}

export default App;
