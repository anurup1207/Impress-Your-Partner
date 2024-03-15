
import './App.css';
import Main from './components/Main';
import Main2 from './components/Main2';
import one from "./components/1.gif";
import two from "./components/2.gif";
import three from "./components/3.gif";
import four from "./components/4.gif";
import yes from "./components/yes.gif";
import React, {useState} from 'react';
import {
  Routes as Switch,
  Route,
  useNavigate 
} from "react-router-dom";

function App() {
  const [clickNumber,setClickNumber] = useState(1);
  const navigate = useNavigate();

  const routeChange = (a) =>{ 
    let path = `/${a}`; 
    navigate(path);
  }

  const ClickNo = ()=>{
     setClickNumber(clickNumber +1);
    console.log(clickNumber)
    if(clickNumber + 1 === 2){
      routeChange(clickNumber+1)
    }else if(clickNumber + 1 === 3){
      routeChange(clickNumber+1)
    }else if(clickNumber +1 === 4){
      routeChange(clickNumber +1);
    }
   
   
 }
 const ClickYes = ()=>{
  routeChange("yes");
   
 }
  return (
    <>
         <Switch>
         <Route path="/" key="1" element={<Main image={one} headingText="Do You Love Me?" smallText="Batao Batao 😋" ClickYes={ClickYes} ClickNo ={ClickNo} />}/>
         <Route path="/2" key="2" element={<Main image={two} headingText="Soch le Accha Se!" smallText="itna Jldi Mt Bole 🙂" ClickYes={ClickYes} ClickNo ={ClickNo} />}/>
         <Route path="/3" key="3" element={<Main image={three} headingText="Ek baar Aur Soch le!" smallText="Kya Itna Bura hoon main Maa " ClickYes={ClickYes} ClickNo ={ClickNo} />}/>
         <Route path="/4" key="4" element={<Main2 image={four} headingText="Maanja na Yaar! Ab aur kitna " smallText="Give Up BRO" ClickYes={ClickYes} />}/>
         <Route path="/yes" key="4" element={<Main image={yes} headingText="This is Us Now !" smallText="😁😁" ClickYes={ClickYes} ClickNo ={ClickNo} />}/>
        </Switch>
    
    </>
  );
}

export default App;
