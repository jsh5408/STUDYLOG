import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;