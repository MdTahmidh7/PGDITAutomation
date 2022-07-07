const links = document.querySelectorAll(".scroll_to");
console.log('links = ',links);
links.forEach((item)=>{
    item.addEventListener("click", ()=>{
        const el = document.getElementById(item.getAttribute("data-link"));
        el.scrollIntoView({  behavior:"smooth",block:"start" });
    });
});

