import React from 'react';
import { useSelector } from 'react-redux';
import DataCard from './DataCard';

const Details = () => {
    
  const details = useSelector((state) => state.coins.selectedCoin);

  return (
    <div data-testid="Details-1" className="flex flex-col gap-2 justify-start items-between mt-10 [&>*:nth-child(2n+3)]:bg-violet-900/20 border border-black/10">
      <img className="h-20 w-max ml-auto mr-auto" src={details.icon} alt={details.name} />
      <DataCard name={"Name"} data ={details.name}/>
      <DataCard name={"Rank"} data ={details.rank}/>
      <DataCard name={"Total Supply"} data ={details.totalSupply}/>
      <DataCard name={"Available Supply"} data ={details.availableSupply}/>
      <DataCard name={"Price"} data ={details.price}/>
      <DataCard name={"Price change Weekly"} data ={details.priceChange1w}/>
      <DataCard name={"Price change Daily"} data ={details.priceChange1d}/>
      <DataCard name={"Price change Hourly"} data ={details.priceChange1h}/>
    
      </div>
  
  );
};

export default Details;