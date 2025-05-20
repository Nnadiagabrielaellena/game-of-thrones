import { useState } from "react";
import Header from "./Components/ Header.jsx";
import AddCharacter from "./Components/AddCharacter.jsx";
import Banner from "./Components/Banner.jsx";
import ContainCard from "./Components/ContainCard.jsx";
import Footer from "./Components/Footer.jsx";
import charactersGOT from "./data.js";
import data from "./data.js";
function App() {
  const [characters, setCharacters] = useState(data);



  console.log(characters);
  return <div>
    <Header />
    <AddCharacter />
    <Banner />
    <ContainCard characters={characters} />
    <Footer />

  </div>;
}

export default App;
