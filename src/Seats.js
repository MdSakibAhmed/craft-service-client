 export const seats = [{
    class:"Business",
    From:"Comillah",
    To:"Dhaka",
    price:150,
    status:"available"

},{
    class:"Business",
    From:"Dhaka",
    To:"Zeddah",
    price:1100,
    status:"available"

},{
    class:"Business",
    From:"Makkah",
    To:"Madinah",
    price:250,
    status:"available"

},{
    class:"Business",
    From:"UK",
    To:"Bangladesh",
    price:900,
    status:"available",

},{
    class:"Economy",
    From:"Comillah",
    To:"Dhaka",
    price:150,
    status:"available"

},{
    class:"Economy",
    From:"Dhaka",
    To:"Zeddah",
    price:350,
    status:"available"

},{
    class:"Economy",
    From:"Madina",
    To:"Makkah",
    price:200,
    status:"available"

},{
    class:"Economy",
    From:"Dhaka",
    To:"Rajshahi",
    price:80,
    status:"available"

}]
  fetch("https://guarded-bastion-73324.herokuapp.com/addSeats",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(seats)
    }).then(res => res.json()).then(data => console.log(data))