const malla = {
  "Semestre 1": [
    "FUNDAMENTOS DE BIOLOGÍA Y GENÉTICA HUMANA",
    "BASES QUÍMICAS Y BIOQUÍMICAS DE LA VIDA",
    "SOCIEDAD Y PROFESIÓN",
    "MATEMÁTICA BÁSICA",
    "Inglés I",
    "Habilidades Académicas I"
  ],
  "Semestre 2": [
    "MORFOLOGÍA MICRO Y MACROSCÓPICA",
    "MICROBIOLOGÍA Y AGENTES INFECCIOSOS",
    "EPIDEMIOLOGÍA Y SALUD PÚBLICA",
    "MATEMÁTICA PARA LAS MENCIONES",
    "Inglés II",
    "Habilidades Académicas II"
  ],
  "Semestre 3": [
    "FISIOLOGÍA Y FISIOPATOLOGÍA DE SISTEMAS I",
    "QUÍMICA ORGÁNICA PARA LA SALUD",
    "ANATOMÍA POR IMÁGENES",
    "FÍSICA BÁSICA",
    "BIOÉTICA",
    "Inglés III",
    "Ética y Ciudadanía"
  ],
  "Semestre 4": [
    "FISIOLOGÍA Y FISIOPATOLOGÍA DE SISTEMAS II",
    "FARMACOLOGÍA CLÍNICA FUNDAMENTAL",
    "FÍSICA PARA IMAGENOLOGÍA I",
    "ELECTIVO DE FORMACIÓN GENERAL I",
    "Inglés IV",
    "Responsabilidad Social Universitaria",
    "PRÁCTICA INTEGRADA I EN TECNOLOGÍA MÉDICA IMAGENOLOGÍA Y FÍSICA"
  ],
  "Semestre 5": [
    "FÍSICA PARA IMAGENOLOGÍA II",
    "ANATOMÍA PATOLÓGICA IMAGENOLÓGICA I",
    "PSICOLOGÍA APLICADA A LA ATENCIÓN EN SALUD",
    "RADIODIAGNÓSTICO I",
    "PROTECCIÓN RADIOLÓGICA Y DOSIMETRÍA",
    "PRÁCTICA INTEGRADA II EN TECNOLOGÍA MÉDICA IMAGENOLOGÍA Y FÍSICA"
  ],
  "Semestre 6": [
    "MANEJO DE IMÁGENES MÉDICAS",
    "ANATOMÍA PATOLÓGICA IMAGENOLÓGICA II",
    "RADIODIAGNÓSTICO II",
    "FÍSICA NUCLEAR",
    "ULTRASONIDO I",
    "BIOSEGURIDAD",
    "PRÁCTICA INTEGRADA III EN TECNOLOGÍA MÉDICA IMAGENOLOGÍA Y FÍSICA"
  ],
  "Semestre 7": [
    "ENFERMERÍA APLICADA A LA TECNOLOGÍA MÉDICA",
    "MEDICINA NUCLEAR",
    "PROYECTO DE GRADO I",
    "IMAGENOLOGÍA EN TOMOGRAFÍA COMPUTADA",
    "ULTRASONIDO II",
    "PRÁCTICA INTEGRADA IV EN TECNOLOGÍA MÉDICA IMAGENOLOGÍA Y FÍSICA"
  ],
  "Semestre 8": [
    "RADIOLOGÍA INTERVENCIONAL",
    "INFORMÁTICA MÉDICA",
    "PROYECTO DE GRADO II",
    "IMAGENOLOGÍA EN RESONANCIA MAGNÉTICA",
    "RADIOTERAPÍA",
    "PRÁCTICA INTEGRADA V EN TECNOLOGÍA MÉDICA IMAGENOLOGÍA Y FÍSICA"
  ]
};

const container = document.getElementById("malla-container");

for (const [semestre, ramos] of Object.entries(malla)) {
  const box = document.createElement("div");
  box.className = "semestre";

  const title = document.createElement("h2");
  title.innerText = semestre;
  box.appendChild(title);

  ramos.forEach(ramo => {
    const div = document.createElement("div");
    div.className = "ramo";
    div.innerText = ramo;
    div.onclick = () => alert(`Ramo: ${ramo}`);
    box.appendChild(div);
  });

  container.appendChild(box);
}
