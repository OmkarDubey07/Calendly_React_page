import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Main from "./Components/Main";
import Categories from "./Components/Categories";
import QuestionSection from "./Components/QuestionSection";
import BookingSection from "./Components/BookingSection";

function App() {
  return (
    <>
      <NavBar />
      <Main />
      <Categories />
      <QuestionSection />
      <BookingSection />

    </>
  );
}

export default App;
