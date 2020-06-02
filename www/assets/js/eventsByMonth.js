var eventsList= document.getElementById("event-list");
document.getElementById("Jan").onclick=function() {
document.getElementById("event-list").innerHTML = "";
fetch('https://hypergroup.herokuapp.com/v1/events/bymonth/Jan')
.then(function(response){
    var a=response.json();
    return a;
}).then(function(json){
    for(var i=0; i<json.length; i++){
        var listItem = document.createElement("li");
        listItem.className = "list-group list-group-flush";
        let {id,created_at,updated_at,name,description,photo,enabled,startdate,enddate,startmonth,summary,practical} = json[i];
        listItem.innerHTML='<div class="card mb-3" ><div class="row no-gutters"><div class="col-md-2"><img src="..." class="card-img" alt="..."></div><div class="col-md-10"><div id="'+id+'" class="card-body"><a href="event.html?id='+id+'"><h5 class="card-title">'+name+'</h5></a><p class="card-text">'+summary+'</p></div></div></div></div>';
        eventsList.appendChild(listItem);
  }
    if(json.length == 0){
    var listItem = document.createElement("li");
            listItem.className = "list-group list-group-flush";
            listItem.innerHTML='<div class="alert alert-danger" role="alert">There is no event in this month! :(</div>'
            eventsList.appendChild(listItem);
    }
  })}
document.getElementById("Feb").onclick=function() {
document.getElementById("event-list").innerHTML = "";
fetch('https://hypergroup.herokuapp.com/v1/events/bymonth/Feb')
.then(function(response){
    var a=response.json();
    return a;
}).then(function(json){
    for(var i=0; i<json.length; i++){
        var listItem = document.createElement("li");
        listItem.className = "list-group list-group-flush";
        let {id,created_at,updated_at,name,description,photo,enabled,startdate,enddate,startmonth,summary,practical} = json[i];
        listItem.innerHTML='<div class="card mb-3" ><div class="row no-gutters"><div class="col-md-2"><img src="..." class="card-img" alt="..."></div><div class="col-md-10"><div id="'+id+'" class="card-body"><a href="event.html?id='+id+'"><h5 class="card-title">'+name+'</h5></a><p class="card-text">'+summary+'</p></div></div></div></div>';
        eventsList.appendChild(listItem);
  }
    if(json.length == 0){
    var listItem = document.createElement("li");
            listItem.className = "list-group list-group-flush";
            listItem.innerHTML='<div class="alert alert-danger" role="alert">There is no event in this month! :(</div>'
            eventsList.appendChild(listItem);
    }
  })}
document.getElementById("Mar").onclick=function() {
document.getElementById("event-list").innerHTML = "";
fetch('https://hypergroup.herokuapp.com/v1/events/bymonth/Mar')
.then(function(response){
    var a=response.json();
    return a;
}).then(function(json){
    for(var i=0; i<json.length; i++){
        var listItem = document.createElement("li");
        listItem.className = "list-group list-group-flush";
        let {id,created_at,updated_at,name,description,photo,enabled,startdate,enddate,startmonth,summary,practical} = json[i];
        listItem.innerHTML='<div class="card mb-3" ><div class="row no-gutters"><div class="col-md-2"><img src="..." class="card-img" alt="..."></div><div class="col-md-10"><div id="'+id+'" class="card-body"><a href="event.html?id='+id+'"><h5 class="card-title">'+name+'</h5></a><p class="card-text">'+summary+'</p></div></div></div></div>';
        eventsList.appendChild(listItem);
  }
    if(json.length == 0){
    var listItem = document.createElement("li");
            listItem.className = "list-group list-group-flush";
            listItem.innerHTML='<div class="alert alert-danger" role="alert">There is no event in this month! :(</div>'
            eventsList.appendChild(listItem);
    }
  })}
document.getElementById("Apr").onclick=function() {
document.getElementById("event-list").innerHTML = "";
fetch('https://hypergroup.herokuapp.com/v1/events/bymonth/Apr')
.then(function(response){
    var a=response.json();
    return a;
}).then(function(json){
    for(var i=0; i<json.length; i++){
        var listItem = document.createElement("li");
        listItem.className = "list-group list-group-flush";
        let {id,created_at,updated_at,name,description,photo,enabled,startdate,enddate,startmonth,summary,practical} = json[i];
        listItem.innerHTML='<div class="card mb-3" ><div class="row no-gutters"><div class="col-md-2"><img src="..." class="card-img" alt="..."></div><div class="col-md-10"><div id="'+id+'" class="card-body"><a href="event.html?id='+id+'"><h5 class="card-title">'+name+'</h5></a><p class="card-text">'+summary+'</p></div></div></div></div>';
        eventsList.appendChild(listItem);
  }
    if(json.length == 0){
    var listItem = document.createElement("li");
            listItem.className = "list-group list-group-flush";
            listItem.innerHTML='<div class="alert alert-danger" role="alert">There is no event in this month! :(</div>'
            eventsList.appendChild(listItem);
    }
  })}
