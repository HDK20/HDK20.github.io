const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

setInterval(function(){
    const date = new Date();

    document.getElementById("Year").innerHTML = date.getFullYear();
    document.getElementById("Month").innerHTML = monthNames[date.getMonth()];
    document.getElementById("Day").innerHTML = date.getDate();

},10000)
