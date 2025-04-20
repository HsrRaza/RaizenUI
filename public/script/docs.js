function showContent(index) {
    const tabBtn = document.querySelectorAll('.tab-btn');
    const tabCtn = document.querySelectorAll('.tabs-ctn');
    tabBtn.forEach((tab, i) => {
        tab.classList.toggle('active', i === index);
    });

    tabCtn.forEach((content, i) => {
        content.classList.toggle('active', i === index);
    })
}
window.onload = () => showContent(2)





function copyRzButtonCode() {
    const code = document.querySelector('.code-snippet code').textContent;
    navigator.clipboard.writeText(code).then(() => {
        const btn = document.querySelector('.copy-btn');
        btn.textContent = 'Copied!';
        setTimeout(() => {
            btn.innerHTML = `<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 4H2C1.44772 4 1 4.44772 1 5V13C1 13.5523 1.44772 14 2 14H9C9.55228 14 10 13.5523 10 13V12" stroke="currentColor" stroke-width="1.5"/>
  <rect x="4" y="2" width="8" height="10" rx="1" stroke="currentColor" stroke-width="1.5"/>
</svg> Copy`;
        }, 2000);
    });
}

