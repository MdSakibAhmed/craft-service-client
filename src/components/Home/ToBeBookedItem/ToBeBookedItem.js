import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProcessPayment from '../../OrderProcess/ProcessPayment/ProcessPayment';

const ToBeBookedItem = () => {
    const [seat, setSeat]= useState({})
    const [ticketAmount,setTicketAmount] = useState(1)
    const {From, To, price,_id, class:category} = seat;
    const {id} = useParams()
    const handleStatus = (id) => {
        fetch(`http://localhost:5000/updateStatus/${id}`,{
                method:"PATCH",
                headers:{"Content-type":"application/json"},
                body:JSON.stringify({status:"booked"})
            }).then(res => res.json()).then(result => {
                console.log(result)
    
            })
    
    }
    
    const handleBook = () => {
        const bookedItem = {
            class:category,
            price:price,
            From:From,
            To: To,
            ticketAmount:ticketAmount

        }


        fetch(`http://localhost:5000/bookSeat/${_id}`,{
            method:"POST",
           headers:{"Content-Type":"application/json"},
        body:JSON.stringify(bookedItem)
        }).then(res => res.json()).then(result => {
            if(result.status === "already booked"){
                console.log("already booked");    

            }
            if(result && result.status !== "already booked"){
                handleStatus(_id)
               console.log("booked");

            }
        })


    }

    useEffect(()=> {
        fetch(`http://localhost:5000/getBookSeat/${id}`).then(res => res.json()).then(data => {
            setSeat(data[0])
        })

    },[])
   
    return (
        <div className="container pt-5">
        <p>FROM: {From}</p>
        <p>To: {To}</p>
        <p>Price: {price}</p>
        <p>Select ticket Amount</p>
        <input onChange={(e) =>  setTicketAmount(e.target.value)} type="number" value={ticketAmount} name="" id="" />
        {ticketAmount > 5 ? <p>Cant be purchase more than 5 tickets</p>:<div>
            <h6 className="mb-3">Pay with credit card</h6>
              <ProcessPayment
                handleBook={handleBook}
              ></ProcessPayment>
        </div>}
        
        


        </div>
    );
};

export default ToBeBookedItem;