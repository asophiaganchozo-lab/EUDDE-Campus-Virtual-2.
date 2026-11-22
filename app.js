
// ==========================================
// EUDDE CAMPUS VIRTUAL
// Cursos, materias, módulos y evaluaciones
// ==========================================

const cursos = {
    "Décimo": {
        especialidades: {
            "General": [
                "Matemática", "Lengua y Literatura", "Inglés",
                "Biología", "Física", "Química", "Historia",
                "Ciudadanía", "Educación Física", "Educación Cultural y Artística",
                "Tecnología e Informática"
            ]
        }
    },

    "Primero de Bachillerato": {
        especialidades: {
            "Ciencias": [
                "Matemática", "Física", "Química", "Biología",
                "Lengua y Literatura", "Inglés", "Historia",
                "Filosofía", "Ciudadanía", "Educación Física",
                "Emprendimiento y Gestión", "TIC"
            ],
            "Informática": [
                "Matemática", "Física", "Química", "Biología",
                "Lengua y Literatura", "Inglés", "Historia",
                "Filosofía", "Ciudadanía", "Educación Física",
                "Emprendimiento", "TIC",
                "Seguridad Informática",
                "Cultura y Conciencia en Ciberseguridad",
                "Pensamiento Computacional",
                "Manejo de Incidentes y Recuperación Informática",
                "Ética, Legislación y Ciudadanía Digital",
                "Módulo Práctico/Experimental", "PPE"
            ]
        }
    },

    "Segundo de Bachillerato": {
        especialidades: {
            "Contabilidad": [
                "Matemática", "Lengua y Literatura", "Inglés",
                "Historia", "Filosofía", "Ciudadanía",
                "Contabilidad General", "Contabilidad de Costos",
                "Matemática Financiera", "Tributación",
                "Gestión Administrativa", "Emprendimiento"
            ],
            "Ciencias": [
                "Matemática", "Física", "Química", "Biología",
                "Lengua y Literatura", "Inglés", "Historia",
                "Filosofía", "Ciudadanía", "Educación Física",
                "Emprendimiento y Gestión", "TIC"
            ],
            "Informática": [
                "Matemática", "Física", "Química", "Biología",
                "Lengua y Literatura", "Inglés", "Historia",
                "Filosofía", "Ciudadanía", "TIC",
                "Programación", "Bases de Datos",
                "Redes Informáticas", "Seguridad Informática",
                "Sistemas Operativos", "Desarrollo Web",
                "Soporte Técnico", "Emprendimiento"
            ]
        }
    },

    "Tercero de Bachillerato": {
        especialidades: {
            "Contabilidad": [
                "Matemática", "Lengua y Literatura", "Inglés",
                "Historia", "Ciudadanía", "Contabilidad General",
                "Contabilidad de Costos", "Matemática Financiera",
                "Tributación", "Estados Financieros",
                "Gestión Empresarial", "Emprendimiento"
            ],
            "Ciencias": [
                "Matemática", "Física", "Química", "Biología",
                "Lengua y Literatura", "Inglés", "Historia",
                "Filosofía", "Ciudadanía", "Educación Física",
                "Emprendimiento y Gestión", "TIC"
            ],
            "Informática": [
                "Matemática", "Lengua y Literatura", "Inglés",
                "Física", "Historia", "Ciudadanía",
                "Programación Avanzada", "Bases de Datos",
                "Redes Informáticas", "Ciberseguridad",
                "Desarrollo de Aplicaciones", "Desarrollo Web",
                "Sistemas Operativos", "Soporte Técnico",
                "Proyecto Informático", "Emprendimiento"
            ]
        }
    }
};

// ==========================================
// TEMAS DE LOS CINCO MÓDULOS POR MATERIA
// ==========================================

