// Fade Animation

const elements = document.querySelectorAll("h2, h3, p, ul, table, img");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

elements.forEach(el => {
    el.classList.add("fade");
    observer.observe(el);
});

