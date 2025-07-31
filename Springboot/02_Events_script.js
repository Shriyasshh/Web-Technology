// An event source when a webpage automatically 
// gets the update from a server.
var source=new EventSource('test.php');

source.onmessage=function(event){
    document.getElementById('result')
}.innerHTML=event.data;