const temasMateria = {
    "Matemática": [
        "Números reales y operaciones",
        "Expresiones algebraicas",
        "Ecuaciones y sistemas",
        "Funciones y representación gráfica",
        "Geometría, vectores y resolución de problemas"
    ],
    "Física": [
        "Magnitudes físicas y unidades",
        "Movimiento rectilíneo",
        "Leyes de Newton y fuerzas",
        "Trabajo, energía y potencia",
        "Electricidad y fenómenos físicos"
    ],
    "Química": [
        "Materia y propiedades",
        "Estructura del átomo",
        "Tabla periódica y periodicidad",
        "Enlaces y compuestos químicos",
        "Reacciones y cálculos químicos"
    ],
    "Biología": [
        "Organización celular",
        "Metabolismo y energía",
        "Genética y herencia",
        "Evolución y biodiversidad",
        "Ecología y ambiente"
    ],
    "Lengua y Literatura": [
        "Comunicación y lenguaje",
        "Géneros y tipos de textos",
        "Comprensión y análisis crítico",
        "Argumentación y escritura",
        "Literatura y recursos expresivos"
    ],
    "Inglés": [
        "Vocabulary and communication",
        "Present and past tenses",
        "Future forms and modal verbs",
        "Reading comprehension",
        "Writing and speaking"
    ],
    "Historia": [
        "Civilizaciones y sociedades antiguas",
        "Cambios políticos y sociales",
        "Conquista y colonización",
        "Independencia y formación republicana",
        "Procesos históricos contemporáneos"
    ],
    "Filosofía": [
        "Origen del pensamiento filosófico",
        "Conocimiento y verdad",
        "Pensamiento crítico",
        "Ética y problemas morales",
        "Corrientes y pensadores filosóficos"
    ],
    "Ciudadanía": [
        "Derechos humanos",
        "Estado y democracia",
        "Constitución y participación",
        "Responsabilidades ciudadanas",
        "Diversidad e interculturalidad"
    ],
    "Contabilidad": [
        "Fundamentos contables",
        "Ecuación contable y cuentas",
        "Libro diario y libro mayor",
        "Balance y estados financieros",
        "Análisis de operaciones contables"
    ],
    "Contabilidad General": [
        "Principios y ciclo contable",
        "Plan de cuentas",
        "Registro de transacciones",
        "Balance de comprobación",
        "Estados financieros"
    ],
    "Contabilidad de Costos": [
        "Conceptos de costos",
        "Clasificación de costos",
        "Costos directos e indirectos",
        "Costos de producción",
        "Cálculo del costo unitario"
    ],
    "Matemática Financiera": [
        "Porcentajes y proporciones",
        "Interés simple",
        "Interés compuesto",
        "Descuentos y equivalencias",
        "Aplicaciones financieras"
    ],
    "Tributación": [
        "Conceptos tributarios",
        "Obligaciones del contribuyente",
        "Impuesto al valor agregado",
        "Comprobantes y registros",
        "Ejercicios tributarios"
    ],
    "Programación": [
        "Lógica y algoritmos",
        "Variables y tipos de datos",
        "Condicionales",
        "Bucles y estructuras repetitivas",
        "Funciones y resolución de problemas"
    ],
    "Programación Avanzada": [
        "Diseño de algoritmos",
        "Estructuras de datos",
        "Programación modular",
        "Manejo de errores",
        "Desarrollo de proyectos"
    ],
    "Bases de Datos": [
        "Conceptos de bases de datos",
        "Modelos y entidades",
        "Tablas y relaciones",
        "Consultas SQL",
        "Integridad y administración de datos"
    ],
    "Redes Informáticas": [
        "Fundamentos de redes",
        "Modelos y protocolos",
        "Direcciones IP",
        "Dispositivos de red",
        "Configuración y diagnóstico"
    ],
    "Seguridad Informática": [
        "Principios de seguridad",
        "Amenazas y vulnerabilidades",
        "Control de acceso",
        "Protección de redes y datos",
        "Gestión de incidentes"
    ],
    "Ciberseguridad": [
        "Principios de ciberseguridad",
        "Ingeniería social",
        "Protección de información",
        "Autenticación y privacidad",
        "Prevención de amenazas"
    ],
    "Desarrollo Web": [
        "Estructura de páginas HTML",
        "Diseño con CSS",
        "Programación con JavaScript",
        "Formularios e interactividad",
        "Proyecto de sitio web"
    ],
    "Desarrollo de Aplicaciones": [
        "Análisis de necesidades",
        "Diseño de interfaces",
        "Lógica de programación",
        "Pruebas de funcionamiento",
        "Creación de aplicaciones"
    ],
    "Sistemas Operativos": [
        "Conceptos de sistemas operativos",
        "Administración de archivos",
        "Procesos y memoria",
        "Usuarios y permisos",
        "Mantenimiento del sistema"
    ],
    "Soporte Técnico": [
        "Componentes de un computador",
        "Diagnóstico de fallas",
        "Mantenimiento preventivo",
        "Mantenimiento correctivo",
        "Documentación técnica"
    ],
    "Emprendimiento": [
        "Identificación de oportunidades",
        "Modelo de negocio",
        "Planificación de proyectos",
        "Costos y presupuestos",
        "Presentación de propuestas"
    ],
    "TIC": [
        "Tecnologías de información",
        "Hardware y software",
        "Herramientas digitales",
        "Redes y comunicación",
        "Uso responsable de la tecnología"
    ],
    "default": [
        "Conceptos fundamentales",
        "Elementos y características",
        "Análisis y aplicación",
        "Resolución de situaciones",
        "Proyecto práctico"
    ]
};

