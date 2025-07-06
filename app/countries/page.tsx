'use client';

import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

type Country = {
    flags: { png: string };
    name: { official: string };
    region: string;
    capital?: string;
};

const CountriesList = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [segment , setSegment] = useState("all?fields=name,capital,region,flags");
    const searchInput = useRef<HTMLInputElement>(null);
    const region = useRef<HTMLInputElement>(null);



    const searchCountries = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const search = searchInput.current?.value.trim();

    if (!search) {
      alert("Please write something!");
      return;
    }

    // Set segment to search query including correct fields
    setSegment(`name/${search}?fields=name,capital,region,flags`);
  };

   

    useEffect(() => {
        const getCountries = async () => {
            try {
                const result = await axios.get(`https://restcountries.com/v3.1/${segment}`);
                if(result.status === 200){
                    setCountries(result.data)
                }
            } catch (error) {
                console.error(error)
            }
        };
        getCountries();
    },[segment]);

     const reset = () =>{
        if (searchInput.current) {
            searchInput.current.value = "";
        }
        if (region.current) {
            region.current.value = "";
        }
        setSegment("all");
    };

  return (
    <div className='py-16 bg-gray-900'>
        
        <div className="w-[80%] mx-auto">
        <h1 className="text-xl sm:text-3xl text-white font-bold mb-6">Countries</h1>

        <form onSubmit={searchCountries} className="flex gap-2 mb-10">
          <input
            ref={searchInput}
            className="bg-white p-2 rounded"
            type="search"
            placeholder="Search country"
          />
          <button type="submit" className='bg-white px-4 rounded cursor-pointer'>Search</button>
            {segment !== "all?fields=name,capital,region,flags" ? (
                <button
                    onClick={reset}
                    type="button"
                    className="mt-4 px-4 py-2 text-sm font-semibold text-white rounded transition duration-200 cursor-pointer underline"
                >
                    Reset
                </button>
            ): ""}
        </form>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-8 w-[80%] mx-auto mt-20 text-center">

            {countries.map((country, index) => (
                <div key={index} className='group cursor-pointer text-white hover:text-black hover:bg-white sm:hover:shadow-white sm:shadow-md rounded-lg sm:border sm:border-red-100 sm:m-2 transition-shadow duration-200 pb-4'>
                    {/* Image */}
                    <div className="h-[150]">
                        <img src={country.flags.png} alt="" className="w-full h-full object-cover rounded-lg"/>
                    </div>
                    {/* Text Content */}
                    <h1 className="text-lg font-bold mt-6 cursor-pointer">{country.name.official}</h1>
                    <p className="card-text">Region : {country.region}</p>
                    <p className="card-text">Capital : {country.capital}</p>
                </div>
            
            ))}
        </div>

    </div>
  )
}

export default CountriesList;