
const asignaturas = [
    "Programación y Desarrollo de Software",
    "Diseño y Desarrollo Web",
    "Bases de Datos",
    "Sistemas Operativos",
    "Redes y Conectividad",
    "Soporte Técnico y Mantenimiento",
    "Aplicaciones Ofimáticas",
    "Seguridad Informática",
    "Inteligencia Artificial Aplicada",
    "Ética, Legislación y Ciudadanía Digital",
    "Matemática",
    "Física",
    "Lengua y Literatura",
    "Inglés",
    "Emprendimiento y Gestión"
];

let notas = JSON.parse(localStorage.getItem("notasEUDDE")) || {};

const preguntas = [
    {
        pregunta: "¿Qué es el hardware?",
        opciones: [
            "La parte física de una computadora",
            "Un programa",
            "Una página web"
        ],
        correcta: 0
    },
    {
        pregunta: "¿Qué es el software?",
        opciones: [
            "El teclado",
            "Los programas de una computadora",
            "El monitor"
        ],
        correcta: 1
    },
    {
        pregunta: "¿Qué significa HTML?",
        opciones: [
            "Lenguaje de marcado de hipertexto",
            "Sistema operativo",
            "Base de datos"
        ],
        correcta: 0
    }
];

function mostrarAsignaturas() {
    const contenedor = document.getElementById("listaAsignaturas");
    if (!contenedor) return;

    contenedor.innerHTML = "";

    asignaturas.forEach((nombre, indice) => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "asignatura";

        tarjeta.innerHTML = `
            <h3>${nombre}</h3>
            <p>5 módulos disponibles</p>
            <p>Nota: ${notas[nombre] ?? "Sin calificar"}</p>
            <button onclick="abrirCurso(${indice})">
                Entrar al curso
            </button>
        `;

        contenedor.appendChild(tarjeta);
    });
}

function abrirCurso(indice) {
    const nombre = asignaturas[indice];
    const contenedor = document.getElementById("listaAsignaturas");

    contenedor.innerHTML = `
        <h2>${nombre}</h2>
        <p>Bienvenido a tu aula virtual.</p>
        <h3>Contenido del curso</h3>

        ${[1, 2, 3, 4, 5].map(numero => `
            <details>
                <summary>Módulo ${numero}</summary>
                <p>Contenido educativo del módulo ${numero}.</p>
                <p>Lee y estudia el material de aprendizaje.</p>
                <p>Actividad: realiza un resumen de lo aprendido.</p>
            </details>
        `).join("")}

        <br>
        <button onclick="realizarEvaluacion(${indice})">
            Realizar evaluación
        </button>

        <button onclick="mostrarAsignaturas()">
            Volver a asignaturas
        </button>
    `;
}

function realizarEvaluacion(indice) {
    const contenedor = document.getElementById("listaAsignaturas");

    contenedor.innerHTML = `
        <h2>Evaluación: ${asignaturas[indice]}</h2>
        <p>Selecciona una respuesta por pregunta.</p>

        <form id="formularioEvaluacion">
            ${preguntas.map((pregunta, i) => `
                <div class="asignatura">
                    <h3>${i + 1}. ${pregunta.pregunta}</h3>

                    ${pregunta.opciones.map((opcion, j) => `
                        <label>
                            <input
                                type="radio"
                                name="pregunta${i}"
                                value="${j}"
                                required
                            >
                            ${opcion}
                        </label>
                        <br>
                    `).join("")}
                </div>
                <br>
            `).join("")}

            <button type="submit">Enviar evaluación</button>
        </form>

        <br>
        <button onclick="abrirCurso(${indice})">
            Volver al curso
        </button>
    `;

    document.getElementById("formularioEvaluacion")
        .addEventListener("submit", function(event) {
            event.preventDefault();

            let aciertos = 0;

            preguntas.forEach((pregunta, i) => {
                const respuesta = document.querySelector(
                    `input[name="pregunta${i}"]:checked`
                );

                if (
                    respuesta &&
                    Number(respuesta.value) === pregunta.correcta
                ) {
                    aciertos++;
                }
            });

            const nota = Number(
                ((aciertos / preguntas.length) * 10).toFixed(2)
            );

            notas[asignaturas[indice]] = nota;

            localStorage.setItem(
                "notasEUDDE",
                JSON.stringify(notas)
            );

            contenedor.innerHTML = `
                <h2>Evaluación completada</h2>
                <h3>Tu calificación es: ${nota}/10</h3>
                <p>Respuestas correctas: ${aciertos} de ${preguntas.length}</p>

                <button onclick="abrirCurso(${indice})">
                    Volver al curso
                </button>

                <button onclick="mostrarAsignaturas()">
                    Ver mis asignaturas
                </button>
            `;
        });
}

document.addEventListener("DOMContentLoaded", mostrarAsignaturas);