// ==========================================
// BANCO DE PREGUNTAS POR ÁREA
// ==========================================

const preguntasArea = {
    matematica: [
        ["Si 3x - 7 = 14, ¿cuánto vale x?", ["5", "7", "9"], 1],
        ["¿Cuál es la pendiente de y = 4x - 3?", ["-3", "4", "3"], 1],
        ["¿Cuál es el resultado de (2x)(3x²)?", ["6x³", "5x²", "6x²"], 0],
        ["¿Cuánto es el 15 % de 240?", ["24", "36", "40"], 1],
        ["¿Cuál es la raíz cuadrada de 196?", ["12", "13", "14"], 2]
    ],
    fisica: [
        ["Un móvil recorre 120 m en 10 s. ¿Cuál es su rapidez media?", ["12 m/s", "10 m/s", "1200 m/s"], 0],
        ["¿Cuál es la unidad de fuerza en el SI?", ["Julio", "Newton", "Watt"], 1],
        ["¿Qué establece la ley de inercia?", ["Todo cuerpo mantiene su estado si no actúa una fuerza neta", "La energía desaparece", "La masa cambia siempre"], 0],
        ["Si m = 5 kg y a = 2 m/s², ¿cuál es la fuerza?", ["2,5 N", "7 N", "10 N"], 2],
        ["¿En qué unidad se mide la energía?", ["Julio", "Pascal", "Amperio"], 0]
    ],
    quimica: [
        ["¿Qué determina el número atómico?", ["Número de protones", "Número de neutrones", "Número de niveles"], 0],
        ["¿Qué tipo de enlace implica transferencia de electrones?", ["Covalente", "Iónico", "Metálico"], 1],
        ["¿Cuál es el símbolo químico del sodio?", ["S", "So", "Na"], 2],
        ["¿Qué indica una ecuación química balanceada?", ["Conservación de átomos", "Desaparición de elementos", "Cambio de protones"], 0],
        ["¿Cuál es el pH de una solución neutra a 25 °C?", ["0", "7", "14"], 1]
    ],
    biologia: [
        ["¿Qué orgánulo participa directamente en la producción de ATP?", ["Mitocondria", "Ribosoma", "Lisosoma"], 0],
        ["¿Qué molécula almacena la información hereditaria?", ["Glucosa", "ADN", "Lípido"], 1],
        ["¿Qué proceso produce gametos?", ["Mitosis", "Meiosis", "Fotosíntesis"], 1],
        ["¿Qué representa un gen?", ["Un segmento de ADN con información hereditaria", "Una célula completa", "Un tejido"], 0],
        ["¿Qué organismos producen materia orgánica mediante fotosíntesis?", ["Productores", "Consumidores", "Descomponedores"], 0]
    ],
    informatica: [
        ["¿Qué estructura permite repetir instrucciones en un algoritmo?", ["Bucle", "Variable", "Comentario"], 0],
        ["¿Qué lenguaje se utiliza para consultar bases de datos relacionales?", ["SQL", "HTML", "CSS"], 0],
        ["¿Qué función cumple una dirección IP?", ["Identificar un dispositivo en una red", "Almacenar archivos", "Enfriar el procesador"], 0],
        ["¿Qué propiedad ayuda a proteger la confidencialidad?", ["Control de acceso", "Compartir contraseñas", "Desactivar permisos"], 0],
        ["¿Qué etiqueta HTML representa un enlace?", ["<p>", "<a>", "<h1>"], 1]
    ],
    contabilidad: [
        ["¿Cuál es la ecuación contable fundamental?", ["Activo = Pasivo + Patrimonio", "Activo = Ingreso - Gasto", "Pasivo = Activo + Patrimonio"], 0],
        ["¿Qué representa el activo?", ["Recursos y derechos de la entidad", "Solo las deudas", "Únicamente las ganancias"], 0],
        ["¿Qué registra el libro diario?", ["Transacciones en orden cronológico", "Solo inventarios finales", "Únicamente presupuestos"], 0],
        ["Si los activos son $8.000 y los pasivos $3.000, ¿cuál es el patrimonio?", ["$11.000", "$5.000", "$3.000"], 1],
        ["¿Qué es un costo directo?", ["Se identifica con un producto o servicio", "No tiene relación con la producción", "Es siempre un impuesto"], 0]
    ],
    lengua: [
        ["¿Qué caracteriza a una tesis argumentativa?", ["Presenta una postura que se defiende con razones", "Enumera personajes", "Solo describe objetos"], 0],
        ["¿Qué función cumple un conector causal?", ["Expresa una causa", "Indica una comparación física", "Señala una pregunta"], 0],
        ["¿Qué es una inferencia lectora?", ["Una conclusión obtenida a partir de pistas del texto", "Una copia literal", "Un título"], 0],
        ["¿Qué diferencia una fuente primaria?", ["Aporta información directa del hecho o época", "Siempre es una opinión anónima", "Es un resumen sin autor"], 0],
        ["¿Qué recurso utiliza una metáfora?", ["Una relación figurada entre ideas", "Una operación matemática", "Una cita legal"], 0]
    ],
    ingles: [
        ["Choose the correct option: If I had more time, I ___ another course.", ["will take", "would take", "take"], 1],
        ["Choose the correct passive form: The report ___ yesterday.", ["was completed", "complete", "has completing"], 0],
        ["What does 'although' express?", ["Contrast", "Cause", "Addition"], 0],
        ["Choose the correct sentence.", ["She has studied English for two years.", "She have studied English for two years.", "She studying English for two years."], 0],
        ["What is the past participle of 'write'?", ["Wrote", "Written", "Writing"], 1]
    ],
    sociales: [
        ["¿Qué principio caracteriza a un Estado democrático?", ["Participación y respeto a los derechos", "Concentración absoluta del poder", "Ausencia de leyes"], 0],
        ["¿Qué es una fuente histórica primaria?", ["Un documento o testimonio de la época estudiada", "Una opinión actual sin evidencia", "Un resumen escolar"], 0],
        ["¿Qué significa soberanía?", ["Capacidad de un pueblo para decidir su organización política", "Dependencia total de otro Estado", "Ausencia de territorio"], 0],
        ["¿Qué promueve la interculturalidad?", ["Diálogo y respeto entre culturas", "Imposición de una sola cultura", "Discriminación"], 0],
        ["¿Qué permite analizar un proceso histórico?", ["Sus causas, desarrollo y consecuencias", "Solo memorizar una fecha", "Ignorar el contexto"], 0]
    ],
    general: [
        ["¿Qué permite analizar críticamente una información?", ["Contrastar evidencias y fuentes", "Aceptar todo sin revisar", "Compartirla inmediatamente"], 0],
        ["¿Qué debe tener una conclusión académica?", ["Relación con los resultados y argumentos", "Ideas sin relación", "Información inventada"], 0],
        ["¿Qué es una variable en una investigación?", ["Una característica que puede cambiar", "Una conclusión definitiva", "Una bibliografía"], 0],
        ["¿Para qué sirve una fuente confiable?", ["Respaldar información verificable", "Evitar investigar", "Reemplazar el análisis"], 0],
        ["¿Qué demuestra un trabajo bien fundamentado?", ["Uso de razones y evidencias", "Solo opiniones", "Ausencia de fuentes"], 0]
    ]
};

