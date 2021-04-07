import './App.css';
import {HashRouter, Route} from 'react-router-dom'
import Login from './auth/Login';
import Home from './components/Home';
import Register from './auth/Register';
import DashBoard from './components/DashBoard';
import UpdatePassword from './components/UpdatePassword';


function App() {
  return (
    
    <div className="App">
    <HashRouter>
    <Route path="/" exact component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/dashboard" component={DashBoard} />
    <Route path="/updatePassword" component={UpdatePassword}/>
    </HashRouter>
    </div>

    
    
  );
}

export default App;
