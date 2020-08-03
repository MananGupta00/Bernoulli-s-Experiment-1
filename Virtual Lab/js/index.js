showHome();

function openTab(evt, pgName, d) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("pg");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(pgName).style.display = "block";
    evt.currentTarget.className += " active";
    
}

  function showHome(){
      document.getElementById("verification").style.display = "none";
      document.getElementById("Simulator").style.display = "none";
      

  }