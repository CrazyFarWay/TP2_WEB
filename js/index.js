window.addEventListener("DOMContentLoaded", () => {

    const botonAgregar = document.getElementById("botonAgregar");

    let alumnos = [
        {
            "legajo": "50333",
            "apellidos": "Saccone",
            "nombres": "Valentina",
            "nota": "7"
        },
        {
            "legajo": "50333",
            "apellidos": "Sánchez",
            "nombres": "Esteban Nicolás",
            "nota": "7"
        },
        {
            "legajo": "50333",
            "apellidos": "Saccone",
            "nombres": "Valentina",
            "nota": "7"
        }
    ]

    botonAgregar.addEventListener("click", (e) => {
        console.log("Evento", e);
        const legajo = document.getElementById("legajo").value;
        const apellidos = document.getElementById("apellidos").value;
        const nombres = document.getElementById("nombres").value;
        const nota = document.getElementById("nota").value;

        const alumno = {
            "legajo": `${legajo}`,
            "apellidos": `${apellidos}`,
            "nombres": `${nombres}`,
            "nota": `${nota}`
        }

        alumnos.push(alumno);
        render(alumnos);

        document.getElementById("legajo").value = '';
        document.getElementById("apellidos").value = '';
        document.getElementById("nombres").value = '';
        document.getElementById("nota").value = '';
    })

    const render = arrayAlumnos => {
        console.log('renderizando alumnos', arrayAlumnos);
        const tablaAlumnos = document.getElementById('tablaAlumnos');
        tablaAlumnos.innerHTML = `
        <tr>
            <th>Legajo</th>
            <th>Apellidos</th>
            <th>Nombres</th>
            <th>Nota</th>
            <th>Acciones</th>
        </tr>`

        const $frg = document.createDocumentFragment()

        arrayAlumnos.forEach((alumno,index) => {

            const { legajo, apellidos, nombres, nota } = alumno

            const $tr = document.createElement('tr')
            $tr.innerHTML = ''
            $tr.innerHTML = `
                <td>${legajo}</td>
                <td>${apellidos}</td>
                <td>${nombres}</td>
                <td>${nota}</td>
            `
            $tr.classList.add("p-5");
            
            const $button = document.createElement('button')
            $button.classList.add("btn", "btn-danger", "m-1", "w-100", "p-2", "bg-danger");
            $button.innerHTML = '<i class="fa-solid fa-trash text-light" aria-hidden="true"></i>';

            const $td = document.createElement('td');
            $td.appendChild($button)
            $tr.appendChild($td)
            $frg.appendChild($tr)

            $button.addEventListener('click', () => {
                alumnos = alumnos.filter((el, idx) => idx != index)
                render(alumnos);
            })
        }); 

        tablaAlumnos.appendChild($frg)
    }

    render(alumnos);
})