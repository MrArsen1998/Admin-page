import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import './categories.css'
import Categories from './Categories';

export default function ShowCategory() {

    const [data, setData] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        fetch('http://localhost:3001/category/' + id)
        .then((res) => {
            return res.json();
        })
        .then((res) =>{
            setData(res)
        })
    }, [id])
    
    console.log(data);

    return (
        <>
        <Categories/>
        <div className='allItems'>
            {data.map((el) => {
                return (
                    <div key={el.id} className='items'>
                        <div className='item'>
                        <img src="https://www.muuto.com/globalassets/digizuite/2111-en-nerd-chair-sand-yellow-muuto-5000x5000-hi-res.tif?mediaformatid=50101&extension=.png&revision=6" alt='No data' className='image'/>
                        <div className='textBox'>
                        <h4>{el.name}</h4>
                        <p className='price'>{el.price}</p>
                        </div>
                        </div>
                    </div>
                )
            })}
        </div>
        </>
    )
}
