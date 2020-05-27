let id= document.location.search.replace(/^.*?\=/,'');
var url='https://hypergroup.herokuapp.com/v1/services/'+id;
var bcList= document.getElementById('breadcrumb');
fetch(url)
.then(function(response){
    var a=response.json();
    return a;
}).then(function(json){
    for(var i=0; i<json.length; i++){
        var item = document.createElement("li");
        item.className = "breadcrumb-item active";
        item.id = "bcID"
        item.setAttribute('aria-current',"page");
        let {id,created_at,updated_at,name,description,photo,enabled} = json[i];
        item.innerHTML=name;
        bcList.appendChild(item);
        document.getElementById("img").setAttribute('src',"photo");
        document.getElementById("name").innerHTML=name;
        document.getElementById("desc").innerHTML=description;
        document.getElementById("persons-link").setAttribute('href',"person.html?id="+id+"/related_persons");
  }
  })