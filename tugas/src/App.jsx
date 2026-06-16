import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import MyListPage from "./pages/MyListPage"; 
import Profile from "./pages/Profile";       
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [myList, setMyList] = useState([]);

  const addToMyList = (movie) => {
    const isExist = myList.some((m) => m.id === movie.id);
    if (!isExist) {
      setMyList([...myList, movie]);
    } else {
      alert("Film ini sudah ada di Daftar Saya!");
    }
  };

  const deleteFromMyList = (id) => {
    setMyList(myList.filter((m) => m.id !== id));
  };

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home onAdd={addToMyList} />} />            
      <Route path="/daftar-saya" element={<MyListPage myList={myList} onRemove={deleteFromMyList} />} />            
      <Route path="/profile" element={<Profile myList={myList} onRemove={deleteFromMyList} />} />                        
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;