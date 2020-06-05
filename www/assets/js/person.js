var ref = document.referrer;
let id= document.location.search.replace(/^.*?\=/,'');
var url='https://hypergroup.herokuapp.com/v1/persons/'+id;
var bc= document.getElementById('breadcrumb');
fetch(url)
.then(function(response){
    var a=response.json();
    return a;
}).then(function(json){
    let {id,created_at,updated_at,name,description,photo,enabled,lastname,email, summary} = json[0];
    document.getElementById("svg").setAttribute('src',"photo");
    document.getElementById("name").innerHTML=name+" "+lastname;
    document.getElementById("desc").innerHTML=description;

        if(ref.includes("/persons")){
             var li0 = document.createElement("li");
             li0.className = "breadcrumb-item";
             li0.setAttribute('aria-current',"page");
             li0.innerHTML='<a href="persons.html">Persons</a>';
             bc.appendChild(li0);

             var item = document.createElement("li");
             item.className = "breadcrumb-item active";
             item.setAttribute('aria-current',"page");
             item.innerHTML=name+" "+lastname;
             bc.appendChild(item);
        }

        if(ref.includes("event")){
            var personName = name+" "+lastname;
            let id2= ref.replace(/^.*?\=/,'');
            fetch('https://hypergroup.herokuapp.com/v1/events/'+id2)
            .then(function(response){
                return response.json();
            }).then(function(json){
                    let {id,created_at,updated_at,name,description,photo,enabled,startdate,enddate,startmonth,summary,practical} = json[0];

                    var li0 = document.createElement("li");
                    li0.className = "breadcrumb-item";
                    li0.setAttribute('aria-current',"page");
                    li0.innerHTML='<a href="allEvents.html">All Events</a>';
                    bc.appendChild(li0);

                    var li = document.createElement("li");
                    li.className = "breadcrumb-item";
                    li.setAttribute('aria-current',"page");
                    li.innerHTML='<a href="event.html?id='+id2+'">'+name+'</a>';
                    bc.appendChild(li);

                    var item = document.createElement("li");
                    item.className = "breadcrumb-item active";
                    item.setAttribute('aria-current',"page");
                    item.innerHTML=personName;
                    bc.appendChild(item);
              })
        }

        if(ref.includes("service-person")){
                    var personName = name+" "+lastname;
                    let str2= ref.replace(/^.*?\=/,'');
                    var id2;
                    var end = str2.lastIndexOf("/");
                    if (end >= 0) { id2 = str2.substring(0, end); }
                    fetch('https://hypergroup.herokuapp.com/v1/services/'+id2)
                    .then(function(response){
                        return response.json();
                    }).then(function(json){
                            let {id,created_at,updated_at,name,description,photo,enabled,summary,practical} = json[0];

                            var li0 = document.createElement("li");
                            li0.className = "breadcrumb-item";
                            li0.setAttribute('aria-current',"page");
                            li0.innerHTML='<a href="services.html">Services</a>';
                            bc.appendChild(li0);

                            var li = document.createElement("li");
                            li.className = "breadcrumb-item";
                            li.setAttribute('aria-current',"page");
                            li.innerHTML='<a href="service.html?id='+id2+'">'+name+'</a>';
                            bc.appendChild(li);

                            var li2 = document.createElement("li");
                            li2.className = "breadcrumb-item active";
                            li2.setAttribute('aria-current',"page");
                            li2.innerHTML='<a href="service-event.html?id='+id2+'/related_events">'+name+' Related Persons</a>';
                            bc.appendChild(li2);

                            var item = document.createElement("li");
                            item.className = "breadcrumb-item active";
                            item.setAttribute('aria-current',"page");
                            item.innerHTML=personName;
                            bc.appendChild(item);
                      })

                }
  })



var list= document.getElementById('events');
fetch('https://hypergroup.herokuapp.com/v1/persons/'+id+'/related_Events')
.then(function(response){
    var a=response.json();
    return a;
}).then(function(json){
    for(var i=0; i<json.length; i++){
        var item = document.createElement("a");
        item.className = "list-group-item list-group-item-action";
        let {id,created_at,updated_at,name,description,photo,enabled} = json[i];
        item.setAttribute('href',"event.html?id="+id);
        item.innerHTML=name;
        list.appendChild(item);
  }
  })


var list2= document.getElementById('services');
fetch('https://hypergroup.herokuapp.com/v1/persons/'+id+'/related_services')
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