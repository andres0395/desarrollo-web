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
    //document.querySelector('.nomId').focus();
    //lista();
    try {
        
        if(isNaN(edad))
        {
            throw new Error('el dato no es un numero');
        }
        else{

            document.querySelector('#con1').classList.add('d-none');
            mostrar();
        }
    } 
    catch (error) {
        alert(error)
    }
    document.querySelector('.nomId').focus();
    
});
function mostrar() {
    document.querySelector('#con2').classList.remove('d-none');
    document.querySelector('#con3').classList.remove('d-none');
};
try {
    console.log('el try');
    
} catch (error) {
    console.log('el catch');
}
finally{
    console.log('siempre ejecutado');
}
// function lista(){

//     let lista = '';
//     obj.nombre.forEach(el =>{
//         lista +=`
//         <li>${el}</li>
//         `
//     });
//     document.getElementById('lista').innerHTML = lista;
//     let lista2 ='';
//     obj.edad.forEach(el =>{
//         lista2 +=`
//         <li>${el}</li>
//         `
//     });
//     document.getElementById('lista2').innerHTML = lista2;

// };