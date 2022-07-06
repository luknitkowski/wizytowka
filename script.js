const getEl = (id) => document.getElementById(id);

const init = () => {
    setTimeout(() => {
        const loadingPage = getEl('loading-page')
        const container = getEl('container')
        loadingPage.style.display = 'none'
        container.style.display = 'block'
    }, 0);
}

window.onload = () => {
    init();
}

const child = getEl('child')
child.onscroll = function() {myFunction()};

const myFunction = () => {
    const child = getEl('child')
    const winScroll = child.scrollTop || child.scrollTop;
    const height = child.scrollHeight - child.clientHeight;
    const scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