// ==========================================
// FUNCIONES DE LA PLATAFORMA
// ==========================================

let cursoElegido = "";
let especialidadElegida = "";
let materiaElegida = "";

const intentos = JSON.parse(localStorage.getItem("euddeIntentos") || "{}");
const completados = JSON.parse(localStorage.getItem("euddeCompletados") || "{}");

function guardarDatos() {
    localStorage.setItem("euddeIntentos", JSON.stringify(intentos));
    localStorage.setItem("euddeCompletados", JSON.stringify(completados));
}

function irAAsignaturas() {
    document.getElementById("asignaturas").scrollIntoView({ behavior: "smooth" });
}

function mostrarAsignaturas() {
    const zona = document.getElementById("listaAsignaturas");

    zona.innerHTML = `
        <div class="selector-campus">
            <h3>Selecciona tu curso</h3>
            <select id="selectorCurso" onchange="seleccionarCurso(this.value)">
                <option value="">Elige un curso</option>
                ${Object.keys(cursos).map(c => `<option value="${c}">${c}</option>`).join("")}
            </select>
            <div id="zonaEspecialidad"></div>
            <div id="zonaMaterias"></div>
        </div>
    `;

    document.getElementById("totalAsignaturas").textContent = "—";
    document.getElementById("totalModulos").textContent = "—";
    actualizarProgreso();
}

