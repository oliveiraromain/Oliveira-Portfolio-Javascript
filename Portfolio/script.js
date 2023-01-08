// Carrousel //
document.body.onload=function(){
    nbr=5;
    p=0;
    container=document.getElementById("container");
    g=document.getElementById("g");
    d=document.getElementById("d");
    container.style.width=(800*nbr)+"px";
    for(i=1;i<=nbr;i++){
        div=document.createElement("div");
        div.className="photo";
        div.style.backgroundImage="url('../Images/im"+i+".png')";
        container.appendChild(div);
    }
    afficherMasquer();
}
d.onclick=function(){
    if(p>-nbr+1)
        p--;
    container.style.transform="translate("+p*800+"px)";
    container.style.transition="all 0.5s ease";
    afficherMasquer();
}
g.onclick=function(){
    if(p<0)
        p++;
    container.style.transform="translate("+p*800+"px)";
    container.style.transition="all 0.5s ease";
    afficherMasquer();
}
function afficherMasquer(){
    if(p==-nbr+1)
        d.style.visibility="hidden";
    else
        d.style.visibility="visible";
    if(p==0)
        g.style.visibility="hidden";
    else
        g.style.visibility="visible";                
}
// Navbar //
const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }

// Search Box //
searchToggle.addEventListener("click" , () =>{
    searchToggle.classList.toggle("active");
  });

// Side Bar//
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});


