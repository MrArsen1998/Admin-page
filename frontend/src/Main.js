import { useState, useEffect } from "react";
import Categories from "./categories/Categories";
export default function Main() {
    
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/products')
        .then((res) => {
            return res.json();
        })
        .then((res) =>{
            setData(res)
        })
    }, [])
 
    return (
        <>
        <Categories/>
            <div className='main'>
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