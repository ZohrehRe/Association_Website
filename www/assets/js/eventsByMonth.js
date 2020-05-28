jQuery(document).ready(function ($) {
      jQuery(".dropdown-menu li").click(function(){
            var sel=$(this).text();
            alert(sel);
       });
});
document.getElementById("drop").onclick=function() {
window.alert(document.getElementById('drop').value);
}
document.getElementById("Jan").onclick=function() {
window.alert("jan3");
}

