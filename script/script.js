console.log('Conexion JS');

let btnCategory1 = document.getElementById('btnCategory1');

let divForm = document.querySelector('.div-usuario');

const getElementos = async (url) =>{
    let mostrarElementos = document.querySelector('.grid-elementos');
    mostrarElementos.innerHTML = '';
    //Peticion para traer informcion a mostrar
    const resp = await fetch (url);
    const data = await resp.json()
    data.forEach(element => {
        //desestructuracion elemntos
        const{name,genero,img} = element;

        mostrarElementos.innerHTML += `
        <div class="col elementos">
            <a href="#" class="enlace-detalle-elemento">
                <div class="card bg-dark text-white gradiente"> 
                    <img src="${img}" class="card-img" alt="...">
                    <div class="card-img-overlay">
                            <h5 class="card-title body2Bold">${name}</h5>
                            <p class="card-text body2Regular">${genero}</p>
                    </div>
                </div>
            </a>
        </div>

        `

    });
}

btnCategory1.addEventListener('click',()=>{
    getElementos('http://localhost:3000/mariobros/')
})
