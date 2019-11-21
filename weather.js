function weather(){
    var from =document.getElementById("forcast").value;
    var xtp = new XMLHttpRequest();
    var url ="https://api.openweathermap.org/data/2.5/weather?q="+from+"&APPID=7688ed8a7fafab5786578af8a53ea38e";
    xtp.open("GET",url,true);
    xtp.send();
    xtp.onreadystatechange=function(){
        if(this.readyState===4 && this.status===200){
            var result = this.responseText;
            var jsonresult =JSON.parse(result);
            console.log(jsonresult);
            let output="";
                output +=`<p><b>Current weather is ${jsonresult.main.temp-273}'C</b></p>
                <p><b>Description ${jsonresult.weather[0].description}</b></p>
                <p><b>Wind Speed ${jsonresult.wind.speed}"Km/h</b></p>`;
                
            if(output!==""){
                $("#fetched").html(output);
            }
        }
    }
}