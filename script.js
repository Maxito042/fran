const malla = {
  "Semestre 1": [
    "Fundamentos de Biología y Genética Humana",
    "Bases Químicas y Bioquímicas de la Vida",
    "Sociedad y Profesión",
    "Matemática Básica",
    "Inglés I",
    "Habilidades Académicas I"
  ],
  "Semestre 2": [
    "Morfología Micro y Macroscópica",
    "Microbiología y Agentes Infecciosos",
    "Epidemiología y Salud Pública",
    "Matemática para las Menciones",
    "Inglés II",
    "Habilidades Académicas II"
  ],
  "Semestre 3": [
    "Fisiología y Fisiopatología de Sistemas I",
    "Química Orgánica para la Salud",
    "Anatomía por Imágenes",
    "Física Básica",
    "Bioética",
    "Inglés III",
    "Ética y Ciudadanía"
  ],
  "Semestre 4": [
    "Fisiología y Fisiopatología de Sistemas II",
    "Farmacología Clínica Fundamental",
    "Física para Imagenología I",
    "Electivo de Formación General I",
    "Inglés IV",
    "Responsabilidad Social Universitaria",
    "Práctica Integrada I en Tecnología Médica Imagenología y Física"
  ],
  "Semestre 5": [
    "Física para Imagenología II",
    "Anatomía Patológica Imagenológica I",
    "Psicología Aplicada a la Atención en Salud",
    "Radiodiagnóstico I",
    "Protección Radiológica y Dosimetría",
    "Práctica Integrada II en Tecnología Médica Imagenología y Física"
  ],
  "Semestre 6": [
    "Manejo de Imágenes Médicas",
    "Anatomía Patológica Imagenológica II",
    "Radiodiagnóstico II",
    "Física Nuclear",
    "Ultrasonido I",
    "Bioseguridad",
    "Práctica Integrada III en Tecnología Médica Imagenología y Física"
  ],
  "Semestre 7": [
    "Enfermería Aplicada a la Tecnología Médica",
    "Medicina Nuclear",
    "Proyecto de Grado I",
    "Imagenología en Tomografía Computada",
    "Ultrasonido II",
    "Práctica Integrada IV en Tecnología Médica Imagenología y Física"
  ],
  "Semestre 8": [
    "Radiología Intervencional",
    "Informática Médica",
    "Proyecto de Grado II",
    "Imagenología en Resonancia Magnética",
    "Radioterapia",
    "Práctica Integrada V en Tecnología Médica Imagenología y Física"
  ]
};
const container = document.getElementById("malla-container");

// Cargar ramos completados desde localStorage
const completados = JSON.parse(localStorage.getItem("ramosCompletados")) || {};

for (const [semestre, ramos] of Object.entries(malla)) {
  const box = document.createElement("div");
  box.className = "semestre";

  const title = document.createElement("h2");
  title.innerText = semestre;
  box.appendChild(title);

  ramos.forEach(ramo => {
    const div = document.createElement("div");
    div.className = "ramo";
    div.innerHTML = `<span class="nombre">${ramo}</span>`;

    // Marcar como completado si ya estaba guardado
    if (completados[ramo]) {
      div.classList.add("completed");
      div.querySelector(".nombre").innerText = `✅ ${ramo}`;
    }

    div.onclick = () => {
      const isCompleted = div.classList.toggle("completed");
      const nombre = div.querySelector(".nombre");

      if (isCompleted) {
        nombre.innerText = `✅ ${ramo}`;
        completados[ramo] = true;
      } else {
        nombre.innerText = ramo;
        delete completados[ramo];
      }

      // Guardar cambios
      localStorage.setItem("ramosCompletados", JSON.stringify(completados));
    };

    box.appendChild(div);
  });

  container.appendChild(box);
}
