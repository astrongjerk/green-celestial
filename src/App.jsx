import React from "react";
import "./common.css"
import Landing from "../Pages/Landing";
import { BrowserRouter ,Route ,Routes } from "react-router-dom";
import Admin from "../Pages/Admin";
import Dashboard from "../Pages/Dashboard"
import MemoBlogMngmnt from "./components/admin/admin_auth/admin_components/BlogMngmnt";
import Traffic from "./components/admin/admin_auth/admin_components/Traffic";
import AboutPage from "../Pages/AboutPage";
import Addblog from "./components/admin/admin_auth/admin_components/blog_components/Addblog";
import CreateBlog from "./components/admin/admin_auth/admin_components/blog_components/CreateBlog";
import Createcategory from "./components/admin/admin_auth/admin_components/blog_components/Createcategory";


const App = () => {

  const Error = () => {
    return(
      <div className="error"><h1>ERROR : PAGE NOT FOUND</h1></div>
    )
  }

  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Landing/>}></Route>
          <Route path="/admin" element = {<Admin/>}></Route>
          <Route path="/about" element = {<AboutPage/>}></Route>
          <Route path="/*" element = {<Error/>}></Route>

          <Route path="/dashboard" element = {<Dashboard/>}>
            <Route index element={<MemoBlogMngmnt/>}></Route>
            <Route path="/dashboard/blog/create" element={<Addblog/>}></Route>
            <Route path="/dashboard/blog/createBlog" element={<CreateBlog/>}></Route>
            <Route path="/dashboard/blog/createCategory" element={<Createcategory/>}></Route>
            <Route path="/dashboard/traffic" element={<Traffic/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App;