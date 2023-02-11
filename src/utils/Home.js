import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCoin } from '../redux/coin/coin';

const Home = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.coins.loading);
  const allCoins = useSelector((state) => state.coins.data.coins);

  return (
    <div data-testid="home-1" className="">
      <div className="w-[100%] flex justify-center items-center">
        <form className="text-white flex items-center justify-center w-[90%] md:w-[60%] m-2">
          <input onKeyUp={(e) => { setQuery(e.target.value.toLowerCase()); }} className="bg-[#fc5193] px-4 py-2 outline-none w-[80%]  focus:border-violet-600/50 focus:shadow-sm shadow-violet-400" type="text" placeholder="Search Coin name" required />
          <input onClick={(e) => { e.preventDefault(); setQuery(query); }} className="py-2 px-4 bg-[#fc5193] border hover:bg-violet-400/75 sm:w-[20%] cursor-pointer" type="button" value="Search" />
        </form>
      </div>
      <div>
        <div className="grid grid-cols-2 [&>*:nth-child(4n+2)]:bg-[#d1447a] [&>*:nth-child(4n-1)]:bg-[#d1447a]">
          {allCoins?.filter((coin) => (coin.name.toLowerCase().includes(query)))
            .map((coinf) => (
              <Link to={"/coin/"+coinf.id} onClick={() => { dispatch(addCoin(coinf)); }} key={coinf.id}>
                <div className=" flex flex-col text-right justify-center py-2 px-4 m-2">
                <i className="fa-solid fa-circle-arrow-right ml-auto" />
                  <img className="w-20 h-20 ml-auto mr-auto" src={coinf.icon} alt={coinf.id} />
                  <h2 className="md:text-xl text-lg font-semibold">{coinf.name}</h2>
                  <span className={coinf.priceChange1d < 0 ? 'text-white text-sm ml-auto' : 'text-white text-sm ml-auto'}>
                    {coinf.priceChange1d}
                    {' '}
                    <i className={coinf.priceChange1d < 0 ? 'fa-solid fa-arrow-trend-down' : 'fa-solid fa-arrow-trend-up'} />
                  </span>
                </div>
              </Link>
            ))}
        </div>
        {' '}
        {!allCoins && isLoading === false ? (
          <div className="text-center text-2xl flex items-center justify-center h-[40vh] ">
            <span>
              {' '}
              We have a problem...
            </span>
          </div>
        ) : ''}
      </div>

    </div>
  );
};

export default Home;