let str2= document.location.search.replace(/^.*?\=/,'');
var id;
var end = str2.lastIndexOf("/");
if (end >= 0) { id = str2.substring(0, end); }
var eventsList= document.getElementById("event-list");
fetch('https://hypergroup.herokuapp.com/v1/services/'+id+'/related_events')
.then(function(response){
    var a=response.json();
    return a;
}).then(function(json){
    //change title
    var ti= document.getElementById("title");
    ti.innerHTML="Events Related To Service " + id;
    var te= document.getElementById("text");
    te.innerHTML="Here you can find All events that are related to service " + id;

    //change breadcrumps
    var bc= document.getElementById("bc");
    var li = document.createElement("li");
    li.className = "breadcrumb-item";
    li.setAttribute('aria-current',"page");
    var n="service " + id;
    li.innerHTML='<a href="service.html?id='+id+'">'+n+'</a>';
    bc.appendChild(li);

    var li2 = document.createElement("li");
        li2.className = "breadcrumb-item active";
        li2.setAttribute('aria-current',"page");
        li2.innerHTML="events";
        bc.appendChild(li2);

    for(var i=0; i<json.length; i++){
        var listItem = document.createElement("li");
        listItem.className = "list-group list-group-flush";
        let {id,created_at,updated_at,name,description,photo,enabled,startdate,enddate,startmonth} = json[i];
        listItem.innerHTML='<div class="card mb-3" ><div class="row no-gutters"><div class="col-md-2"><img src="..." class="card-img" alt="..."></div><div class="col-md-10"><div id="'+id+'" class="card-body"><a href="event.html?id='+id+'"><h5 class="card-title">'+name+'</h5></a><p class="card-text">'+description+'</p></div></div></div></div>';
        eventsList.appendChild(listItem);
  }
  })