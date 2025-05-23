import { useState } from "react";
import Header from "./Components/ Header.jsx";
import AddCharacter from "./Components/AddCharacter.jsx";
import Banner from "./Components/Banner.jsx";
import ContainCard from "./Components/ContainCard.jsx";
import Footer from "./Components/Footer.jsx";
import charactersGOT from "./data.js";


function App() {
  const initialCharacters = JSON.parse(localStorage.getItem("gotCharacters")) || charactersGOT;
  const [characters, setCharacters] = useState(initialCharacters);

  const addCharacter = (newCharacter) => {
    const updatedCharacters = [...characters, newCharacter];
    setCharacters(updatedCharacters);
    localStorage.setItem("gotCharacters", JSON.stringify(updatedCharacters));
  };

  const deleteCharacter = (idToDelete) => {
    const updatedCharacters = characters.filter(character => character.id !== idToDelete);
    setCharacters(updatedCharacters);
    localStorage.setItem("gotCharacters", JSON.stringify(updatedCharacters));
  };

  console.log(characters);
  return <div maxWidth="xl" sx={{ background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)" }}>

    <Header />
    <AddCharacter onAddCharacter={addCharacter} />
    <Banner />
    <ContainCard characters={characters} onDeleteCharacter={deleteCharacter} />
    <Footer />
  </div>;
}

export default App;
