import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;






// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import './App.css';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
// import Title from './pages/Title';

// function App() {
//   return (
//     <BrowserRouter>
//     <Routes>
//     <Route path="/" element ={<Home />}/>
//       <Route path="/signup" element ={<Signup />} />
//       <Route path="/login" element ={<Login />}    />
//       <Route path="/title" element ={<Title />}    />
//     </Routes>
//     </BrowserRouter>
   
//   );
// }

// export default App;
