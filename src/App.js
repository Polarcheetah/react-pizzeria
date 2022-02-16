import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import TableDetails from './components/pages/TableDetails/TableDetails';
import NotFound from './components/pages/NotFound/NotFound';
import { Container } from 'react-bootstrap';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import { useDispatch } from 'react-redux';
import { fetchTables } from './redux/tablesRedux';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/table:id' element={<TableDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;
