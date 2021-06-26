import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
const Home = () => {
    const [seatsBusiness, setSeatsBusiness] = useState([])
    const [seatsEconomy, setSeatsEconomy] = useState([])
    const [countTicket, setCountTicket] = useState(2)



    

    
useEffect(()=> {
    fetch(`https://guarded-bastion-73324.herokuapp.com/seats/Business`).then(res => res.json()).then(data => setSeatsBusiness(data))

    fetch(`https://guarded-bastion-73324.herokuapp.com/seats/Economy`).then(res => res.json()).then(data => setSeatsEconomy(data))

    


  
},[])


    


    return (
        <div className="container">
<div className="">
<h1>Business class</h1>
<div className="d-flex justify-content-between">
        {seatsBusiness.map(seat => <Cart seat={seat}></Cart>)}
        </div>
</div>
        

<div>
<h1>Economy Class</h1>
    <div className="d-flex justify-content-between">

{seatsEconomy.map(seat => <Cart seat={seat}></Cart>)}
</div>
</div>


          
            

        </div>
    );
}

export default Home;
