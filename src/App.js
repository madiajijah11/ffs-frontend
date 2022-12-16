import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginRecruiter from "./pages/LoginRecruiter";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login-recruiter" element={<LoginRecruiter />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
