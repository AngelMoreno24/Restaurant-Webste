import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import ImageUpload from "./pages/Upload";
import Cart from "./pages/Cart";
import "./App.css"


function App() {
  return (
    <div className="App background">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Menu" element={<Menu/>}></Route>
          <Route path="/Upload" element={<ImageUpload/>}></Route>
          <Route path="/Cart" element={<Cart/>}></Route>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
