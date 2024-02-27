import Home from "./Home";
import Juego2 from "./Juego2";
import TicTacToe from "./TicTacToe";
import { Link, Route, Routes } from "react-router-dom";

export default function App(){
  return(
    <div>
      <h1>Mis Juegos</h1>
      <nav style={{borderBottom: "solid 1px", paddingBottom: "10px" }}>
        <Link to="/">Home</Link>  | { " " }
        <Link to="/tictactoe">Tres en Raya</Link>  | { " " }
        <Link to="/juego2">Otro juego</Link>  | { " " }
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/tictactoe" element={<TicTacToe/>}/>
        <Route path="/juego2" element={<Juego2/>}/>
      </Routes>
    </div>
  );
}