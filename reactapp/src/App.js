import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/ReactRouter/Home";
import About from "./components/ReactRouter/About";
import Contact from "./components/ReactRouter/Contact";
import Adfar from "./components/ReactRouter/Adfar";
import Users from "./components/ReactRouter/Users";
import UserDetails from "./components/ReactRouter/UserDetails";
import Errorpage from "./components/ReactRouter/Errorpage";
import Search from "./components/ReactRouter/Search";
import List from "./components/ReactRouter/List";
import Blog from "./components/ReactRouter/Blog";
import Mainhome from "./components/ReactRouter/Mainhome";
import News from "./components/Project2/News"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainhome/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About />} />
          <Route path="news" element={<News/>}/>
          <Route path="/contact" element={<Contact />}>
            <Route path="search" element={<Search />} />
            <Route path="list" element={<List />} />
            <Route path="blog" element={<Blog />} />
          </Route>
          <Route path="users" element={<Users />} />
          <Route path="users/:userid" element={<UserDetails />} />
          <Route path="adfar" element={<Adfar />} />
          <Route path="*" element={<Errorpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
