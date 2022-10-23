let obj = {
    nombre:[],
    edad:[]
};
document.getElementById('formId').addEventListener('submit', e =>{
    e.preventDefault();
    let nombre = document.querySelector('.nomId').value;
    let edad = document.getElementById('edadId').value;
    obj.nombre.push(nombre);
    obj.edad.push(edad);
    document.querySelector('.nomId').value = '';
    document.getElementById('edadId').value = '';
    document.querySelector('.nomId').focus();
    lista();
});
function lista(){
    let lista = '';
    obj.nombre.forEach(el =>{
        lista +=`
        <li>${el}</li>
        `
    });
    document.getElementById('lista').innerHTML = lista;
    let lista2 ='';
    obj.edad.forEach(el =>{
        lista2 +=`
        <li>${el}</li>
        `
    });
    document.getElementById('lista2').innerHTML = lista2;

};