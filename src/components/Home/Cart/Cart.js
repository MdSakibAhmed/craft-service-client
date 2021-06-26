import React from 'react';
import { useHistory } from 'react-router-dom';

const Cart = ({seat}) => {
    const history = useHistory()
    const {From, To, price,_id,class:category,status} = seat;

    

    return (
        <div className="p-3" style={{border:` 3px solid  ${status === 'booked' ? 'red':'green'}`}} >
        <p>FROM: {From}</p>
        <p>To: {To}</p>
        <p>Price: ${price}</p>
        
        <button className={`${status === "booked"? 'bg-danger':'bg-success'}  text-white`} onClick={() =>  status === "booked" ? alert('already booked. try another one'): history.push(`/buyTicket/${_id}`)}>Book now</button>

  
            
        </div>
    );
};

export default Cart;