function seleccionarCurso(curso) {
    cursoElegido = curso;
    especialidadElegida = "";
    materiaElegida = "";

    const zona = document.getElementById("zonaEspecialidad");
    const materias = document.getElementById("zonaMaterias");

    materias.innerHTML = "";

    if (!curso) {
        zona.innerHTML = "";
        return;
    }

    const opciones = Object.keys(cursos[curso].especialidades);

    if (opciones.length === 1) {
        especialidadElegida = opciones[0];
        zona.innerHTML = `<p><strong>Curso:</strong> ${curso} — General</p>`;
        mostrarMaterias();
        return;
    }

    zona.innerHTML = `
        <h3>Selecciona tu especialidad</h3>
        <select id="selectorEspecialidad" onchange="seleccionarEspecialidad(this.value)">
            <option value="">Elige una especialidad</option>
            ${opciones.map(e => `<option value="${e}">${e}</option>`).join("")}
        </select>
    `;
}

function seleccionarEspecialidad(especialidad) {
    especialidadElegida = especialidad;
    materiaElegida = "";
    mostrarMaterias();
}

function mostrarMaterias() {
    if (!cursoElegido || !especialidadElegida) return;

    const materias = cursos[cursoElegido].especialidades[especialidadElegida];

    document.getElementById("totalAsignaturas").textContent = materias.length;
    document.getElementById("totalModulos").textContent = materias.length * 5;

    document.getElementById("zonaMaterias").innerHTML = `
        <h3>Materias de ${cursoElegido} — ${especialidadElegida}</h3>
        <div class="lista-asignaturas">
            ${materias.map((materia, i) => `
                <article class="asignatura">
                    <h3>${materia}</h3>
                    <p>5 módulos de aprendizaje</p>
                    <p>Clases, actividades y evaluaciones.</p>
                    <button onclick="abrirAsignatura(${i})">Entrar al aula</button>
                </article>
            `).join("")}
        </div>
    `;

    actualizarProgreso();
}

function categoriaMateria(materia) {
    if (/matemática|matematica/i.test(materia)) return "matematica";
    if (/física|fisica/i.test(materia)) return "fisica";
    if (/química|quimica/i.test(materia)) return "quimica";
    if (/biología|biologia/i.test(materia)) return "biologia";
    if (/inglés|ingles/i.test(materia)) return "ingles";
    if (/lengua|literatura/i.test(materia)) return "lengua";
    if (/contabilidad|tributación|tributacion|financiera|costos|estados financieros/i.test(materia)) return "contabilidad";
    if (/informática|informatica|programación|programacion|bases de datos|redes|seguridad|ciberseguridad|desarrollo|sistemas operativos|soporte|TIC/i.test(materia)) return "informatica";
    if (/historia|ciudadanía|ciudadania|filosofía|filosofia/i.test(materia)) return "sociales";
    return "general";
}

