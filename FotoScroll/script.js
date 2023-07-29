let scrollContainer = document.querySelector(".gallery");

let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (e)=>{
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
    scrollContainer.computedStyleMap.scrollBehavior = "auto";

});

nextBtn.addEventListener("click", ()=>{
    scrollContainer.computedStyleMap.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 850;
});

backBtn.addEventListener("click", ()=>{
    scrollContainer.computedStyleMap.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 850;
});