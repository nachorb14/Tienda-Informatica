import {useState} from 'react';
import './ItemCount.css'

function ItemCount({ stock, initial }) {
    const [ count, setCount ] = useState(initial);

    const Agregar = () => {
        setCount(count + 1)
    }

    const Restar = () => {
        setCount(count - 1)
    }

    if(count > stock) {
        console.log('Sin stock')
    } else if(count < initial) {
        console.log('Sin stock')
    }
    
    return (
        <div className='container'>
            <h2 className='titulo-prod'>Total Productos = {count}</h2>
            <div className='ctn-botones'>
                <button onClick={Restar} className='btn-resta'>-</button>
                <button onClick={Agregar} className='btn-suma'>+</button>
            </div>
        </div>
    )
}

export default ItemCount