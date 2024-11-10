import { useState, useEffect } from 'react';
import Input from './Input.tsx';
import Button from './Button.tsx';
import DisplayInputCSS from './DisplayInput.module.css';

const DisplayInput = () => {
    const [pokemonName, setPokemonName] = useState<string>('');
    const [pokemonType, setPokemonType] = useState<string>('');
    const [pokemonImage, setPokemonImage] = useState<string>('');
    const [pokemonAbilities, setPokemonAbilities] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>('');

    useEffect(() => {
        if (inputValue) {
            fetchData();
        }
    }, [inputValue]);

    const fetchData = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue.toLowerCase()}`);
        const data = await response.json();
        console.log(data);
        setPokemonName(data.name);
        setPokemonType(data.types[0].type.name);
        setPokemonImage(data.sprites.front_default);
        const abilities = data.abilities.map((ability: any) => ability.ability.name);
        setPokemonAbilities(abilities);
    };

    return (
        <div>
            <h1 className={DisplayInputCSS.heading}>PokéPedia</h1>
            <div className={DisplayInputCSS.input__container}>
                <Input 
                    placeholder="Input the Pokemon's name" 
                    onChange={(e) => setInputValue(e.target.value)} 
                />
            </div>
            <div className={DisplayInputCSS.info__container}>
              <p className={DisplayInputCSS.info__text}><b>Name:</b> {pokemonName}</p>
              <p className={DisplayInputCSS.info__text}><b>Type:</b> {pokemonType}</p>
              <p className={DisplayInputCSS.info__text}><b>Abilities:</b> {pokemonAbilities.join(', ')}</p>
              <img className={DisplayInputCSS.pokemon__img} src={pokemonImage} alt="pokemon" />
            </div>
        </div>
    );
};

export default DisplayInput;