import './App.css';
import {HashRouter, Route} from 'react-router-dom'
import Login from './auth/Login';
import Home from './Home';

function App() {
  return (
    
    <div className="App">



    <HashRouter>
    <Route path="/" exact component={Home} />
    <Route path="/login" component={Login} />
    </HashRouter>
    </div>

    
    
  );
}

export default App;