function obtenerTemas(materia) {
    return temasMateria[materia] || temasMateria.default;
}

function claveModulo(materia, modulo) {
    return `${cursoElegido}|${especialidadElegida}|${materia}|${modulo}`;
}

function abrirAsignatura(indice) {
    const materias = cursos[cursoElegido].especialidades[especialidadElegida];
    materiaElegida = materias[indice];

    const temas = obtenerTemas(materiaElegida);
    const zona = document.getElementById("contenidoAula");

    zona.innerHTML = `
        <h2>${materiaElegida}</h2>
        <p><strong>${cursoElegido}</strong> — ${especialidadElegida}</p>
        <p>Selecciona uno de los cinco módulos para comenzar.</p>
        ${temas.map((tema, i) => {
            const clave = claveModulo(materiaElegida, i);
            const registro = intentos[clave] || { cantidad: 0, mejorNota: null };
            return `
                <details>
                    <summary>Módulo ${i + 1}: ${tema}</summary>
                    <h3>Clase: ${tema}</h3>
                    <p>${explicacionMateria(materiaElegida, tema)}</p>
                    <h4>Ejemplo de aplicación</h4>
                    <p>${ejemploMateria(materiaElegida, tema)}</p>
                    <h4>Actividad práctica</h4>
                    <p>${actividadMateria(materiaElegida, tema)}</p>
                    <h4>Evaluación</h4>
                    <p>Responde cinco preguntas. Tienes tres intentos:
                    primero hasta 10 puntos, segundo hasta 8 y tercero hasta 6.</p>
                    <p>Intentos utilizados: ${registro.cantidad}/3</p>
                    <p>Mejor nota: ${registro.mejorNota === null ? "Pendiente" : registro.mejorNota + "/10"}</p>
                    <button onclick="evaluarModulo(${i})" ${registro.cantidad >= 3 ? "disabled" : ""}>
                        ${registro.cantidad >= 3 ? "Intentos agotados" : "Realizar evaluación"}
                    </button>
                </details>
            `;
        }).join("")}
        <button onclick="volverMaterias()">Volver a las materias</button>
    `;

    document.getElementById("aula").scrollIntoView({ behavior: "smooth" });
}

function explicacionMateria(materia, tema) {
    const categoria = categoriaMateria(materia);

    const textos = {
        matematica: `En ${tema} se estudian relaciones matemáticas y procedimientos que permiten resolver problemas. Es importante reconocer los datos, identificar las operaciones necesarias y comprobar que el resultado sea correcto.`,
        fisica: `En ${tema} se analizan fenómenos físicos mediante observaciones, magnitudes y modelos. Para resolver problemas se identifican los datos, se selecciona la fórmula adecuada, se sustituyen los valores y se expresa el resultado con su unidad.`,
        quimica: `En ${tema} se estudia la composición, estructura y transformación de la materia. Se deben reconocer los conceptos químicos, interpretar símbolos y fórmulas y relacionar los cambios observados con sus explicaciones científicas.`,
        biologia: `En ${tema} se estudian procesos y estructuras de los seres vivos. Se relacionan los conceptos biológicos con ejemplos, se interpretan procesos y se analiza cómo interactúan los organismos con su ambiente.`,
        informatica: `En ${tema} se estudian conceptos y procedimientos relacionados con los sistemas informáticos. Se analizan sus componentes, funcionamiento, utilidad y medidas para resolver problemas de manera organizada y segura.`,
        contabilidad: `En ${tema} se estudian procedimientos para organizar e interpretar información económica. Es importante identificar las cuentas, analizar las operaciones y registrar correctamente los valores para obtener información útil.`,
        lengua: `En ${tema} se desarrollan habilidades para comprender, interpretar y producir textos. Se analizan las ideas principales, la intención comunicativa, los argumentos y la organización del lenguaje.`,
        ingles: `In this module, you will develop English communication skills through vocabulary, grammar and reading. Pay attention to sentence structure and context when interpreting information.`,
        sociales: `En ${tema} se analizan ideas, procesos y situaciones sociales. Se estudian sus características, causas y consecuencias para comprender su importancia en la sociedad.`,
        general: `En ${tema} se desarrollan conocimientos y habilidades de la asignatura. Analiza los conceptos, identifica sus características y aplica lo aprendido a situaciones concretas.`
    };

    return textos[categoria];
}

