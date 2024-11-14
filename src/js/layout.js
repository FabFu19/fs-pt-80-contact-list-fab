import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext.js";
import { Contacts } from "./views/contactHome.jsx";
import { Contact } from "./views/contact.jsx";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
					
					<Routes>
						<Route path="/" element={<Contacts />}/>
						<Route path="/contact/:id" element={<Contact />}/>
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
