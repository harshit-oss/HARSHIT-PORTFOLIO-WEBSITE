const links = document.querySelectorAll("nav a");
const pages = document.querySelectorAll(".page");
for (const link of links){
    link.addEventListener("click",(evt)=>{
        evt.preventDefault();

        for (const p of pages){
            p.classList.remove("active"); //hide
        }
        document.querySelector(link.getAttribute("href")).classList.add("active");
    });
}

