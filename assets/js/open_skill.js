if(window.screen.width < 1024){
    let skills = document.querySelectorAll('.skill--mobile');
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
else{
    let titles = document.querySelectorAll('.skill__title--desktop');
    let contents = document.querySelectorAll('.skill__content--desktop');
    
    titles.forEach((title, i) => {
        title.addEventListener('click', e=>{
            titles.forEach(title => title.classList.remove('open'));
            contents.forEach(content => content.classList.remove('open'));
            e.currentTarget.classList.add('open');
            contents[i].classList.add('open');

        });
    });
}
