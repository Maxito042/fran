const cursos = [
  { nombre: "Programación I", semestre: 1, prerequisitos: [] },
  { nombre: "Matemática I", semestre: 1, prerequisitos: [] },
  { nombre: "Estructuras de Datos", semestre: 2, prerequisitos: ["Programación I"] },
];

function mostrarMalla() {
  const container = document.getElementById('malla-container');
  cursos.forEach(curso => {
    const div = document.createElement('div');
    div.className = 'curso';
    div.style.gridColumn = curso.semestre;
    div.innerText = curso.nombre;
    div.onclick = () => alert(`Prerrequisitos: ${curso.prerequisitos.join(', ') || 'Ninguno'}`);
    container.appendChild(div);
  });
}

mostrarMalla();
