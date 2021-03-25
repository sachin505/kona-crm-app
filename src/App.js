import './App.css';
import {HashRouter, Route} from 'react-router-dom'
import Login from './auth/Login';
import Home from './Home';
import Register from './auth/Register';


function App() {
  return (
    
    <div className="App">
    <HashRouter>
    <Route path="/" exact component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    </HashRouter>
    </div>

    
    
  );
}

export default App;
