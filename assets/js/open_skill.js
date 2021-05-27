let skills = document.querySelectorAll('.skill');
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

skills.forEach((skill, index) => {
    skill.addEventListener('click', (e)=>{
        if(e.currentTarget.classList.contains('open')){
            removeOpenClass(skills);
        }
        else{
            addOpenClass(skills, index);
        }
    });
});