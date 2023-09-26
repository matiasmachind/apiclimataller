
document.getElementById("boton").addEventListener("click", ()=> {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=montevideo&appid=51fcabfb670abe8d12e626e4e2b12ea0';
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('La solicitud no pudo ser completada.');
            }
            return response.json();
        })
        .then(data => {
            // Aquí puedes trabajar con los datos obtenidos de la respuesta
            console.log(data.main.temp);
            let temperatura = data.main.temp - 273.15
            document.getElementById("temp").innerHTML = '<br> La temperatura actual Montevideo: ' + temperatura.toPrecision(2) + '°C'
        })
        .catch(error => {
            console.error('Error:', error);
        });
       
    })


