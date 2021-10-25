import logo from "./logo.svg";
import "./App.css";
import Cars, { CarsFunctional } from "./components/Cars.js";

const carsList = [
  { model: "Fox", year: 1554 },
  { model: "GTI", year: 2006 },
  { model: "Alto", year: 2010 },
];

function App() {
  return (
    <div>
      <h1>Class component</h1>
      <Cars list={carsList} />
      <hr />
      <h1>Functional component</h1>
      <CarsFunctional list={carsList} />
    </div>
  );
}

export default App;
