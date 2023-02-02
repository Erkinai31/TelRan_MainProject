import Main from "./components/Main/Main";
import { HashRouter, Route,Routes } from "react-router-dom";
import Category from "./components/Category/Category";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/category' element={<Category/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
