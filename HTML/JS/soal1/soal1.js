// <--------------------------------------NOMOR 1-------------------------------------->
const jamContainer = document.getElementById("jamContainer");
date = new Date();
hour = date.getUTCHours();
minute = date.getUTCMinutes();
second = date.getUTCSeconds();

var GMT = 0 

//array of objects
const GMTtime = []
//function
function getTimeZone(GMT){
    //date
    var d = new Date();
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    var date = new Date(utc + (3600000*GMT));

    //array push
    GMTtime.push({time: date.toLocaleTimeString(), GMT : 'GMT+'+GMT})
}
function addTime(GMT){
    var newcontent = document.createElement('p');
    newcontent.innerHTML = GMTtime[GMT].time + ' * GMT+'+GMTtime[GMT].GMT
    jamContainer.appendChild(newcontent);
}

//looping
const loopPrint = ()=>{
    // if else
    if(GMT >=9){
        clearInterval(printTime);
    }else{
        getTimeZone(GMT);
        addTime(GMT)
        GMT = GMT + 1;
    }
}

//set interval
var printTime = setInterval(
    loopPrint,1000
)

if(GMT>=9){
    clearInterval(printTime);
}


