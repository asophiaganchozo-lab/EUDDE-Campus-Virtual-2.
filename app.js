
/* =====================================================
   EUDDE CAMPUS VIRTUAL
   Archivo principal: app.js
   ===================================================== */

const cursos = {
  "Décimo EGB": {
    "General": {
      "Matemáticas": ["Ecuaciones de 2do grado", "Teorema de Pitágoras", "Funciones", "Estadística", "Repaso y aplicación matemática"],
      "Lengua y Literatura": ["El ensayo", "La novela", "Ortografía", "Comprensión lectora", "Producción de textos"],
      "Ciencias Naturales": ["El cuerpo humano", "Genética básica", "Química: tabla periódica", "El medio ambiente", "Conservación de la naturaleza"],
      "Ciencias Sociales": ["Historia del Ecuador", "Geografía", "Democracia y ciudadanía", "Diversidad cultural del Ecuador", "Derechos y responsabilidades ciudadanas"],
      "Inglés": ["Present Simple", "Past Simple", "There is / There are", "Can / Can't", "Everyday vocabulary and conversations"],
      "Informática": ["Word", "Excel", "PowerPoint", "Internet seguro", "Presentaciones"]
    }
  },

  "1.º Bachillerato": {
    "Informática": {
      "Matemáticas": ["Función", "Función afín", "Recta", "Sistema de ecuaciones", "Vectores en el plano"],
      "Física": ["MRU", "MRUV", "MCU", "MCUV", "Leyes de Newton"],
      "Lengua": ["Neoclasicismo", "Comunicación para negocios", "El ensayo argumentativo temático", "Los eufemismos", "Influencia de la globalización en el castellano"],
      "Inglés Pre-Intermediate Británico": ["Present Perfect", "Past Simple vs Past Continuous", "Used to", "Vocabulario británico: flat, lift, rubbish", "Comparatives"],
      "Emprendimiento": ["Qué es emprender", "Tipos de emprendimiento", "Idea de negocio", "Características del emprendedor", "Necesidades y oportunidades"],
      "Ética": ["Valores y ética", "Derechos humanos", "Convivencia y respeto", "Constitución del Ecuador", "Ciudadanía"],
      "Programación y Desarrollo de Software": ["Lógica y algoritmos", "Variables, condicionales y bucles", "Programación en Python", "Programación orientada a objetos", "Pruebas y depuración de programas"],
      "Diseño y Desarrollo Web": ["HTML y CSS", "JavaScript básico", "Diseño responsive", "Publicar una página web", "Estructura y navegación de sitios web"],
      "Bases de Datos": ["Modelo entidad-relación", "SQL", "Llaves primarias y foráneas", "Crear una base de datos real", "Consultas y organización de datos"],
      "Sistemas Operativos": ["Windows y Linux", "Instalación y configuración", "Gestión de archivos y usuarios", "Comandos de terminal", "Mantenimiento del sistema operativo"],
      "Redes y Conectividad": ["Tipos de redes LAN, WAN, WiFi", "Direcciones IP y DNS", "Modelo OSI y TCP/IP", "Configuración de router", "Dispositivos y medios de transmisión"],
      "Soporte Técnico": ["Partes de la computadora", "Mantenimiento preventivo y correctivo", "Instalación de programas y drivers", "Diagnóstico de fallas", "Solución de problemas técnicos"],
      "Aplicaciones Ofimáticas": ["Word", "Excel", "PowerPoint", "Google Drive y correo", "Integración de herramientas ofimáticas"],
      "Seguridad Informática": ["Virus, malware y phishing", "Contraseñas seguras y 2FA", "Copias de seguridad", "Firewall y antivirus", "Protección de datos personales"],
      "Inteligencia Artificial Aplicada": ["Qué es la IA", "ChatGPT y herramientas de IA", "Crear imágenes y textos con IA", "Uso ético de la IA", "Aplicaciones de la IA en la informática"]
    }
  },

  "2.º Bachillerato": {
    "Informática": {
      "Matemáticas": ["Función cuadrática", "Función exponencial y logarítmica", "Trigonometría", "Estadística y probabilidad", "Progresiones"],
      "Física": ["Trabajo y energía", "Potencia", "Impulso y cantidad de movimiento", "Hidrostática", "Calor y temperatura"],
      "Inglés": ["Present Perfect Continuous", "First Conditional", "Second Conditional", "Passive Voice", "Phrasal Verbs"],
      "Emprendimiento": ["Modelo Canvas", "Estudio de mercado", "Marketing y ventas", "Costos y presupuesto", "Prototipo"],
      "Especialidad Informática": ["Programación avanzada", "Desarrollo web avanzado", "Bases de Datos avanzadas", "Redes avanzadas", "Proyecto técnico"]
    },

    "Ciencias": {
      "Matemáticas": ["Función cuadrática", "Función exponencial y logarítmica", "Trigonometría", "Estadística y probabilidad", "Progresiones"],
      "Física": ["Trabajo y energía", "Potencia", "Impulso", "Hidrostática", "Calor y temperatura"],
      "Química": ["Reacciones químicas", "Balanceo de ecuaciones", "Ácidos y bases", "Tabla periódica avanzada", "Estequiometría"],
      "Biología": ["Célula", "ADN y herencia", "Ecosistemas", "Evolución", "Sistemas del cuerpo"],
      "Inglés": ["Present Perfect Continuous", "First Conditional", "Second Conditional", "Passive Voice", "Phrasal Verbs"],
      "Emprendimiento": ["Modelo Canvas", "Estudio de mercado", "Marketing", "Costos", "Prototipo"]
    },

    "Contabilidad": {
      "Matemáticas": ["Función cuadrática", "Función exponencial", "Trigonometría", "Estadística", "Progresiones"],
      "Contabilidad General": ["Activo, pasivo y patrimonio", "Libro diario", "Libro mayor", "Balance general", "Estado de resultados"],
      "Inglés": ["Present Perfect Continuous", "First Conditional", "Second Conditional", "Passive Voice", "Phrasal Verbs"],
      "Emprendimiento": ["Modelo Canvas", "Estudio de mercado", "Marketing", "Costos", "Prototipo"]
    }
  },

  "3.º Bachillerato": {
    "Informática": {
      "Matemáticas": ["Límites", "Derivadas", "Integrales básicas", "Geometría en el espacio", "Matemática financiera"],
      "Física": ["Ondas y sonido", "Óptica", "Electricidad: Ley de Ohm", "Magnetismo", "Física moderna"],
      "Inglés": ["Reported Speech", "Third Conditional", "Relative Clauses", "Writing: formal letter", "Vocabulary for work: CV e interview"],
      "Emprendimiento": ["Plan de negocios", "Finanzas y rentabilidad", "Marca y publicidad", "Emprendimiento social", "Pitch"],
      "Especialidad Informática": ["Proyecto final de software", "Desarrollo de app / web completa", "Base de datos del proyecto", "Presentación y defensa", "Pruebas y documentación del proyecto"]
    },

    "Ciencias": {
      "Matemáticas": ["Límites", "Derivadas", "Integrales", "Geometría en el espacio", "Matemática financiera"],
      "Física": ["Ondas y sonido", "Óptica", "Electricidad", "Magnetismo", "Física moderna"],
      "Química": ["Química orgánica", "pH", "Reacciones redox", "Gases", "Soluciones"],
      "Biología": ["Genética avanzada", "Biotecnología", "Salud y enfermedades", "Medio ambiente", "Proyecto de investigación"],
      "Inglés": ["Reported Speech", "Third Conditional", "Relative Clauses", "Writing: formal letter", "Vocabulary for work"],
      "Emprendimiento": ["Plan de negocios", "Finanzas", "Marca", "Emprendimiento social", "Pitch"]
    },

    "Contabilidad": {
      "Matemáticas": ["Límites", "Derivadas", "Integrales", "Geometría en el espacio", "Matemática financiera"],
      "Contabilidad Avanzada": ["Contabilidad de costos", "Inventarios", "Nómina y roles de pago", "Impuestos: IVA y Renta", "Auditoría básica"],
      "Inglés": ["Reported Speech", "Third Conditional", "Relative Clauses", "Writing: formal letter", "Vocabulary for work"],
      "Emprendimiento": ["Plan de negocios", "Finanzas", "Marca", "Emprendimiento social", "Pitch"]
    }
  }
};

