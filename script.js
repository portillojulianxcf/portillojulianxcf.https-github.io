document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  console.log("Metalmontajes página cargada correctamente.");

  




  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  console.log("Metalmontajes página cargada correctamente.");

  

  // Efecto adicional en botón del video
document.querySelectorAll('.btn-video').forEach(btn => {
    btn.addEventListener('mouseover', () => {
      btn.style.transform = 'scale(1.05)';
    });
    btn.addEventListener('mouseout', () => {
      btn.style.transform = 'scale(1)';
    });
  });

  
  galeria 
  const infoData = {
    1: { titulo: "Estructuras metalicas ", descripcion: "Las estructuras metálicas destacan por su resistencia, durabilidad y versatilidad. Fabricadas con acero de alta calidad, garantizan soporte robusto y estabilidad en proyectos industriales, comerciales y residenciales. Su capacidad para soportar grandes cargas, combinada con precisión en el ensamblaje, permite obtener construcciones seguras y eficientes. Además, su adaptabilidad y facilidad de mantenimiento hacen que sean una elección confiable para quienes buscan soluciones estructurales modernas y sostenibles" },
    2: { titulo: "Tuberias en acero inoxidable", descripcion: "La tubería de acero inoxidable es fundamental en la industria alimentaria gracias a su resistencia a la corrosión, fácil limpieza y cumplimiento de estándares sanitarios. Su superficie lisa evita la acumulación de bacterias, garantizando procesos higiénicos y seguros. Además, soporta altas temperaturas y presiones, lo que la convierte en la mejor opción para transporte de líquidos y productos alimenticios con máxima confiabilidad y durabilidad "},
    3: { titulo: "Mecanica indutrial", descripcion: "La mecánica industrial es clave para garantizar el funcionamiento óptimo de equipos y sistemas productivos. A través del mantenimiento preventivo, se evitan fallas mediante revisiones programadas; el mantenimiento predictivo permite anticipar averías mediante monitoreo y análisis; y el mantenimiento correctivo corrige fallos de manera efectiva para restablecer la operación. Estas estrategias combinadas aseguran mayor vida útil, reducción de costos y continuidad en la producción." },
    4: { titulo: "Soldadura especializada ", descripcion: "La soldadura especializada industrial garantiza uniones seguras y precisas en diferentes materiales como acero al carbono, acero inoxidable y aleaciones especiales. Emplea procesos avanzados como TIG, MIG y SMAW, adaptándose a proyectos estructurales y de alta exigencia. Este tipo de soldadura asegura resistencia mecánica, durabilidad y calidad certificada, siendo esencial para industrias que requieren fiabilidad y estándares de seguridad en cada componente." }
  }
  
  function mostrarInfo(id) {
    document.getElementById('info-titulo').textContent = infoData[id].titulo;
    document.getElementById('info-descripcion').textContent = infoData[id].descripcion;
    document.getElementById('info-menu').classList.remove('oculto');
  }
  
  function cerrarInfo() {
    document.getElementById('info-menu').classList.add('oculto');
  }
  
  
document.getElementById("buscador").addEventListener("keyup", function() {
    let filtro = this.value.toLowerCase();
    let contenido = document.getElementById("contenido").getElementsByTagName("p");

    for (let i = 0; i < contenido.length; i++) {
        let texto = contenido[i].textContent.toLowerCase();
        if (texto.includes(filtro)) {
            contenido[i].style.display = "";
        } else {
            contenido[i].style.display = "none";
        }
    }
});



