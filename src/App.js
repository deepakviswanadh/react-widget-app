import React, { Fragment, useState } from "react";
import Applet from "./components/Applet";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate/Translate";
import Header from "./components/Header";
import Route from "./components/Route";

const App = () => {
  const quotes = [
    {
      title: "What is React?",
      content: "React is a front end javascript framework",
    },
    {
      title: "Why use React?",
      content: "React is a favorite JS library among engineers",
    },
    {
      title: "How do you use React?",
      content: "You use React by creating components",
    },
  ];

  const options = [
    {
      label: "Red Color",
      value: "red",
    },
    {
      label: "Blue Color",
      value: "blue",
    },
    {
      label: "Green color",
      value: "green",
    },
  ];

  //default value for dropdown is set to red
  const [selected, setSelected] = useState(options[0]);

  return (
    <Fragment>
      <Header />
      <Route path="/">
        <Applet text={quotes} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          selected={selected}
          choice={options}
          onSelectedHandler={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </Fragment>
  );
};

export default App;
