import "./App.css";
import { Router } from "./router/routes"
import { Header, Footer } from "./components/index"

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
