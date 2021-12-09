function startTime() {
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let second = today.getSeconds();

    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    day=today.toLocaleDateString("en-US", options);
    document.getElementById("day").innerHTML = day;
    document.getElementById("days").innerHTML = day;
    
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    document.getElementById('time').innerHTML =  strTime;
    setTimeout(startTime, 1000);

    
  }