const btn = document.querySelector('.btn');
const gallery = document.querySelector('.gallery');
const input = document.querySelector('.input');
const error = document.querySelector('.error');
const buttons = document.querySelector('.buttons');


async function  generate() {
    const inputIn = document.getElementById('input').value;
    console.log('Button Clicked');

    if (inputIn > 10 || inputIn < 1) {
        error.style.display = 'block';
        return;
    }
    urls = '';
    try {
        buttons.style.display = 'none';
        const loading = `<img src="../images/Bean Eater-1s-200px.svg" alt="Loading Image">`;
        gallery.innerHTML = loading;
        await fetch(`https://api.unsplash.com/photos?per_page=${inputIn}&page=${Math.round(Math.random() * 1000)}&client_id=Nois8sS11pYHBj577wfvXnGtpLRue5f-48PRM8nOMts`)
        .then((res) => res.json()
        .then((data) => {
            if (data) {
                data.forEach((pho) => {
                    console.log(pho.urls.small);
                    urls += `
                    <img src=${pho.urls.small} alt="Image">
                    `;
                    gallery.style.display = 'flex';
                    gallery.innerHTML = urls;
                    buttons.style.display = 'block';
                    error.style.display = 'none';
                })
        }
        })
        );
            //console.log(data));
    
        //Removing the error when entering a true number
        
    
    } catch (e) {
        error.style.display = 'block';
        error.innerText = `There is an error which is ${e}`;
        buttons.style.display = 'flex';
        gallery.style.display = 'none';
    }
}
btn.addEventListener('click',  generate);


