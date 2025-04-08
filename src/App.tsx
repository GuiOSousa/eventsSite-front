import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import Events from "./pages/Events";
import Profile from "./pages/Profile";


function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/about" element={<About />} />
				<Route path="/events" element={<Events />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
		</>
	);
}

export default App;
