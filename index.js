import "./input.css";
let button=document.querySelectorAll("button");
button.forEach((btn) =>{
    btn.addEventListener("mouseenter", () => {
        if(!btn.classList.contains("new-quote")&&!btn.classList.contains("save")){
            btn.classList.add("animate-slide-up","border-ink2","text-ink3");
        }
        else if(btn.classList.contains("save")){
            btn.classList.add("animate-slide-up","border-pink","text-pink");
        }
        else{
            btn.classList.add("animate-slide-up");
        }
    });
    btn.addEventListener("mouseleave", () => {
        btn.classList.remove("animate-slide-up","border-ink2","border-pink","text-pink","text-ink3");
        void btn.offsetWidth;
    });
});