function ejemploMateria(materia, tema) {
    const categoria = categoriaMateria(materia);

    const ejemplos = {
        matematica: "Si una ecuación representa una situación, identifica la incógnita, organiza las operaciones y despeja la variable para comprobar el resultado.",
        fisica: "Si un objeto recorre 150 metros en 10 segundos, su rapidez media se calcula dividiendo la distancia para el tiempo: 150 ÷ 10 = 15 m/s.",
        quimica: "Al representar una reacción química, se escriben las fórmulas de reactivos y productos y se comprueba que exista la misma cantidad de átomos de cada elemento.",
        biologia: "Al estudiar una célula, se identifican sus estructuras y se explica cómo colaboran para mantener sus funciones vitales.",
        informatica: "Para resolver una tarea con un programa, se identifican las entradas, se organiza el procedimiento y se comprueba que la salida sea correcta.",
        contabilidad: "Cuando una empresa compra materiales, se identifican las cuentas que intervienen y se registra el movimiento de acuerdo con el sistema contable.",
        lengua: "Al analizar un artículo de opinión, se identifica la tesis, se reconocen los argumentos y se evalúa si las evidencias apoyan la postura.",
        ingles: "Example: 'She has studied English for two years.' Identify the tense and explain how it connects the past with the present.",
        sociales: "Al estudiar un acontecimiento histórico, se identifican sus antecedentes, los grupos participantes y sus consecuencias.",
        general: "Observa una situación relacionada con el tema, identifica sus elementos y explica cómo se aplica el concepto estudiado."
    };

    return ejemplos[categoria];
}

function actividadMateria(materia, tema) {
    const categoria = categoriaMateria(materia);

    const actividades = {
        matematica: "Resuelve tres ejercicios relacionados con el tema. Escribe los datos, el procedimiento completo y comprueba cada resultado.",
        fisica: "Plantea dos problemas relacionados con el tema. Escribe datos, fórmula, sustitución, operaciones y respuesta con unidades.",
        quimica: "Realiza un cuadro con los conceptos principales, escribe dos ejemplos de aplicación y resuelve un ejercicio relacionado con el tema.",
        biologia: "Elabora un esquema del proceso estudiado, señala sus partes y explica con tus palabras la función de cada una.",
        informatica: "Diseña un procedimiento paso a paso para resolver un problema informático relacionado con el tema. Explica qué herramientas utilizarías y cómo comprobarías el resultado.",
        contabilidad: "Resuelve un caso práctico identificando las cuentas involucradas, los valores y los registros correspondientes. Justifica el procedimiento.",
        lengua: "Lee un texto relacionado con el tema. Identifica su idea principal, escribe un análisis y redacta una conclusión con tus propias palabras.",
        ingles: "Write five sentences related to the topic. Use correct grammar and vocabulary, then write a short paragraph.",
        sociales: "Elabora una línea de tiempo o cuadro comparativo. Incluye características, causas y consecuencias del tema.",
        general: "Elabora un resumen, incluye tres conceptos importantes y resuelve una situación práctica relacionada con el tema."
    };

    return actividades[categoria];
}

