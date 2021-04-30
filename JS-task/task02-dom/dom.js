function changeOuterLinks() {
    document.querySelectorAll('outer-link').forEach( e => {
        e.css.target = '_blank';
        e.style.fontStyle = 'strong';
    });
    document.querySelectorAll('nav').forEach( e => {
        e.style.display = 'flex';
        e.style.width = '30%';
        e.style.margin = '0 auto 0 auto';
        e.style.border = '1px solid blue';
        e.style.padding = '16px'
    })
}


export { changeOuterLinks };