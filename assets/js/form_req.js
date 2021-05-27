async function sendLead() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let cpf = document.getElementById("cpf").value;
    let tel = document.getElementById("tel").value;
    
    let novoLead = {
        "name": nome,
        "email": email,
        "cpf":cpf,
        "telefone":tel
    }
    let headers = {
            method:"POST",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoLead)
        };
    
    let req = await fetch('http://localhost:3000/users', headers)
            .catch(function(err){
                console.log(err);
            })
}

document.getElementById('form').addEventListener('submit', function(ev) {
    ev.preventDefault();
    let cpf = document.getElementById('cpf').value;
    let tel = document.getElementById('tel').value;
    if(tel.length >= 14 || cpf.length == 14){
        sendLead();
    }
});