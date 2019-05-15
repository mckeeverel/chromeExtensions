var url = window.location.href;
/*
var index = url.indexOf("rsswn")
if(index == -1){
    var splitURL = url.split("hp_lead_", 1); 
    var newURL = splitURL[0] += "rsswn"; 
    console.log(newURL); 
    window.location = newURL; 
}
*/
var index = url.indexOf("hp_lead_")
if(index != -1){
    var splitURL = url.split("hp_lead_", 1); 
    var newURL = splitURL[0] += "rsswn"; 
    console.log(newURL); 
    window.location = newURL; 
}
