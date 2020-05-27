let id= document.location.search.replace(/^.*?\=/,'');
var url='https://hypergroup.herokuapp.com/v1/events/'+id;
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
  }
  })


var list= document.getElementById('contacts');
fetch('https://hypergroup.herokuapp.com/v1/events/'+id+'/related_persons')
.then(function(response){
    var a=response.json();
    return a;
}).then(function(json){
    for(var i=0; i<json.length; i++){
        var item = document.createElement("a");
        item.className = "list-group-item list-group-item-action";
        let {id,created_at,updated_at,name,description,photo,enabled} = json[i];
        item.setAttribute('href',"person.html?id="+id);
        item.innerHTML=name;
        list.appendChild(item);
  }
  })


var list2= document.getElementById('services');
fetch('https://hypergroup.herokuapp.com/v1/events/'+id+'/related_services')
.then(function(response){
    var a=response.json();
    return a;
}).then(function(json){
    for(var i=0; i<json.length; i++){
        var item = document.createElement("a");
        item.className = "list-group-item list-group-item-action";
        let {id,created_at,updated_at,name,description,photo,enabled} = json[i];
        item.setAttribute('href',"service.html?id="+id);
        item.innerHTML=name;
        list2.appendChild(item);
  }
  })