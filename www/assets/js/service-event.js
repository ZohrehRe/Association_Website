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

    //get name

fetch('https://hypergroup.herokuapp.com/v1/services/'+id)
.then(function(response){
    return response.json();
}).then(function(json){
        let {id,created_at,updated_at,name,description,photo,enabled} = json;
        window.alert(name);
  })

    //change title
    var ti= document.getElementById("title");
    ti.innerHTML="Events Related To " + name;
    var te= document.getElementById("text");
    te.innerHTML="Here you can find all events that are related to " + name;

    //change breadcrumps
    var bc= document.getElementById("bc");

    var li0 = document.createElement("li");
    li0.className = "breadcrumb-item";
    li0.setAttribute('aria-current',"page");
    li0.innerHTML='<a href="services.html">Services</a>';
    bc.appendChild(li0);

    var li = document.createElement("li");
    li.className = "breadcrumb-item";
    li.setAttribute('aria-current',"page");
    li.innerHTML='<a href="service.html?id='+id+'">'+name+'</a>';
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