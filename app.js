const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (req, res){
    res.sendFile(__dirname + "/index.html")
    
})

// const url = "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=7dd3e31883dd6e7aa07d5dec3697fc15"

// https.get(url, function(response){
//     console.log(res.statusCode);
    
//     response.on("data", function(data){
//         const weatherData = JSON.parse(data)
//         const weatherDesc = weatherData.weather[0].description
//         const temp = weatherData.main.temp
//         const icon = weatherData.weather[0].icon
        
//         res.write("<p>the weather is currently "+ weatherDesc + "</p>");
//         res.write("<h1>The temperature in London is " + temp + " degrees Celcius.</h1>");
        
//         res.send();
//     })
// })
// res.send("Server is up and running")

app.listen(3000, function() {
    console.log ("Server is running on port 3000")
})