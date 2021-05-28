const closeBtn = document.getElementById('close-btn');
const openBtns = document.querySelectorAll('.button--secondary');
const openLinks = document.querySelectorAll('.link-secondary');


function closeForm() {
    document.getElementById("form-wrapper").classList.add('inactive');
    document.getElementsByTagName('body')[0].style.overflow = 'unset';
}

function openForm() {
    document.getElementById('form-wrapper').classList.remove('inactive');
    document.getElementsByTagName('body')[0].style.overflow = "hidden";
}

closeBtn.addEventListener('click', closeForm);
openBtns.forEach(btn => {
    btn.addEventListener('click', openForm);
});
openLinks.forEach(link => {
    link.addEventListener('click', e=>{
        e.preventDefault();
        openForm();
    });
});