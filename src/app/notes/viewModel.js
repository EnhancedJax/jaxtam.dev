"use client";

import { createContext, useEffect, useState } from "react";

const Context = createContext();

const ContextProvider = ({ data, children }) => {
  const { notes } = data;
  const [inputText, setInputText] = useState("");
  const [iframeUrl, setIframeUrl] = useState(
    "https://mag.wcoomd.org/uploads/2018/05/blank.pdf"
  );
  const [selectedItem, setSelectedItem] = useState(null);

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const filteredData = notes.filter((el) => {
    //if no input the return the original
    if (inputText === "") {
      return el;
    }
    //return the items which contains the user input
    else {
      return el.node.code.toLowerCase().includes(inputText);
    }
  });

  const handleItemClick = (code, url) => {
    if (window.innerWidth <= 1024) {
      window.open(url);
    } else {
      setIframeUrl(url);
    }
    setSelectedItem(code);
  };

  useEffect(() => {
    setSelectedItem(notes[0].node.code);
    setIframeUrl(notes[0].node.pdf.url);
  }, [notes]);

  return (
    <Context.Provider
      value={{
        inputText,
        inputHandler,
        handleItemClick,
        iframeUrl,
        filteredData,
        selectedItem,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
