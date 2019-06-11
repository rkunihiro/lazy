import "./index.html";

const callback: IntersectionObserverCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver): void => {
//    console.log({ entries, observer });
    entries.forEach((entry: IntersectionObserverEntry) => {
        const targetElement = entry.target as HTMLDivElement;
        if (entry.isIntersecting) {
            console.log(targetElement.id);
            targetElement.style.opacity = "1.0";
            observer.unobserve(targetElement);
        }
    });
};
const options: IntersectionObserverInit = {
    threshold: 0.25, //[0.25, 0.50, 0.75, 1.0],
};
const observer = new IntersectionObserver(callback, options);

const list = document.querySelectorAll(".article");
list.forEach((el) => {
    observer.observe(el);
});
