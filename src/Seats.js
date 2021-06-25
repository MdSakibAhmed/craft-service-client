 export const seats = [{
    class:"Business",
    From:"Dhaka",
    To:"Rangpur",
    price:200,
    status:"available"

},{
    class:"Business",
    From:"Dhaka",
    To:"USA",
    price:800,
    status:"available"

},{
    class:"Business",
    From:"Dhaka",
    To:"India",
    price:300,
    status:"available"

},{
    class:"Business",
    From:"Dhaka",
    To:"Pakistan",
    price:400,
    status:"available",

},{
    class:"Economy",
    From:"Dhaka",
    To:"Pakistan",
    price:250,
    status:"available"

},{
    class:"Economy",
    From:"Dhaka",
    To:"India",
    price:150,
    status:"available"

},{
    class:"Economy",
    From:"Dhaka",
    To:"Rangpur",
    price:100,
    status:"available"

},{
    class:"Economy",
    From:"Dhaka",
    To:"USA",
    price:600,
    status:"available"

}]
  // fetch("http://localhost:5000/addSeats",{
    //     method:"POST",
    //     headers:{"Content-Type":"application/json"},
    //     body:JSON.stringify(seats)
    // }).then(res => res.json()).then(data => console.log(data))