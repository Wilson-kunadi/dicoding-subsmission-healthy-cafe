console.log("scroll.js activated");

var myNav = document.getElementsByTagName("header")[0];
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 0) {
    myNav.classList.add("scrolled");
  }else{
    myNav.classList.remove("scrolled");
  }
  
})

const liNav = document.getElementsByTagName("nav")[0].children[1].children;
for (const key of liNav) {
  key.addEventListener("click", (e) => {
    switch (e.toElement.innerText.toLowerCase()) {
      case "home":
        var element = document.getElementById("banner");
        element.scrollIntoView();
        console.log(e.toElement.innerText);
        break;

      case "about":
        var element = document.getElementById("about-us");
        element.scrollIntoView();
        console.log(e.toElement.innerText);
        break;    

      case "why us":
        var element = document.getElementById("why-us");
        element.scrollIntoView();        
        console.log(e.toElement.innerText);
        break;

      case "subscribe":
        var element = document.getElementById("subs-plan");
        element.scrollIntoView();
        console.log(e.toElement.innerText);     
        break;        
      
    }
  });
  
}
