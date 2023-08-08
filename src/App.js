import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./companent/navbar/Navbar";
import PageContainer from "./containers/PageContainer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Details from "./pages/Details";
import Carts from "./pages/Carts";
import Login from './companent/Home/Login';
import Register from './pages/Register';
import Fav from "./pages/Fav";



function App() {
  return (
    <>
      <PageContainer>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Details/>}/>
          <Route path="/cart" element={<Carts/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/fav" element={<Fav/>}/>
        </Routes>
      </PageContainer>
    </>
  );
}

export default App;
