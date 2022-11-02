window.addEventListener('DOMContentLoaded',()=>{
    const buttonBuscadorShow = document.getElementById('buttonBuscadorShow');

    buttonBuscadorShow.addEventListener('click',async()=>{
        const showName = document.getElementById('buscadorShow').value;
        let shows=[];

        try {
            console.log('solicitud a la api',showName);
            const response = await fetch(`https://api.tvmaze.com/search/shows?q=${showName}`);
            const jsonData = await response.json();
            shows = jsonData;
            render(shows);
        } catch (error) {
            error => console.log(error)
        } finally {
            console.log('fin de la solicitud', shows)
        }
    });

    const render= arrayShows =>{
        console.log('renderizando shows',arrayShows);
        const cardResultado = document.getElementById('cardResultado');
        cardResultado.innerHTML=''
        let tmpHtml=''
        arrayShows.forEach(s => {
            
            const {show:{name,type,language,genres:genres,status,rating:{average},image:{original},summary}}=s
            tmpHtml+=`
            <div class="card-col col-md-4 col-xs-12">
                <div class="card mb-5 bg-body rounded">
                    <img src="${original}" class="card-img-top" alt="Foto de ${name}">
                    <h5 class="card-header text-dark">${name}</h5>
                    <div class="card-body">
                        <h5>Resumen</h5>
                        ${summary}
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <i class="fa-regular fa-envelope"></i>
                                <span class="fw-bold">Tipo: </span>
                                <span> ${type}</span>
                            </li>
                            <li class="list-group-item">
                                <i class="fa-solid fa-language" aria-hidden="true"></i>
                                <span class="fw-bold">Idioma: </span>
                                <span> ${language}</span>
                            </li>
                            <li class="list-group-item">
                                <i class="fa-solid fa-genderless" aria-hidden="true"></i>
                                <span class="fw-bold">Generos: </span>
                                <span> ${genres} </span>
                            </li>
                            <li class="list-group-item">
                                <i class="fa-solid fa-star" aria-hidden="true"></i>
                                <span class="fw-bold">Rating: </span>
                                <span> ${average} </span>
                            </li>
                            <li class="list-group-item">
                                <i class="fa-sharp fa-solid fa-signal" aria-hidden="true"></i>
                                <span class="fw-bold">Estado: </span>
                                <span> ${status} </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>`
        }); //arrayShows.forEach
        
        
        cardResultado.innerHTML = tmpHtml               
    }


})




