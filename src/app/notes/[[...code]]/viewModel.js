"use client";

import { createContext, useEffect, useState } from "react";
import { DEFAULT_PDF_URL } from "../../../utils/constants";

const Context = createContext();

const ContextProvider = ({ data, children }) => {
  const { notes, slugCode } = data;
  const [inputText, setInputText] = useState("");
  const [iframeUrl, setIframeUrl] = useState(DEFAULT_PDF_URL);
  const [selectedNoteCode, setSelectedNoteCode] = useState(null);
  const [selectedNote, setSelectedNote] = useState(null);

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const filteredData = notes.filter((el) => {
    if (inputText === "") {
      return el;
    } else {
      return el.node.code.toLowerCase().includes(inputText);
    }
  });

  const handleItemClick = (code, url) => {
    setSelectedNoteCode(code);
    setSelectedNote(notes.find((el) => el.node.code === code)?.node) || null;
    setIframeUrl(url);
    window.history.pushState({}, "", `/notes/${code}`);
  };

  useEffect(() => {
    let initNoteIndex = 0;
    if (slugCode) {
      const foundIndex = notes.findIndex(
        (note) => note.node.code.toLowerCase() === slugCode.toLowerCase()
      );
      console.log("foundIndex", foundIndex, slugCode);
      initNoteIndex = foundIndex === -1 ? 0 : foundIndex;
    }
    setSelectedNoteCode(notes[initNoteIndex].node.code);
    setIframeUrl(notes[initNoteIndex].node.pdf.url);
  }, [notes, slugCode]);

  return (
    <Context.Provider
      value={{
        inputText,
        inputHandler,
        handleItemClick,
        iframeUrl,
        filteredData,
        selectedNoteCode,
        selectedNote,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