function evaluarModulo(modulo) {
    const materia = materiaElegida;
    const clave = claveModulo(materia, modulo);

    if (!intentos[clave]) {
        intentos[clave] = { cantidad: 0, mejorNota: null };
    }

    const registro = intentos[clave];

    if (registro.cantidad >= 3) {
        alert("Ya utilizaste los tres intentos disponibles.");
        return;
    }

    const banco = preguntasArea[categoriaMateria(materia)] || preguntasArea.general;
    const preguntas = banco.map((p, i) => banco[(i + modulo) % banco.length]);

    const zona = document.getElementById("contenidoAula");
    const titulo = obtenerTemas(materia)[modulo];

    zona.innerHTML = `
        <h2>Evaluación: ${titulo}</h2>
        <p>Pregunta 1 de 5</p>
        <form id="formEvaluacion">
            ${preguntas.map((p, i) => `
                <div class="pregunta">
                    <p><strong>${i + 1}. ${p[0]}</strong></p>
                    ${p[1].map((opcion, j) => `
                        <label style="display:block; margin:10px 0;">
                            <input type="radio" name="pregunta${i}" value="${j}" required>
                            ${["A", "B", "C"][j]}) ${opcion}
                        </label>
                    `).join("")}
                </div>
            `).join("")}
            <button type="submit">Enviar evaluación</button>
        </form>
    `;

    document.getElementById("formEvaluacion").addEventListener("submit", function(event) {
        event.preventDefault();

        let correctas = 0;

        preguntas.forEach((p, i) => {
            const seleccion = document.querySelector(`input[name="pregunta${i}"]:checked`);
            if (seleccion && Number(seleccion.value) === p[2]) {
                correctas++;
            }
        });

        registro.cantidad++;

        const notaObtenida = correctas * 2;
        const limites = [10, 8, 6];
        const nota = Math.min(notaObtenida, limites[registro.cantidad - 1]);

        registro.mejorNota = registro.mejorNota === null
            ? nota
            : Math.max(registro.mejorNota, nota);

        if (registro.mejorNota >= 7) {
            completados[clave] = true;
        }

        guardarDatos();
        actualizarProgreso();

        zona.innerHTML = `
            <h2>Resultado de la evaluación</h2>
            <p>Respuestas correctas: ${correctas}/5</p>
            <p>Nota de este intento: ${nota}/10</p>
            <p>Mejor nota registrada: ${registro.mejorNota}/10</p>
            <p>Intentos utilizados: ${registro.cantidad}/3</p>
            <p>${registro.mejorNota >= 7 ? "Módulo aprobado." : "Puedes volver a intentarlo si aún tienes intentos disponibles."}</p>
            <button onclick="abrirAsignaturaActual()">Volver al módulo</button>
        `;
    });
}

function abrirAsignaturaActual() {
    const materias = cursos[cursoElegido].especialidades[especialidadElegida];
    abrirAsignatura(materias.indexOf(materiaElegida));
}

function volverMaterias() {
    document.getElementById("aula").scrollIntoView({ behavior: "smooth" });
}

function actualizarProgreso() {
    const registros = Object.values(intentos).filter(r => r.cantidad > 0);
    const notas = registros.map(r => r.mejorNota);
    const promedio = notas.length
        ? (notas.reduce((a, b) => a + b, 0) / notas.length).toFixed(2)
        : "0.00";

    document.getElementById("promedioGeneral").textContent = promedio;
    document.getElementById("modulosCompletados").textContent =
        Object.values(completados).filter(Boolean).length;

    const tabla = document.getElementById("tablaNotas");

    tabla.innerHTML = `
        <h3>Resumen de evaluaciones</h3>
        <p>Evaluaciones realizadas: ${registros.length}</p>
        <p>Promedio de notas: ${promedio}/10</p>
        <p>Módulos aprobados: ${Object.values(completados).filter(Boolean).length}</p>
        <p>Las notas se guardan en este navegador.</p>
    `;

    mostrarDiplomas();
}

function mostrarDiplomas() {
    const zona = document.getElementById("listaDiplomas");
    const aprobados = Object.values(completados).filter(Boolean).length;

    zona.innerHTML = `
        <h3>Diplomas de aprendizaje</h3>
        <p>Módulos aprobados: ${aprobados}</p>
        <p>Los diplomas se habilitarán cuando se completen todos los requisitos del curso y se configure la emisión institucional.</p>
    `;
}

// Iniciar el campus
mostrarAsignaturas();
actualizarProgreso();
