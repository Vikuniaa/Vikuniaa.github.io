

const kotek_kursor = document.querySelector('.custom-cursor.kotek-kursor');

document.addEventListener('mouseenter' , () => {

 kotek_kursor.style.display = 'block';

});

document.addEventListener('mouseleave' , () => {

 kotek_kursor.style.display = 'none';

});

document.addEventListener('mousemove', TrackCursor);

function TrackCursor(evt){

    const w = kotek_kursor.clientWidth;
    const h = kotek_kursor.clientHeight;
     
    kotek_kursor.style.transform = `translate(${evt.clientX - w/2}px, ${evt.clientY - h/2}px)`;
}
