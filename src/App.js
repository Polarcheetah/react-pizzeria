import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import TableDetails from './components/TableDetails/TableDetails';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/table1' element={<TableDetails />} />
      </Routes>
    </div>
  );
};

export default App;
