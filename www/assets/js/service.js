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

        if(ref.includes("services")){
             var li0 = document.createElement("li");
             li0.className = "breadcrumb-item";
             li0.setAttribute('aria-current',"page");
             li0.innerHTML='<a href="services.html">Services</a>';
             bc.appendChild(li0);

             var item = document.createElement("li");
             item.className = "breadcrumb-item active";
             item.setAttribute('aria-current',"page");
             item.innerHTML=name;
             bc.appendChild(item);
        }

        if(ref.includes("event")){
            var serviceName = name;
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
                    item.innerHTML=serviceName;
                    bc.appendChild(item);
              })
        }

        if(ref.includes("person")){
            var serviceName = name;
            let id2= ref.replace(/^.*?\=/,'');
            fetch('https://hypergroup.herokuapp.com/v1/persons/'+id2)
            .then(function(response){
                return response.json();
            }).then(function(json){
                    let {id,created_at,updated_at,name,description,photo,enabled,lastname,email, summary} = json[0];

                    var li0 = document.createElement("li");
                    li0.className = "breadcrumb-item";
                    li0.setAttribute('aria-current',"page");
                    li0.innerHTML='<a href="persons.html">Persons</a>';
                    bc.appendChild(li0);

                    var li = document.createElement("li");
                    li.className = "breadcrumb-item";
                    li.setAttribute('aria-current',"page");
                    li.innerHTML='<a href="person.html?id='+id2+'">'+name+" "+lastname+'</a>';
                    bc.appendChild(li);

                    var item = document.createElement("li");
                    item.className = "breadcrumb-item active";
                    item.setAttribute('aria-current',"page");
                    item.innerHTML=serviceName;
                    bc.appendChild(item);
              })
        }

        var item = document.createElement("li");
        item.className = "breadcrumb-item active";
        item.id = "bcID"
        item.setAttribute('aria-current',"page");
        item.innerHTML=name;
        bcList.appendChild(item);

  })