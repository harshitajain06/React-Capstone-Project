import React, { useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './utils/Home'
import Details from './utils/Detail';
import Navbar from './utils/Nav';
import { fetchData} from './redux/coin/coin';


function App() {
  const dispatch = useDispatch();
  const selectedCoin = useSelector((state) => state.coins.selectedCoin.id);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={"/coin/"+selectedCoin} element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
