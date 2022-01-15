const express = require("express");
const request = require("request");

const app =express();
const port = process.env.PORT ||2728;

app.get("/",(req,res)=>{
    let city = req.query.city;
	var request = require('request');
	request(
		`https://samples.openweathermap.org/data/2.5/forecast?q=${city}&appid=bff2d6f2029099e4df413b8abe3e41cd`,
		
		(error, response, body)=> {
			let data = JSON.parse(body);
			
			if (response.statusCode === 200) {
				res.send(`The weather in your city "${city}" is ${data.list[0].weather[0].description}`);
			}
		}
	);
  //  res.send("Demo")
})

app.listen(port,()=>{
    console.log("Server Started on port 2728")
})