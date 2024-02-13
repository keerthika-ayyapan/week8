import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Form from './form/Form';
function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
  <Route path='/' element={<Form />}>
    
  </Route>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