document.getElementById("May").onclick=function() {
document.getElementById("event-list").innerHTML = "";
fetch('https://hypergroup.herokuapp.com/v1/events/bymonth/May')
.then(function(response){
    var a=response.json();
    return a;
}).then(function(json){
    for(var i=0; i<json.length; i++){
        var listItem = document.createElement("li");
        listItem.className = "list-group list-group-flush";
        let {id,created_at,updated_at,name,description,photo,enabled,startdate,enddate,startmonth,summary,practical} = json[i];
        listItem.innerHTML='<div class="card mb-3" ><div class="row no-gutters"><div class="col-md-2"><img src="..." class="card-img" alt="..."></div><div class="col-md-10"><div id="'+id+'" class="card-body"><a href="event.html?id='+id+'"><h5 class="card-title">'+name+'</h5></a><p class="card-text">'+summary+'</p></div></div></div></div>';
        eventsList.appendChild(listItem);
  }
    if(json.length == 0){
    var listItem = document.createElement("li");
            listItem.className = "list-group list-group-flush";
            listItem.innerHTML='<div class="alert alert-danger" role="alert">There is no event in this month! :(</div>'
            eventsList.appendChild(listItem);
    }
  })}
document.getElementById("Jun").onclick=function() {
document.getElementById("event-list").innerHTML = "";
fetch('https://hypergroup.herokuapp.com/v1/events/bymonth/Jun')
.then(function(response){
    var a=response.json();
    return a;
}).then(function(json){
    for(var i=0; i<json.length; i++){
        var listItem = document.createElement("li");
        listItem.className = "list-group list-group-flush";
        let {id,created_at,updated_at,name,description,photo,enabled,startdate,enddate,startmonth,summary,practical} = json[i];
        listItem.innerHTML='<div class="card mb-3" ><div class="row no-gutters"><div class="col-md-2"><img src="..." class="card-img" alt="..."></div><div class="col-md-10"><div id="'+id+'" class="card-body"><a href="event.html?id='+id+'"><h5 class="card-title">'+name+'</h5></a><p class="card-text">'+summary+'</p></div></div></div></div>';
        eventsList.appendChild(listItem);
  }
    if(json.length == 0){
    var listItem = document.createElement("li");
            listItem.className = "list-group list-group-flush";
            listItem.innerHTML='<div class="alert alert-danger" role="alert">There is no event in this month! :(</div>'
            eventsList.appendChild(listItem);
    }
  })}
document.getElementById("Jul").onclick=function() {
document.getElementById("event-list").innerHTML = "";
fetch('https://hypergroup.herokuapp.com/v1/events/bymonth/Jul')
.then(function(response){
    var a=response.json();
    return a;
}).then(function(json){
    for(var i=0; i<json.length; i++){
        var listItem = document.createElement("li");
        listItem.className = "list-group list-group-flush";
        let {id,created_at,updated_at,name,description,photo,enabled,startdate,enddate,startmonth,summary,practical} = json[i];
        listItem.innerHTML='<div class="card mb-3" ><div class="row no-gutters"><div class="col-md-2"><img src="..." class="card-img" alt="..."></div><div class="col-md-10"><div id="'+id+'" class="card-body"><a href="event.html?id='+id+'"><h5 class="card-title">'+name+'</h5></a><p class="card-text">'+summary+'</p></div></div></div></div>';
        eventsList.appendChild(listItem);
  }
    if(json.length == 0){
    var listItem = document.createElement("li");
            listItem.className = "list-group list-group-flush";
            listItem.innerHTML='<div class="alert alert-danger" role="alert">There is no event in this month! :(</div>'
            eventsList.appendChild(listItem);
    }
  })}
document.getElementById("Aug").onclick=function() {
document.getElementById("event-list").innerHTML = "";
fetch('https://hypergroup.herokuapp.com/v1/events/bymonth/Aug')
.then(function(response){
    var a=response.json();
    return a;
}).then(function(json){
    for(var i=0; i<json.length; i++){
        var listItem = document.createElement("li");
        listItem.className = "list-group list-group-flush";
        let {id,created_at,updated_at,name,description,photo,enabled,startdate,enddate,startmonth,summary,practical} = json[i];
        listItem.innerHTML='<div class="card mb-3" ><div class="row no-gutters"><div class="col-md-2"><img src="..." class="card-img" alt="..."></div><div class="col-md-10"><div id="'+id+'" class="card-body"><a href="event.html?id='+id+'"><h5 class="card-title">'+name+'</h5></a><p class="card-text">'+summary+'</p></div></div></div></div>';
        eventsList.appendChild(listItem);
  }
    if(json.length == 0){
    var listItem = document.createElement("li");
            listItem.className = "list-group list-group-flush";
            listItem.innerHTML='<div class="alert alert-danger" role="alert">There is no event in this month! :(</div>'
            eventsList.appendChild(listItem);
    }
  })}
