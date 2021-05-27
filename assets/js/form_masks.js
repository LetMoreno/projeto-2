const masks = {
    cpf(value) {
        return value
            .replace(/\D/g, "") //d maiusculo = não numero, d minusculo = número
            .replace(/(\d{3})(\d)/, '$1.$2') //parentes = captura, $1 = primeira captura (parentes)
            .replace(/(\d{3})(\d)/, '$1.$2') //parentes = captura, $1 = primeira captura (parentes)
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    },

    tel(value){
        return value
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
    }
}

document.getElementById('cpf').addEventListener('input', e =>{
    e.target.value = masks.cpf(e.target.value);
})
document.getElementById('tel').addEventListener('input', e =>{
    e.target.value = masks.tel(e.target.value);
})