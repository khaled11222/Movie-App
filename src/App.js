import { BrowserRouter, Route, Switch as Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Movies from "./Pages/Movies/Movies";
import { Container } from "@material-ui/core";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route path="/" component={Movies} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
