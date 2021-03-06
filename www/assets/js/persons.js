var personsList= document.getElementById("person-list");
fetch('https://hypergroup.herokuapp.com/v1/persons')
.then(function(response){
    var a=response.json();
    return a;
}).then(function(json){
    for(var i=0; i<json.length; i++){
        var listItem = document.createElement("li");
        listItem.className = "list-group list-group-flush";
        let {id,created_at,updated_at,name,description,photo,enabled,lastname,email, summary} = json[i];
        listItem.innerHTML='<div class="card mb-3" ><div class="row no-gutters"><div class="col-md-2"><img src="'+photo+'" height="100%" width="100%" class="card-img" alt="photo of '+lastname+'"></div><div class="col-md-10"><div id="'+id+'" class="card-body"><a href="person.html?id='+id+'"><h5 class="card-title">'+name+" "+lastname+'</h5></a><p class="card-text">'+summary+'</p></div></div></div></div>';
        personsList.appendChild(listItem);
  }
  })

