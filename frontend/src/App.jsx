import { BrowserRouter,  Route, Routes } from "react-router-dom";
import TestComponent from "./components/test";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<TestComponent />} path="/"/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
