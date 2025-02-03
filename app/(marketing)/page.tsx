import CryptoPrices from '@/components/CryptoPrices'
import CurrencyTable from '@/components/CurrencyTable'
import React from 'react'

const HomePage = () => {
  return (
    <div className=''>
        <CryptoPrices />
        <img className=' h-48 w-full rounded-xl' src="./img/banner.gif" alt="" />
        <CurrencyTable />
    </div>
  )
}

export default HomePage