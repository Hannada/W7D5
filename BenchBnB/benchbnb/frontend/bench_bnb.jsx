import React from "react";
import ReactDOM from "react-dom";
import { signup, login, logout } from './util/session_api_util'; 
import Root from "./components/root"

document.addEventListener("DOMContentLoaded", () => {
  window.Signup = signup
  window.Signin = login 
  window.Logout = logout 
  const root = document.getElementById("root"); 
  ReactDOM.render(<Root/>, root); 
});