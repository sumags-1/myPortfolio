//Opening Contact link in modal

const contactLk = document.getElementById('contact');
const modal = document.getElementById('modal')
const closeBtn = document.getElementById('close')


const openModal = () => {
    modal.style.display = 'block';
}

const closeModal = () => {
    modal.style.display = 'none';
}

contactLk.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);


//Opening each section as a page instead of having seperate pages
//selecting the pages and links 
const pages = document.querySelectorAll("section");
const links = document.getElementsByClassName("navigation");


function onClickLink(event) {
    const pageId = event.target.innerText.toLowerCase().replaceAll(' ', '-');

    //check if the selected link text is equal to the ID of the section selected
    for (let i = 0; i < pages.length; i++) {
        if (pageId === pages[i].id) {
            pages[i].className = "current"
        } else {
            pages[i].className = "hidden"
        }
    }
}

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', onClickLink);
}