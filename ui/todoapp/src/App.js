import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MainPage from "./pages/mainPage";
import "./App.css"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}></Route>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
