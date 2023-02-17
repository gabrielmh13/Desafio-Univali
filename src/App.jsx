import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { SideMenu } from './components/SideMenu';
import { Router } from './Router'

function App() {
  return (
    <div className='container'>
        <BrowserRouter>
          
          <SideMenu />
          <Router />
        
        </BrowserRouter>   
    </div>
  );
}

export default App;
