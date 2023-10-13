import axios from 'axios';
import {useParams } from 'react-router-dom';
import {useState,useEffect} from 'react';

const Detail =()=> {
        const {id}= useParams ();
    const [ characters, setCharacter] = useState ({});

    useEffect (() => {
        axios ('http://localhost:3001/rickandmorty/character/${id}')
    .then (response => response.data)
    .then((data) => {
        if (data.name) {
            setCharacter(data);
        } else {
            window.alert ('No hay personajes con este ID ')
        }
    });
    return setCharacter ({});
}, [id])
    return(
        <div>
            <h2> name: {character?.name} </h2>
            <p> {character?.status}</p>
            <p>{character?.species}</p>
            <p>{character?.gender}</p>
            <p>character?.origin?.name</p>
            <img src ={character?.image} alt={character?.name}/>

        </div>
        
    )
 }
export default Detail;