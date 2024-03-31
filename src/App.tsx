import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home";

// import './App.css'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            {/* <Route path="about" element={<About />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
