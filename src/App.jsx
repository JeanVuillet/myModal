import React, { useRef } from "react";
import Modal from "./lib/index.jsx";

function App() {
  const buttonOpen = useRef(null);
  const modalElement = useRef(null);

  function addPerson(e) {
    e.preventDefault();
    console.log("Add person !!", e.target.name.value);
    modalElement.current.style.display = "none";
  }

  return (
    <>
      <div>
        Pour ouvrir le formulaire
        <button type="button" ref={buttonOpen}>
          {" "}
          cliquez ici
        </button>
      </div>
      <div id="personModal" ref={modalElement}>
        <Modal
          addPerson={addPerson}
          buttonOpen={buttonOpen}
          modalElement={modalElement}
        />
      </div>
    </>
  );
}

export default App;
