let intervalId = setInterval(function(){
    date = new Date()
    document.getElementById("time").innerHTML = date.toLocaleString('ru-RU','Asia/Krasnoyarsk')
},1000)