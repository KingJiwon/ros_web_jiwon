import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Controls from "./routes/Controls";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Controls />} />
      </Routes>
    </Router>
  );
}

export default App;
