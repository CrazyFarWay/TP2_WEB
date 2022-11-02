window.addEventListener('DOMContentLoaded',()=>{
    const buttonListadoUsuarios = document.getElementById('buttonListadoUsuarios');

    buttonListadoUsuarios.addEventListener('click',()=>{
        const numeroListadoUsuarios = document.getElementById('numeroListadoUsuarios').value;
        let usuarios=[];

        console.log('solicitud a la api',usuarios);

        fetch(`https://randomuser.me/api/?results=${numeroListadoUsuarios}`)
            .then(response => response.json()) //metodo json del objeto response
            .then(jsonData => {
                console.log(jsonData)
                usuarios = jsonData.results;
                render(jsonData.results)
            }) //datos convertidos a un objeto js
            .catch(error => console.log(error))
            .finally(() => console.log('fin de solicitud a api',usuarios));
        console.log('al finalizar',usuarios);
    })


    const render= arrayUsuarios =>{
        console.log('renderizando usuarios',arrayUsuarios);
        const cardResultado = document.getElementById('cardResultado');
        cardResultado.innerHTML=''
        let tmpHtml=''
        arrayUsuarios.forEach(u => {
            
            const{name:{title,first,last},email,phone,cell,picture:{large:urlPicture}}=u
            tmpHtml+=`
            <div class= "col-lg-4 col-md-6 col-xs-12">
                <div class="card mb-5 bg-body rounded">
                    <img src="${urlPicture}" class="card-img-top" alt="Foto de ${title} ${first} ${last}">
                    <h5 class="card-header text-dark">${title} ${first} ${last}</h5>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <i class="fa-regular fa-envelope"></i>
                                <span class="fw-bold">Email: </span>
                                <span> ${email}</span>
                            </li>
                            <li class="list-group-item">
                                <i class="fa fa-phone" aria-hidden="true"></i>
                                <span class="fw-bold">Teléfono: </span>
                                <span> ${phone}</span>
                            </li>
                            <li class="list-group-item">
                                <i class="fa fa-mobile" aria-hidden="true"></i>
                                <span class="fw-bold">Celular: </span>
                                <span> ${cell} </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>`


        }); //arrayUsuarios.forEach
        
        
        cardResultado.innerHTML = tmpHtml               
    }


})




