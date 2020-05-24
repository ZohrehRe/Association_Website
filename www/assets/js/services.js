/*
var servicesList= document.querySelector("ul");
fetch('https://hypergroup.herokuapp.com/v1/services',{ mode: 'no-cors'})
.then(function(response){
    var a=response.json();
    window.alert(a);
    return a;
}).then(function(json){
    for(var i=0; i<json.length; i++){
        var listItem = document.createElement("li");
        listItem.className = "list-group list-group-flush";
        let {id,created_at,updated_at,name,description,photo,enabled,lastname,email} = json[i];
        listItem.innerHTML='<div class="card mb-3" ><div class="row no-gutters"><div class="col-md-2"><img src="..." class="card-img" alt="..."></div><div class="col-md-10"><div class="card-body"><h5 class="card-title">${name}</h5><p class="card-text">${description}</p></div></div></div></div>';
        servicesList.appendChild(listItem);
  }
  })

*/
var servicesList= document.getElementById("service-list");
fetch('https://hypergroup.herokuapp.com/v1/services')
.then(function(response){
    var a=response.json();
    return a;
}).then(function(json){
    for(var i=0; i<json.length; i++){
        var listItem = document.createElement("li");
        listItem.className = "list-group list-group-flush";
        let {id,created_at,updated_at,name,description,photo,enabled,lastname,email} = json[i];
                window.alert(name);
        listItem.innerHTML='<div class="card mb-3" ><div class="row no-gutters"><div class="col-md-2"><img src="..." class="card-img" alt="..."></div><div class="col-md-10"><div id="'+id+'" class="card-body"><h5 class="card-title">'+name+'</h5><p class="card-text">'+description+'</p></div></div></div></div>';
        servicesList.appendChild(listItem);
  }
  })