document.getElementById("Sep").onclick=function() {
document.getElementById("event-list").innerHTML = "";
fetch('https://hypergroup.herokuapp.com/v1/events/bymonth/Sep')
.then(function(response){
    var a=response.json();
    return a;
}).then(function(json){
    for(var i=0; i<json.length; i++){
        var listItem = document.createElement("li");
        listItem.className = "list-group list-group-flush";
        let {id,created_at,updated_at,name,description,photo,enabled,startdate,enddate,startmonth,summary,practical} = json[i];
        listItem.innerHTML='<div class="card mb-3" ><div class="row no-gutters"><div class="col-md-2"><img src="..." class="card-img" alt="..."></div><div class="col-md-10"><div id="'+id+'" class="card-body"><a href="event.html?id='+id+'"><h5 class="card-title">'+name+'</h5></a><p class="card-text">'+summary+'</p></div></div></div></div>';
        eventsList.appendChild(listItem);
  }
    if(json.length == 0){
    var listItem = document.createElement("li");
            listItem.className = "list-group list-group-flush";
            listItem.innerHTML='<div class="alert alert-danger" role="alert">There is no event in this month! :(</div>'
            eventsList.appendChild(listItem);
    }
  })}
document.getElementById("Oct").onclick=function() {
document.getElementById("event-list").innerHTML = "";
fetch('https://hypergroup.herokuapp.com/v1/events/bymonth/Oct')
.then(function(response){
    var a=response.json();
    return a;
}).then(function(json){
    for(var i=0; i<json.length; i++){
        var listItem = document.createElement("li");
        listItem.className = "list-group list-group-flush";
        let {id,created_at,updated_at,name,description,photo,enabled,startdate,enddate,startmonth,summary,practical} = json[i];
        listItem.innerHTML='<div class="card mb-3" ><div class="row no-gutters"><div class="col-md-2"><img src="..." class="card-img" alt="..."></div><div class="col-md-10"><div id="'+id+'" class="card-body"><a href="event.html?id='+id+'"><h5 class="card-title">'+name+'</h5></a><p class="card-text">'+summary+'</p></div></div></div></div>';
        eventsList.appendChild(listItem);
  }
    if(json.length == 0){
    var listItem = document.createElement("li");
            listItem.className = "list-group list-group-flush";
            listItem.innerHTML='<div class="alert alert-danger" role="alert">There is no event in this month! :(</div>'
            eventsList.appendChild(listItem);
    }
  })}
document.getElementById("Nov").onclick=function() {
document.getElementById("event-list").innerHTML = "";
fetch('https://hypergroup.herokuapp.com/v1/events/bymonth/Nov')
.then(function(response){
    var a=response.json();
    return a;
}).then(function(json){
    for(var i=0; i<json.length; i++){
        var listItem = document.createElement("li");
        listItem.className = "list-group list-group-flush";
        let {id,created_at,updated_at,name,description,photo,enabled,startdate,enddate,startmonth,summary,practical} = json[i];
        listItem.innerHTML='<div class="card mb-3" ><div class="row no-gutters"><div class="col-md-2"><img src="..." class="card-img" alt="..."></div><div class="col-md-10"><div id="'+id+'" class="card-body"><a href="event.html?id='+id+'"><h5 class="card-title">'+name+'</h5></a><p class="card-text">'+summary+'</p></div></div></div></div>';
        eventsList.appendChild(listItem);
  }
    if(json.length == 0){
    var listItem = document.createElement("li");
            listItem.className = "list-group list-group-flush";
            listItem.innerHTML='<div class="alert alert-danger" role="alert">There is no event in this month! :(</div>'
            eventsList.appendChild(listItem);
    }
  })}
document.getElementById("Dec").onclick=function() {
document.getElementById("event-list").innerHTML = "";
fetch('https://hypergroup.herokuapp.com/v1/events/bymonth/Dec')
.then(function(response){
    var a=response.json();
    return a;
}).then(function(json){
    for(var i=0; i<json.length; i++){
        var listItem = document.createElement("li");
        listItem.className = "list-group list-group-flush";
        let {id,created_at,updated_at,name,description,photo,enabled,startdate,enddate,startmonth,summary,practical} = json[i];
        listItem.innerHTML='<div class="card mb-3" ><div class="row no-gutters"><div class="col-md-2"><img src="..." class="card-img" alt="..."></div><div class="col-md-10"><div id="'+id+'" class="card-body"><a href="event.html?id='+id+'"><h5 class="card-title">'+name+'</h5></a><p class="card-text">'+summary+'</p></div></div></div></div>';
        eventsList.appendChild(listItem);
  }
  if(json.length == 0){
  var listItem = document.createElement("li");
          listItem.className = "list-group list-group-flush";
          listItem.innerHTML='<div class="alert alert-danger" role="alert">There is no event in this month! :(</div>'
          eventsList.appendChild(listItem);
  }
  })}