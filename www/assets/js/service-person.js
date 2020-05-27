let str2= document.location.search.replace(/^.*?\=/,'');
window.alert(str2);
var id;
var end = str.lastIndexOf("/");
if (end >= 0) { id = str2.substring(0, end); }
window.alert(id);
var personsList= document.getElementById("person-list");
fetch('https://hypergroup.herokuapp.com/v1/GET /services/'+id+'/related_persons')
.then(function(response){
    var a=response.json();
    return a;
}).then(function(json){
    for(var i=0; i<json.length; i++){
        var listItem = document.createElement("li");
        listItem.className = "list-group list-group-flush";
        let {id,created_at,updated_at,name,description,photo,enabled,lastname,email} = json[i];
        listItem.innerHTML='<div class="card mb-3" ><div class="row no-gutters"><div class="col-md-2"><img src="..." class="card-img" alt="..."></div><div class="col-md-10"><div id="'+id+'" class="card-body"><a href="person.html?id='+id+'"><h5 class="card-title">'+name+'</h5></a><p class="card-text">'+description+'</p></div></div></div></div>';
        personsList.appendChild(listItem);
  }
  })