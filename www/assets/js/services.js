var servicesList= document.getElementById("service-list");
fetch('https://hypergroup.herokuapp.com/v1/services')
.then(function(response){
    var a=response.json();
    return a;
}).then(function(json){
    for(var i=0; i<json.length; i++){
        var listItem = document.createElement("li");
        listItem.className = "list-group list-group-flush";
        let {id,created_at,updated_at,name,description,photo,enabled,summary,practical} = json[i];
        listItem.innerHTML='<div class="card mb-3" ><div class="row no-gutters"></div><div class="col-md-12"><div id="'+id+'" class="card-body"><a href="service.html?id='+id+'"><h5 class="card-title">'+name+'</h5></a><p class="card-text">'+summary+'</p></div></div></div></div>';
        servicesList.appendChild(listItem);
  }
  })