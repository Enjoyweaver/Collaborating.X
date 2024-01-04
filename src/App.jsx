import "./App.css";
import Home from "./pages/Home";
import {
  createHashRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Collaborating from "./pages/Collaborating";
import DAppStack from "./pages/dAppStack";

function App() {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/collaborating" element={<Collaborating />} />
        <Route path="/dappstack" element={<DAppStack />} />
      </Route>
    )
  );

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
