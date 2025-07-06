'use client'
import React, { useEffect, useState } from 'react';


interface Pokemon {
    id: number;
    name: string;
    sprites: {
        front_default: string;
    };
}

const POKE_API = 'https://pokeapi.co/api/v2/pokemon';


const Pokemon = () => {

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    const FetchPokemons = async () => {
        const allPokemons: Pokemon[] = [];

        for (let i = 1; i < 100; i++) {
            try {
                const response = await fetch(`${POKE_API}/${i}`)
                if (!response.ok) throw new Error('Failed to fetch Pokémon');
                const data = await response.json();
                allPokemons.push({
                    id: data.id,
                    name: data.name,
                    sprites: data.sprites,
                });
            } catch (err) {
                console.log(err || 'Something went wrong');
            }
        }

        setPokemons(allPokemons);
    }

    useEffect(() => {
        FetchPokemons();
    }, []);
    
  return (
    <div className='py-16 bg-gray-900'>
        
        <div className="w-[80%] mx-auto">
            <h1 className="text-xl sm:text-3xl text-white font-bold">POKEMONS</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-8 w-[80%] mx-auto mt-20">

            {pokemons.map((pokemon) => (
                <div key={pokemon.id} className='group cursor-pointer text-white hover:text-black hover:bg-white sm:hover:shadow-white sm:shadow-md rounded-lg sm:border sm:border-red-100 sm:m-2 transition-shadow duration-200 pb-4'>
                    {/* Image */}
                    <div className="h-[250]">
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-full h-full object-cover rounded-lg"/>
                    </div>
                    {/* Text Content */}
                    <h1 className="text-center text-lg font-bold mt-6 cursor-pointer">{pokemon.name}</h1>
                </div>
            
            ))}
        </div>

    </div>
  )
}

export default Pokemon;