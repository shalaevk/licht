



document.querySelector(".blocks__wrap").onmousemove = e => {
    console.log(e);
    for (const card of document.getElementsByClassName("block__item")) {
        const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    };
}
