const getEl = (id) => document.getElementById(id);

const init = () => {
    setTimeout(() => {
        const loadingPage = getEl('loading-page')
        const container = getEl('container')
        loadingPage.style.display = 'none'
        container.style.display = 'block'
    }, 0); // 3000
}

window.onload = () => {
    init();
}

const child = getEl('child')
child.onscroll = function() {myFunction()};

const myFunction = () => {
    const child = getEl('child')
    const vh = document.documentElement.clientHeight;
    const childScroll = child.scrollTop || child.scrollTop;
    const height = child.scrollHeight - child.clientHeight;
    if(childScroll < vh){
        getEl("header").style.display = 'none';
        return
    }
    getEl("header").style.display = 'block';
    const scrolled = (childScroll / height) * 100;
    getEl("myBar").style.width = scrolled + "%";
}

const scrollToElement = (id) => {
    const choosenEl = getEl(id)
    choosenEl.scrollIntoView({behavior: "smooth"});
}