import React from 'react'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './categories.css'

export default function Categories() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/categoryNames')
        .then((res) => {
            return res.json();
        })
        .then((res) =>{
            setData(res)
        })
    }, [])

  return (
    <div className='categoryDiv'>
            {data.map((el)=> {
                return (
                    <ul key ={el.id} className='categoryNav'>
                        <Link to = {`/categoryById/${el.id}`}><li>{el.name}</li></Link>
                    </ul>
                )
            })}
        
    </div>
  )
}
