
/* =====================================
   EUDDE CAMPUS VIRTUAL
   ACCESO DIRECTO SIN INICIO DE SESIÓN
===================================== */

document.addEventListener("DOMContentLoaded", () => {
  // Eliminar cualquier pantalla de inicio de sesión
  const acceso = document.getElementById("accesoEUDDE");
  if (acceso) acceso.remove();

  // Mostrar la plataforma directamente
  document.body.style.visibility = "visible";

  // Cursos disponibles
  const cursos = {
    "Décimo EGB": ["General"],
    "1.º Bachillerato": ["Informática"],
    "2.º Bachillerato": ["Informática", "Ciencias", "Contabilidad"],
    "3.º Bachillerato": ["Informática", "Ciencias", "Contabilidad"]
  };

  const contenedor = document.getElementById("selectoresCurso");

  if (!contenedor) {
    console.error("No se encontró el contenedor selectoresCurso.");
    return;
  }

  contenedor.innerHTML = `
    <div class="selector-cursos">
      <h2>Bienvenido a EUDDE Campus Virtual</h2>
      <p>Selecciona tu curso para comenzar a aprender.</p>

      <label for="cursoEUDDE">Curso:</label>
      <select id="cursoEUDDE">
        <option value="">Selecciona tu curso</option>
        ${Object.keys(cursos).map(curso =>
          `<option value="${curso}">${curso}</option>`
        ).join("")}
      </select>

      <div id="especialidadContenedor"></div>
      <button id="entrarCurso" disabled>Entrar al curso</button>
    </div>
  `;

  const selectorCurso = document.getElementById("cursoEUDDE");
  const especialidadContenedor =
    document.getElementById("especialidadContenedor");
  const botonEntrar = document.getElementById("entrarCurso");

  let cursoSeleccionado = "";
  let especialidadSeleccionada = "";

  selectorCurso.addEventListener("change", () => {
    cursoSeleccionado = selectorCurso.value;
    especialidadSeleccionada = "";

    especialidadContenedor.innerHTML = "";

    if (!cursoSeleccionado) {
      botonEntrar.disabled = true;
      return;
    }

    const especialidades = cursos[cursoSeleccionado];

    if (especialidades.length > 1) {
      especialidadContenedor.innerHTML = `
        <label for="especialidadEUDDE">Especialidad:</label>
        <select id="especialidadEUDDE">
          <option value="">Selecciona tu especialidad</option>
          ${especialidades.map(item =>
            `<option value="${item}">${item}</option>`
          ).join("")}
        </select>
      `;

      document.getElementById("especialidadEUDDE")
        .addEventListener("change", (evento) => {
          especialidadSeleccionada = evento.target.value;
          botonEntrar.disabled = !especialidadSeleccionada;
        });

      botonEntrar.disabled = true;
    } else {
      especialidadSeleccionada = especialidades[0];
      botonEntrar.disabled = false;
    }
  });

  botonEntrar.addEventListener("click", () => {
    if (!cursoSeleccionado || !especialidadSeleccionada) return;

    localStorage.setItem("eudde_curso", cursoSeleccionado);
    localStorage.setItem(
      "eudde_especialidad",
      especialidadSeleccionada
    );

    mostrarCurso(cursoSeleccionado, especialidadSeleccionada);
  });
});

function mostrarCurso(curso, especialidad) {
  const contenedor = document.getElementById("selectoresCurso");

  contenedor.innerHTML = `
    <div class="curso-seleccionado">
      <h2>${curso}</h2>
      <p>Especialidad: ${especialidad}</p>
      <p>¡Ya puedes comenzar tus clases!</p>
      <button onclick="irAAsignaturas()">Ver mis asignaturas</button>
    </div>
  `;

  if (typeof irAAsignaturas === "function") {
    // La navegación se realiza con el botón.
  }
}

function irAAsignaturas() {
  const seccion = document.getElementById("asignaturas");

  if (seccion) {
    document.querySelectorAll("main section").forEach(elemento => {
      elemento.style.display = "none";
    });

    seccion.style.display = "block";
  }
}

console.log("EUDDE Campus Virtual iniciado sin registro.");
