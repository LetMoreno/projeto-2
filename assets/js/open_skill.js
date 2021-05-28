if(window.screen.width < 1024){
    let skills = document.querySelectorAll('.skill');
    let skillTitle = document.querySelectorAll('.skill__title');
    function removeOpenClass(skills) {
        skills.forEach(skill => {
            skill.classList.remove('open');
        });
    }

    function addOpenClass(skills, skillIndex){
        removeOpenClass(skills);
        skills[skillIndex].classList.add('open');
        skills = document.querySelectorAll('.skill');
    }

    skillTitle.forEach((title, index) => {
        title.addEventListener('click', (e)=>{
            if(e.target.parentNode.classList.contains('open')){
                removeOpenClass(skills);
            }
            else{
                addOpenClass(skills, index);
            }
        });
    });
}
