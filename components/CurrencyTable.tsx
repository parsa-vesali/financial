'use client'
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CurrencyTable = () => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(
          "https://api.exchangerate-api.com/v4/latest/USD"
        );
        const data = await response.json();
        setRates({
          EUR: data.rates.EUR,
          GBP: data.rates.GBP,
          JPY: data.rates.JPY,
          CNY: data.rates.CNY,
          AUD: data.rates.AUD,
          CAD: data.rates.CAD,
          CHF: data.rates.CHF,
        });
        setLoading(false);
      } catch (error) {
        console.error("خطا در دریافت اطلاعات ارز:", error);
      }
    };

    fetchRates();
  }, []);

  const totalAmount = Object.values(rates).reduce((acc, rate) => acc + rate, 0);

  return (
    <Table className='w-full bg-card rounded-xl my-20 overflow-hidden'>
      <TableCaption>نرخ ارزها بر اساس دلار آمریکا.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>واحد پول</TableHead>
          <TableHead className="text-right">نرخ تبدیل (دلار آمریکا)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {loading ? (
          <TableRow>
            <TableCell colSpan={2} className="text-center">
              در حال بارگذاری...
            </TableCell>
          </TableRow>
        ) : (
          Object.entries(rates).map(([currency, rate]) => (
            <TableRow key={currency}>
              <TableCell className="font-medium">{currency}</TableCell>
              <TableCell className="text-right">{rate.toFixed(2)}</TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
      {!loading && (
        <TableFooter>
          <TableRow>
            <TableCell colSpan={1}>مجموع</TableCell>
            <TableCell className="text-right">{totalAmount.toFixed(2)}</TableCell>
          </TableRow>
        </TableFooter>
      )}
    </Table>
  );
};

export default CurrencyTable;