import * as React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Pair from "./routes/Pair.tsx";

const RouteList = [
	{
		path: "/",
		exact: false,
		component: Pair,
	},
];

function App() {
	return (
		<Router>
			<main>
				<div className="Header-Decoration"></div>
				<div id="content">
					<Pair />
					<Routes>
						{RouteList.map((route, index) => (
							<Route
								key={index}
								path={route.path}
								exact={route.exact}
								component={route.component}
							/>
						))}
					</Routes>
				</div>

				<div className="Footer-Decoration"></div>
			</main>
		</Router>
	);
}

export default App;
