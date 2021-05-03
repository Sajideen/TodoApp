import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogIn from "./Components/Pages/SignIn";
import Header from "./Components/Pages/Header";
import List from "./Components/Pages/List";
import AddTodoTask from "./Components/addTodoTask";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={LogIn} />
          <Route path="/list" component={List} />
          <Route path="/addTodoTask" component={AddTodoTask} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
