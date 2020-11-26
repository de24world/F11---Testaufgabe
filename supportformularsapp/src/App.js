import React from "react";
import Form from "./components/Form/Form";
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <LanguageSwitcher />
      <Form />
    </React.Fragment>
  );
}

export default App;
