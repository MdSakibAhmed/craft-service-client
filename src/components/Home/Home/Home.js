import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
const Home = () => {
    const [seatsBusiness, setSeatsBusiness] = useState([])
    const [seatsEconomy, setSeatsEconomy] = useState([])
    const [countTicket, setCountTicket] = useState(2)



    

    
useEffect(()=> {
    fetch(`http://localhost:5000/seats/Business`).then(res => res.json()).then(data => setSeatsBusiness(data))

    fetch(`http://localhost:5000/seats/Economy`).then(res => res.json()).then(data => setSeatsEconomy(data))

    


  
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
