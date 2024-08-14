import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header title="My Website" />
      <Content />
      <Footer year={2024} />
    </div>
  );
}

export default App;
