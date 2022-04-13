//select movie poster original image
let moviePoster = document.querySelector('.movie-poster');
//console.log(moviePoster);

//select modal windows layer
let modal = document.querySelector('#myModal');
//console.log(modal);

//select close button
let closeBtn = document.querySelector('.closeBtn');
//console.log(closeBtn);

//select modal windows image
let modalImage = document.querySelector('.movie-poster-modal');
//console.log(modalImage);

//Clicking on the picture then modal window opens
moviePoster.addEventListener('click', ()=> {
    //console.log('image clicked');
    modal.style.display = 'block';
    modalImage.src = moviePoster.src;
});

//Closes when pressing x
closeBtn.addEventListener('click', ()=> {
    modal.style.display = 'none';
});

//Click outside the modal window and it closes
window.addEventListener('click', (event)=> {
    if(event.target ===modal) {
        modal.style.display = 'none';
    }
});