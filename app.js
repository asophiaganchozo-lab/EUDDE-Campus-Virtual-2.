
const asignaturas = [
    {
        nombre: "Programación y Desarrollo de Software",
        area: "Especialidad - Informática"
    },
    {
        nombre: "Diseño y Desarrollo Web",
        area: "Especialidad - Informática"
    },
    {
        nombre: "Bases de Datos",
        area: "Especialidad - Informática"
    },
    {
        nombre: "Sistemas Operativos",
        area: "Especialidad - Informática"
    },
    {
        nombre: "Redes y Conectividad",
        area: "Especialidad - Informática"
    },
    {
        nombre: "Soporte Técnico y Mantenimiento",
        area: "Especialidad - Informática"
    },
    {
        nombre: "Aplicaciones Ofimáticas",
        area: "Especialidad - Informática"
    },
    {
        nombre: "Seguridad Informática",
        area: "Especialidad - Informática"
    },
    {
        nombre: "Inteligencia Artificial Aplicada",
        area: "Especialidad - Informática"
    },
    {
        nombre: "Ética, Legislación y Ciudadanía Digital",
        area: "Transversal"
    },
    {
        nombre: "Matemática",
        area: "Formación general"
    },
    {
        nombre: "Física",
        area: "Formación general"
    },
    {
        nombre: "Lengua y Literatura",
        area: "Formación general"
    },
    {
        nombre: "Inglés",
        area: "Formación general"
    },
    {
        nombre: "Emprendimiento y Gestión",
        area: "Formación general"
    }
];

function mostrarAsignaturas() {
    const contenedor = document.getElementById("listaAsignaturas");

    contenedor.innerHTML = "";

    asignaturas.forEach((asignatura, indice) => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "asignatura";

        let modulos = "";

        for (let numero = 1; numero <= 5; numero++) {
            modulos += `
                <details>
                    <summary>Módulo ${numero}</summary>
                    <p>Contenido educativo de ${asignatura.nombre}.</p>
                    <p>Actividades y evaluaciones del módulo.</p>
                </details>
            `;
        }

        tarjeta.innerHTML = `
            <h3>${indice + 1}. ${asignatura.nombre}</h3>
            <p>${asignatura.area}</p>
            <br>
            ${modulos}
        `;

        contenedor.appendChild(tarjeta);
    });
}

document.addEventListener("DOMContentLoaded", mostrarAsignaturas);
