import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Main from "./Components/Main";
import Categories from "./Components/Categories";
import QuestionSection from "./Components/QuestionSection";
import BookingSection from "./Components/BookingSection";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Main />
      <Categories />
      <QuestionSection />
      <BookingSection />
      <Footer />
      <div className=" flex text-xs text-gray-400 font-extralight justify-between w-full m-2">
        <p>Copyright Calendly 2024</p>
        <p>Privacy/Terms and conditions</p>
      </div>
    </>
  );
}

export default App;
