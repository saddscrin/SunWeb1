

export function readJson () {

    const baseUrl = 'https://raw.githubusercontent.com/saddscrin/assets/main/products.json'

  
    fetch(baseUrl)
    .then(response => response.json())
    .then(data => {
        setNavLinks(data);
    });
}


function setNavLinks(data) {
        let navBlock = document.querySelector('.block_nav__border');
        if (navBlock) {
            Object.entries(data).forEach(item => {
                if (item[1].status == true) {
                    let navElenet = `<div class="nav_element"><a href="">${item[1].name}</a></div>`;
                    navBlock.innerHTML += navElenet;
                }
            })
        }
    }