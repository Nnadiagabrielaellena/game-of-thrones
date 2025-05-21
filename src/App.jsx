import { useState } from "react";
import Header from "./Components/ Header.jsx";
import AddCharacter from "./Components/AddCharacter.jsx";
import Banner from "./Components/Banner.jsx";
import ContainCard from "./Components/ContainCard.jsx";
import Footer from "./Components/Footer.jsx";
import charactersGOT from "./data.js";
import data from "./data.js";


import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();



function App() {
  const initialCharacters = JSON.parse(localStorage.getItem("gotCharacters")) || charactersGOT;
  const [characters, setCharacters] = useState(initialCharacters);



  console.log(characters);
  return <div maxWidth="xl"  sx={{background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)"}}>
     <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <Header />
   
    <AddCharacter />
    <Banner />
    <ContainCard characters={characters} />
    <Footer />
    </ThemeProvider>
    

  </div>;
}

export default App;
