var ref = document.referrer;
let id= document.location.search.replace(/^.*?\=/,'');
var url='https://hypergroup.herokuapp.com/v1/services/'+id;
var bc= document.getElementById('breadcrumb');
fetch(url)
.then(function(response){
    var a=response.json();
    return a;
}).then(function(json){
        let {id,created_at,updated_at,name,description,photo,enabled,summary,practical} = json[0];
        document.getElementById("name").innerHTML=name;
        document.getElementById("desc").innerHTML=description;
        document.getElementById("persons-link").setAttribute('href',"service-person.html?id="+id+"/related_persons");
        document.getElementById("events-link").setAttribute('href',"service-event.html?id="+id+"/related_events");
        document.getElementById("p-info").innerHTML=practical;


        var item = document.createElement("li");
        item.className = "breadcrumb-item active";
        item.id = "bcID"
        item.setAttribute('aria-current',"page");
        item.innerHTML=name;
        bcList.appendChild(item);

  })