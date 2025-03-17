// Datos de testimonios personalizados
const testimonios = [
    {
        name: "Noe Machaca",
        comment: "Vizcatch Analytics transformó nuestra manera de analizar datos. ¡Altamente recomendados!",
        image: "images/person_1.jpg" // Ruta de la imagen
    },
    {
        name: "Rene Ccoyto",
        comment: "El equipo de Vizcatch es increíble. Nos ayudaron a optimizar nuestros procesos de negocio.",
        image: "images/person_2.jpg" // Ruta de la imagen
    },
    {
        name: "Victor Mamani",
        comment: "Gracias a Vizcatch, ahora tomamos decisiones basadas en datos precisos y confiables.",
        image: "images/person_3.jpg" // Ruta de la imagen
    },
    {
        name: "Julio Eduardo",
        comment: "Excelente servicio y profesionales altamente capacitados. ¡Los mejores en análisis de datos!",
        image: "images/person_4.jpg" // Ruta de la imagen
    },
    {
        name: "Ana López",
        comment: "Increíble experiencia con Vizcatch. Nos ayudaron a identificar oportunidades clave en nuestro negocio.",
        image: "images/person_5.jpg" // Ruta de la imagen
    },
    {
        name: "Carlos Pérez",
        comment: "Con Vizcatch, hemos mejorado nuestra eficiencia operativa de manera significativa.",
        image: "images/person_6.jpg" // Ruta de la imagen
    }
];

// Función para cargar testimonios en el carrusel
function cargarTestimonios() {
    const testimoniosContainer = document.getElementById('testimonios');
    let testimoniosAgrupados = [];
    let grupoActual = [];

    // Agrupar testimonios en grupos de 3
    testimonios.forEach((testimonio, index) => {
        grupoActual.push(testimonio);

        if (grupoActual.length === 3 || index === testimonios.length - 1) {
            testimoniosAgrupados.push(grupoActual);
            grupoActual = [];
        }
    });

    // Generar el HTML para cada grupo de testimonios
    testimoniosAgrupados.forEach((grupo, index) => {
        let string = '';

        if (index === 0) {
            string += `<div class="carousel-item active">`; // Primer slide activo
        } else {
            string += `<div class="carousel-item">`;
        }

        string += `<div class="row">`;

        grupo.forEach(testimonio => {
            string += `
                <div class="col-md-4">
                    <img class="d-block mx-auto" src="${testimonio.image}" alt="Foto de ${testimonio.name}" onerror="this.src='https://via.placeholder.com/150'">
                    <p class="text-center sliderText">${testimonio.comment}</p>
                    <p class="text-center"><b>${testimonio.name}</b></p>
                </div>
            `;
        });

        string += `</div></div>`;
        testimoniosContainer.innerHTML += string;
    });

    // Inicializar el carrusel de Bootstrap
    $('#carouselTestimonios').carousel();
}

// Llamar a la función para cargar los testimonios
cargarTestimonios();
// Cargar proyectos realizados
const proyectos = [
    {
        image: "images/proyecto1.jpg", // Ruta de la imagen
        title: "Plataforma de Business Intelligence",
        description: "Desarrollo de una plataforma de BI para una empresa de retail...",
        link: "#"
    },
    {
        image: "images/proyecto2.png", // Ruta de la imagen
        title: "Aplicación Móvil de Gestión de Inventarios",
        description: "Creación de una app móvil para gestionar inventarios en tiempo real...",
        link: "#"
    },
    {   
        image: "images/proyecto3.png", // Ruta de la imagen
        title: "Sistema de Análisis de Datos Financieros",
        description: "Implementación de un sistema para analizar datos financieros...",
        link: "#"
    },
    {
        image: "images/proyecto4.jpg", // Ruta de la imagen
        title: "Dashboard de Monitoreo de Redes Sociales",
        description: "Desarrollo de un dashboard para monitorear métricas de redes sociales...",
        link: "#"
    }
];

function cargarProyectos() {
    let proyectosContainer = document.getElementById('proyectos');
    proyectos.forEach((proyecto, index) => {
        let string = '';

        if (index === 0) {
            string += `<div class="carousel-item active">`; // Primer elemento activo
        } else {
            string += `<div class="carousel-item">`;
        }

        // Agregar imagen, título, descripción y enlace
        string += `
            <img src="${proyecto.image}" alt="${proyecto.title}" onerror="this.src='https://via.placeholder.com/500x300'">
            <h4>${proyecto.title}</h4>
            <p>${proyecto.description}</p>
            <a href="${proyecto.link}" class="btnVerMas">Ver Más</a>
        `;

        string += `</div>`;

        proyectosContainer.innerHTML += string;
    });

    // Inicializar el carrusel de Bootstrap
    $('#carouselProyectos').carousel();
}

// Cargar testimonios y proyectos cuando la página esté lista
document.addEventListener("DOMContentLoaded", () => {
    cargarTestimonios();
    cargarProyectos();
});