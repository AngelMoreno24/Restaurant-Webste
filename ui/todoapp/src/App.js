import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import "./App.css"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Menu" element={<Menu/>}></Route>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
