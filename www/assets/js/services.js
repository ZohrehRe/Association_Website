var servicesList= document.querySelector("ul");
fetch('https://hypergroup.herokuapp.com/v1/services')
.then(function(response){
    return response.json();
}).then(function(json){
    for(var i=0; i<json.length; i++){
        var listItem = document.createElement("li");
        listItem.className = "list-group list-group-flush";
        let {id,created_at,updated_at,name,description,photo,enabled,lastname,email} = json[i];
        listItem.innerHTML='<div class="card mb-3" ><div class="row no-gutters"><div class="col-md-2"><img src="..." class="card-img" alt="..."></div><div class="col-md-10"><div class="card-body"><h5 class="card-title">${name}</h5><p class="card-text">${description}</p></div></div></div></div>';
        servicesList.appendChild(listItem);
  }
  })


