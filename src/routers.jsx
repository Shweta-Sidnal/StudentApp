import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./Components/header";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import Details from "./Pages/details";
import Home from "./Pages/home";
import Profile from "./Pages/profile"
import Signin from "./Pages/signin";
import Signup from "./Pages/signup";
const NotFound = () => <div>Not found</div>;

const AppRouters = ({children}) => {
	return (
		<BrowserRouter>
			<ResponsiveAppBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/About" element={<About />} />
				<Route path="/Contact" element={<Contact />} />
				<Route path="/profile" element={<Profile />} />
				{/* <Route path="/Signin" element={<Signin />} /> */}
				<Route path="/Signup" element={<Signup/>} />
				<Route path="/Details" element={<Details/>}/>
				<Route path="*" element= {<NotFound/>} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouters;	