import React from "react";

import { HashRouter as Router, Route } from "react-router-dom";

import { StateMachineProvider, createStore } from "little-state-machine";

import { withTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";
import Form from "./components/Form/Form";
import Result from "./components/Result/Result";

import "./App.css";

createStore({
  data: {},
});

const App = () => {
  const { t } = useTranslation();

  return (
    <StateMachineProvider>
      <h1> {t("SupportForm")}</h1>
      <LanguageSwitcher />

      <Router>
        <Route exact path="/" component={Form} />
        <Route path="/result" component={Result} />
      </Router>
    </StateMachineProvider>
  );
};

export default withTranslation()(App);
