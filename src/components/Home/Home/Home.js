import React, { useEffect, useState } from 'react';
import { seats } from '../../../Seats';
import Cart from '../Cart/Cart';
const Home = () => {
    const [seatsBusiness, setSeatsBusiness] = useState([])
    const [seatsEconomy, setSeatsEconomy] = useState([])
  const [successLoading, setSuccessLoading] = useState(true)



    

    
useEffect(()=> {
    fetch(`https://guarded-bastion-73324.herokuapp.com/seats/Business`).then(res => res.json()).then(data => setSeatsBusiness(data))

    fetch(`https://guarded-bastion-73324.herokuapp.com/seats/Economy`).then(res => res.json()).then(data => {
        setSeatsEconomy(data)
        setSuccessLoading(false)
    } )
    // fetch("https://guarded-bastion-73324.herokuapp.com/addSeats",{
    //     method:"POST",
    //     headers:{"Content-Type":"application/json"},
    //     body:JSON.stringify(seats)
    // }).then(res => res.json()).then(data => console.log(data))

    


  
},[])


    


    return (
        <div className="container">
        
        
<div className="mt-3" >
<h1>Business class</h1>
{successLoading && <div class="spinner-border mt-3 text-success text-center" role="status">
  <span class="visually-hidden">Loading...</span>
</div>}
<div className="d-flex justify-content-between flex-wrap">
        {seatsBusiness.map(seat => <Cart seat={seat}></Cart>)}
        </div>
</div>
        

<div className="mt-5">
<h1>Economy Class</h1>
{successLoading && <div class="spinner-border mt-3 text-success text-center" role="status">
  <span class="visually-hidden">Loading...</span>
</div>}
    <div className="d-flex justify-content-between flex-wrap">

{seatsEconomy.map(seat => <Cart seat={seat}></Cart>)}
</div>
</div>


          
            

        </div>
    );
}

export default Home;