/* =============== CONFIGURACIÓN =============== */

const STORAGE_KEY = "eudde_campus_progreso_v1";

let cursoActual = "Décimo EGB";
let especialidadActual = "General";
let materiaActual = null;
let moduloActual = null;

let progreso = cargarProgreso();

function cargarProgreso() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
      completados: [],
      respuestas: {},
      notas: {}
    };
  } catch {
    return { completados: [], respuestas: {}, notas: {} };
  }
}

function guardarProgreso() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progreso));
}

function escapar(texto) {
  return String(texto).replace(/[&<>"']/g, caracter => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[caracter]);
}

function claveModulo(curso, especialidad, materia, modulo) {
  return [curso, especialidad, materia, modulo].join("|");
}

function obtenerMaterias() {
  return cursos[cursoActual][especialidadActual];
}

function contarModulos() {
  return Object.values(cursos).reduce((totalCurso, especialidades) => {
    return totalCurso + Object.values(especialidades).reduce((totalEsp, materias) => {
      return totalEsp + Object.values(materias).reduce((totalMat, temas) => totalMat + temas.length, 0);
    }, 0);
  }, 0);
}

function contarCompletados() {
  return progreso.completados.length;
}

/* =============== SELECTORES =============== */

function crearSelectores() {
  const contenedor = document.getElementById("listaAsignaturas");
  if (!contenedor) return;

  let zona = document.getElementById("selectoresCurso");

  if (!zona) {
    zona = document.createElement("div");
    zona.id = "selectoresCurso";
    zona.className = "selectores-curso";
    contenedor.parentNode.insertBefore(zona, contenedor);
  }

  const especialidades = Object.keys(cursos[cursoActual]);

  zona.innerHTML = `
    <label for="selectorCurso"><strong>Selecciona tu curso:</strong></label>
    <select id="selectorCurso">
      ${Object.keys(cursos).map(curso => `
        <option value="${escapar(curso)}" ${curso === cursoActual ? "selected" : ""}>
          ${escapar(curso)}
        </option>
      `).join("")}
    </select>

    ${especialidades.length > 1 ? `
      <label for="selectorEspecialidad"><strong>Especialidad:</strong></label>
      <select id="selectorEspecialidad">
        ${especialidades.map(esp => `
          <option value="${escapar(esp)}" ${esp === especialidadActual ? "selected" : ""}>
            ${escapar(esp)}
          </option>
        `).join("")}
      </select>
    ` : `
      <p><strong>Modalidad:</strong> General</p>
    `}
  `;

  document.getElementById("selectorCurso").addEventListener("change", evento => {
    cursoActual = evento.target.value;
    especialidadActual = Object.keys(cursos[cursoActual])[0];
    materiaActual = null;
    moduloActual = null;
    actualizarCampus();
  });

  const selectorEsp = document.getElementById("selectorEspecialidad");

  if (selectorEsp) {
    selectorEsp.addEventListener("change", evento => {
      especialidadActual = evento.target.value;
      materiaActual = null;
      moduloActual = null;
      actualizarCampus();
    });
  }
}

/* =============== ASIGNATURAS =============== */

function mostrarAsignaturas() {
  const contenedor = document.getElementById("listaAsignaturas");
  if (!contenedor) return;

  const materias = obtenerMaterias();

  contenedor.innerHTML = Object.entries(materias).map(([materia, temas]) => {
    const cantidad = temas.length;
    const terminados = temas.filter(tema =>
      progreso.completados.includes(
        claveModulo(cursoActual, especialidadActual, materia, tema)
      )
    ).length;

    return `
      <article class="asignatura">
        <h3>${escapar(materia)}</h3>
        <p>${cantidad} módulos de aprendizaje</p>
        <p>${terminados} de ${cantidad} módulos completados</p>
        <button onclick="abrirMateria('${encodeURIComponent(materia)}')">
          Entrar al aula
        </button>
      </article>
    `;
  }).join("");
}

function abrirMateria(materiaCodificada) {
  materiaActual = decodeURIComponent(materiaCodificada);
  moduloActual = null;
  mostrarModulos();
  document.getElementById("contenidoAula")?.scrollIntoView({ behavior: "smooth" });
}

function mostrarModulos() {
  const aula = document.getElementById("contenidoAula");
  if (!aula || !materiaActual) return;

  const temas = obtenerMaterias()[materiaActual];

  aula.innerHTML = `
    <h2>${escapar(materiaActual)}</h2>
    <p>${escapar(cursoActual)} · ${escapar(especialidadActual)}</p>
    <h3>Módulos de aprendizaje</h3>
    <div class="modulos-lista">
      ${temas.map((tema, indice) => {
        const terminado = progreso.completados.includes(
          claveModulo(cursoActual, especialidadActual, materiaActual, tema)
        );

        return `
          <article class="modulo">
            <h4>Módulo ${indice + 1}: ${escapar(tema)}</h4>
            <p>${terminado ? "Completado" : "Pendiente"}</p>
            <button onclick="abrirModulo('${encodeURIComponent(tema)}')">
              Ver contenido
            </button>
          </article>
        `;
      }).join("")}
    </div>
  `;
}

function abrirModulo(temaCodificado) {
  moduloActual = decodeURIComponent(temaCodificado);
  mostrarContenidoModulo();
}

/* =============== CONTENIDO EDUCATIVO =============== */

function obtenerConcepto(materia, tema) {
  const m = materia.toLowerCase();
  const t = tema.toLowerCase();

  if (t.includes("pitágoras")) {
    return "El teorema de Pitágoras permite calcular un lado de un triángulo rectángulo cuando conocemos los otros dos. Relaciona los catetos con la hipotenusa.";
  }

  if (t.includes("ecuaciones")) {
    return "Una ecuación es una igualdad matemática que contiene una o más incógnitas. Resolverla consiste en encontrar el valor que hace verdadera la igualdad.";
  }

  if (t.includes("función") || t.includes("recta") || t.includes("límites") || t.includes("derivadas") || t.includes("integrales")) {
    return "Este tema pertenece al estudio de las relaciones y operaciones matemáticas. Es importante identificar los datos, aplicar las propiedades correspondientes y desarrollar cada procedimiento paso a paso.";
  }

  if (t.includes("mru") || t.includes("mruv") || t.includes("mcu") || t.includes("mcuv")) {
    return "El movimiento describe cómo cambia la posición de un cuerpo con el tiempo. Para estudiarlo se utilizan magnitudes como distancia, desplazamiento, velocidad y aceleración.";
  }

  if (t.includes("newton")) {
    return "Las leyes de Newton explican cómo se relacionan las fuerzas con el movimiento de los cuerpos. Permiten comprender la inercia, la aceleración y la interacción entre objetos.";
  }

  if (t.includes("tabla periódica")) {
    return "La tabla periódica organiza los elementos químicos según su número atómico y sus propiedades. Sus filas se llaman períodos y sus columnas, grupos.";
  }

  if (t.includes("célula")) {
    return "La célula es la unidad básica estructural y funcional de los seres vivos. Puede presentar diferentes formas y estructuras según la función que cumple.";
  }

  if (t.includes("adn") || t.includes("genética") || t.includes("herencia")) {
    return "La genética estudia cómo se transmiten las características hereditarias. El ADN contiene información que participa en el desarrollo y funcionamiento de los seres vivos.";
  }

  if (t.includes("html") || t.includes("css") || t.includes("javascript")) {
    return "El desarrollo web utiliza diferentes tecnologías. HTML organiza el contenido, CSS define su presentación y JavaScript permite incorporar interactividad.";
  }

  if (t.includes("python") || t.includes("programación") || t.includes("algoritmos")) {
    return "La programación consiste en crear instrucciones para que una computadora realice tareas. Los algoritmos ayudan a organizar los pasos necesarios para resolver un problema.";
  }

  if (t.includes("base de datos") || t.includes("sql") || t.includes("llaves")) {
    return "Una base de datos permite almacenar, organizar y consultar información. Sus tablas y relaciones ayudan a mantener los datos estructurados.";
  }

  if (t.includes("redes") || t.includes("ip") || t.includes("router") || t.includes("osi")) {
    return "Las redes informáticas conectan dispositivos para compartir información y recursos. Utilizan protocolos y direcciones que permiten la comunicación.";
  }

  if (t.includes("seguridad") || t.includes("malware") || t.includes("phishing") || t.includes("virus")) {
    return "La seguridad informática reúne medidas para proteger equipos, cuentas y datos frente a riesgos digitales. La prevención y el uso responsable de la tecnología son fundamentales.";
  }

  if (t.includes("contabilidad") || t.includes("activo") || t.includes("pasivo") || t.includes("libro")) {
    return "La contabilidad permite registrar y organizar las operaciones económicas de una entidad. Sus documentos ayudan a conocer su situación financiera.";
  }

  if (t.includes("inglés") || m.includes("inglés")) {
    return "En este tema aprenderás vocabulario, estructuras gramaticales y expresiones del idioma inglés. Practicar ejemplos ayuda a mejorar la comprensión y comunicación.";
  }

  if (t.includes("emprendimiento") || t.includes("negocio") || t.includes("canvas") || t.includes("marketing")) {
    return "El emprendimiento consiste en identificar oportunidades y desarrollar ideas que puedan convertirse en proyectos o negocios. Requiere planificación, creatividad y organización.";
  }

  if (t.includes("ensayo") || t.includes("novela") || t.includes("ortografía") || t.includes("lectora")) {
    return "Este tema permite desarrollar habilidades de lectura, escritura y comunicación. Es importante comprender las ideas principales y expresar opiniones de forma clara.";
  }

  return `En este módulo estudiarás ${tema.toLowerCase()}. Aprenderás sus características principales, su importancia, sus elementos y cómo aplicarlo en situaciones académicas y cotidianas.`;
}

function obtenerEjemplo(materia, tema) {
  const m = materia.toLowerCase();
  const t = tema.toLowerCase();

  if (t.includes("pitágoras")) {
    return "Ejemplo: si los catetos miden 3 cm y 4 cm, aplicamos a² + b² = c². Entonces 3² + 4² = 9 + 16 = 25. La hipotenusa es √25 = 5 cm.";
  }

  if (t.includes("ecuaciones")) {
    return "Ejemplo sencillo: x + 5 = 12. Restamos 5 a ambos lados: x = 12 - 5. Resultado: x = 7.";
  }

  if (t.includes("función afín")) {
    return "Ejemplo: y = 2x + 3. Si x = 1, reemplazamos: y = 2(1) + 3 = 5. El punto obtenido es (1, 5).";
  }

  if (t.includes("mru")) {
    return "Ejemplo: un vehículo recorre 100 metros en 20 segundos. Velocidad = distancia / tiempo = 100 / 20 = 5 m/s.";
  }

  if (t.includes("ley de ohm")) {
    return "Ejemplo: si tenemos un voltaje de 12 V y una resistencia de 4 Ω, aplicamos I = V/R. I = 12/4 = 3 A.";
  }

  if (t.includes("excel")) {
    return "Ejemplo: podemos escribir varios valores en una columna y utilizar =SUMA(A1:A5) para obtener el total.";
  }

  if (t.includes("html")) {
    return "Ejemplo: podemos crear un título en una página utilizando la etiqueta <h1>Mi primera página</h1>.";
  }

  if (t.includes("sql")) {
    return "Ejemplo: una consulta SELECT nombre FROM estudiantes permite solicitar los nombres guardados en una tabla llamada estudiantes.";
  }

  if (t.includes("present simple")) {
    return "Ejemplo: She studies English every day. Se utiliza el presente simple para expresar rutinas o hábitos.";
  }

  if (t.includes("activo, pasivo")) {
    return "Ejemplo: el dinero en caja es un activo. Una deuda pendiente representa un pasivo. La diferencia entre activos y pasivos forma el patrimonio.";
  }

  if (m.includes("matemáticas") || m.includes("física")) {
    return "Ejemplo: identifica los datos del ejercicio, escribe la fórmula correspondiente, sustituye los valores y realiza las operaciones. No olvides incluir las unidades cuando sean necesarias.";
  }

  return `Ejemplo de aplicación: imagina una situación relacionada con ${tema.toLowerCase()}. Identifica sus elementos principales, explica cómo se relacionan y describe cómo utilizarías lo aprendido para resolverla.`;
}

function mostrarContenidoModulo() {
  const aula = document.getElementById("contenidoAula");
  if (!aula || !materiaActual || !moduloActual) return;

  const clave = claveModulo(cursoActual, especialidadActual, materiaActual, moduloActual);
  const terminado = progreso.completados.includes(clave);
  const esExacto = ["matemáticas", "física"].includes(materiaActual.toLowerCase());

  const busqueda = encodeURIComponent(`${materiaActual} ${moduloActual} explicación educativa`);
  const concepto = obtenerConcepto(materiaActual, moduloActual);
  const ejemplo = obtenerEjemplo(materiaActual, moduloActual);

  aula.innerHTML = `
    <button onclick="mostrarModulos()">← Volver a los módulos</button>

    <h2>${escapar(moduloActual)}</h2>
    <p><strong>${escapar(cursoActual)} · ${escapar(especialidadActual)}</strong></p>

    <section class="leccion">
      <h3>1. Concepto del tema</h3>
      <p>${escapar(concepto)}</p>
    </section>

    <section class="leccion">
      <h3>2. Ejemplo explicado</h3>
      <p>${escapar(ejemplo)}</p>
    </section>

    <section class="leccion">
      <h3>3. Recurso educativo</h3>
      <p>Consulta videos y explicaciones para reforzar lo aprendido.</p>
      <a href="https://www.youtube.com/results?search_query=${busqueda}"
         target="_blank" rel="noopener noreferrer">
        Buscar video educativo del tema
      </a>
    </section>

    <section class="leccion">
      <h3>4. Actividad práctica</h3>
      <p>Realiza una actividad relacionada con el tema y explica con tus propias palabras lo que aprendiste.</p>
      ${esExacto ? `
        <p><strong>Recuerda:</strong> resuelve los ejercicios en tu cuaderno u hoja, escribe el procedimiento completo y después registra tus respuestas.</p>
      ` : ""}
      <textarea id="respuestaActividad" rows="5"
        placeholder="Escribe aquí tu actividad...">${escapar(progreso.respuestas[clave] || "")}</textarea>
      <button onclick="guardarRespuesta('${encodeURIComponent(clave)}')">
        Guardar actividad
      </button>
    </section>

    <section class="leccion">
      <h3>5. Evaluación del módulo</h3>
      <p>Responde las siguientes preguntas con tus propias palabras:</p>
      <ol>
        <li>¿Qué significa ${escapar(moduloActual)}?</li>
        <li>¿Cuáles son sus características principales?</li>
        <li>¿Qué elementos o partes importantes tiene este tema?</li>
        <li>¿Cómo se aplica en una situación de la vida real?</li>
        <li>Escribe un ejemplo y explica cómo lo resolverías o desarrollarías.</li>
      </ol>
      <p>La evaluación queda pendiente de calificación. Tus respuestas pueden guardarse para su revisión.</p>
      <textarea id="respuestaEvaluacion" rows="6"
        placeholder="Escribe tus respuestas...">${escapar(progreso.respuestas[clave + "|evaluacion"] || "")}</textarea>
      <button onclick="guardarEvaluacion('${encodeURIComponent(clave)}')">
        Guardar evaluación
      </button>
    </section>

    <section class="motivacion">
      <h3>¡Tú puedes!</h3>
      <p>Cada tema que aprendes te acerca a tus metas. Sigue esforzándote y confía en tus capacidades.</p>
    </section>

    <button onclick="marcarCompletado('${encodeURIComponent(clave)}')"
      ${terminado ? "disabled" : ""}>
      ${terminado ? "Módulo completado ✓" : "Marcar módulo como completado"}
    </button>
  `;
}

/* =============== ACTIVIDADES Y RESPUESTAS =============== */

function guardarRespuesta(claveCodificada) {
  const clave = decodeURIComponent(claveCodificada);
  const campo = document.getElementById("respuestaActividad");
  if (!campo) return;

  progreso.respuestas[clave] = campo.value;
  guardarProgreso();
  alert("Actividad guardada correctamente.");
}

function guardarEvaluacion(claveCodificada) {
  const clave = decodeURIComponent(claveCodificada);
  const campo = document.getElementById("respuestaEvaluacion");
  if (!campo) return;

  progreso.respuestas[clave + "|evaluacion"] = campo.value;
  guardarProgreso();
  alert("Evaluación guardada para revisión.");
}

function marcarCompletado(claveCodificada) {
  const clave = decodeURIComponent(claveCodificada);

  if (!progreso.completados.includes(clave)) {
    progreso.completados.push(clave);
  }

  guardarProgreso();
  actualizarCampus();
  materiaActual = clave.split("|")[2];
  moduloActual = clave.split("|")[3];
  mostrarContenidoModulo();
  alert("¡Excelente! Tu módulo se marcó como completado.");
}

/* =============== PANEL DE PROGRESO =============== */

function actualizarResumen() {
  const totalMaterias = Object.values(cursos).reduce((total, especialidades) => {
    return total + Object.values(especialidades).reduce(
      (suma, materias) => suma + Object.keys(materias).length, 0
    );
  }, 0);

  const totalMod = contarModulos();

  const asignaturas = document.getElementById("totalAsignaturas");
  const modulos = document.getElementById("totalModulos");
  const completados = document.getElementById("modulosCompletados");
  const promedio = document.getElementById("promedioGeneral");

  if (asignaturas) asignaturas.textContent = totalMaterias;
  if (modulos) modulos.textContent = totalMod;
  if (completados) completados.textContent = contarCompletados();

  const notas = Object.values(progreso.notas);
  if (promedio) {
    promedio.textContent = notas.length
      ? (notas.reduce((a, b) => a + Number(b), 0) / notas.length).toFixed(2) + "/10"
      : "Pendiente";
  }
}

function mostrarNotas() {
  const tabla = document.getElementById("tablaNotas");
  if (!tabla) return;

  const notas = Object.entries(progreso.notas);

  tabla.innerHTML = `
    <h3>Registro de calificaciones</h3>
    ${notas.length ? `
      <table>
        <thead>
          <tr><th>Evaluación</th><th>Nota</th></tr>
        </thead>
        <tbody>
          ${notas.map(([nombre, nota]) => `
            <tr><td>${escapar(nombre)}</td><td>${Number(nota).toFixed(2)}/10</td></tr>
          `).join("")}
        </tbody>
      </table>
    ` : "<p>Aún no tienes calificaciones registradas.</p>"}
    <p>Las notas oficiales deben ser registradas por el docente o por el sistema de calificación autorizado.</p>
  `;
}

/* =============== DIPLOMAS =============== */

function mostrarDiplomas() {
  const contenedor = document.getElementById("listaDiplomas");
  if (!contenedor) return;

  contenedor.innerHTML = `
    <h3>Certificados y diplomas</h3>
    <p>Los certificados estarán disponibles cuando se conecte el sistema de estudiantes, las calificaciones y los requisitos de aprobación.</p>
    <p>Tu avance actual es de ${contarCompletados()} módulos completados.</p>
  `;
}

/* =============== NAVEGACIÓN =============== */

function irAAsignaturas() {
  document.getElementById("listaAsignaturas")?.scrollIntoView({
    behavior: "smooth"
  });
}

function actualizarCampus() {
  crearSelectores();
  mostrarAsignaturas();
  actualizarResumen();
  mostrarNotas();
  mostrarDiplomas();

  const aula = document.getElementById("contenidoAula");
  if (aula) {
    aula.innerHTML = `
      <h2>Bienvenido a tu aula virtual</h2>
      <p>Selecciona una asignatura y entra a sus módulos para comenzar a aprender.</p>
    `;
  }
}

/* =============== INICIO =============== */

document.addEventListener("DOMContentLoaded", () => {
  actualizarCampus();
});

/* Funciones disponibles para los botones del HTML */
window.irAAsignaturas = irAAsignaturas;
window.abrirMateria = abrirMateria;
window.abrirModulo = abrirModulo;
window.mostrarModulos = mostrarModulos;
window.guardarRespuesta = guardarRespuesta;
window.guardarEvaluacion = guardarEvaluacion;
window.marcarCompletado = marcarCompletado;
