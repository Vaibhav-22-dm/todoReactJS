import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar';
import Create from './Create';
import List from './List';
import Edit from './Edit';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>ToDo List</h1>
        <Navbar username="Vaibhav"/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <List />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/edit/:id">
              <Edit />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
