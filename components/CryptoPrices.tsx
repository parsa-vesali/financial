'use client';

import React, { useEffect, useState } from 'react';
import { HiArrowTrendingUp } from 'react-icons/hi2';
import axios from 'axios';

const CryptoPrices = () => {
  const [prices, setPrices] = useState({
    bitcoin: null,
    ethereum: null,
    litecoin: null,
    ripple: null
  });
  const [percentages, setPercentages] = useState({
    bitcoin: null,
    ethereum: null,
    litecoin: null,
    ripple: null
  });
  const [chartData, setChartData] = useState({
    bitcoin: './icons/1.png',
    ethereum: './icons/1.png',
    litecoin: './icons/1.png',
    ripple: './icons/1.png',
  });

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litecoin,ripple&vs_currencies=usd&include_24hr_change=true');
        const data = response.data;

        setPrices({
          bitcoin: data.bitcoin.usd,
          ethereum: data.ethereum.usd,
          litecoin: data.litecoin.usd,
          ripple: data.ripple.usd
        });

        setPercentages({
          bitcoin: data.bitcoin.usd_24h_change.toFixed(2),
          ethereum: data.ethereum.usd_24h_change.toFixed(2),
          litecoin: data.litecoin.usd_24h_change.toFixed(2),
          ripple: data.ripple.usd_24h_change.toFixed(2),
        });

        setChartData({
          bitcoin: './icons/1.png',
          ethereum: './icons/1.png',
          litecoin: './icons/1.png',
          ripple: './icons/1.png'
        });
      } catch (error) {
        console.error('Error fetching the prices:', error);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 30000);

    return () => clearInterval(interval);
  }, []);

  const renderCard = (coin, label, icon) => {
    return (
      <div className="w-full bg-card text-card-foreground space-y-6 shadow-sm rounded-xl p-4">
        <div className="flex items-center justify-between">
          <HiArrowTrendingUp className='text-green-500 text-2xl' />
          <div className="flex items-center gap-x-2">
            <p className='text-lg mt-1'>{label}</p>
            <span className='w-10 h-10 flex items-center justify-center bg-gray-800 rounded-xl'>
              <img className='w-8 h-8 object-cover' src={icon} alt={label} />
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <img className='w-28' src={chartData[coin]} alt={`${label} Chart`} />
          <div className="flex flex-col items-end gap-y-2">
            <p className='text-xl font-Dana-Medium'>
              {prices[coin] ? `$${prices[coin]?.toLocaleString()}` : 'Loading...'}
            </p>
            <p className={`text-lg ${percentages[coin] && percentages[coin] > 0 ? 'text-green-500' : 'text-red-500'}`}>
              {percentages[coin] !== null ? `${percentages[coin]}%` : 'Loading...'}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='my-20 w-full grid grid-cols-1 md:grid-cols-4 gap-6'>
      {renderCard('bitcoin', 'Bitcoin', './icons/btc.svg')}
      {renderCard('ethereum', 'Ethereum', './icons/eth.svg')}
      {renderCard('litecoin', 'Litecoin', './icons/ltc.png')}
      {renderCard('ripple', 'Ripple', './icons/solana.png')}
    </div>
  );
};

export default CryptoPrices;
