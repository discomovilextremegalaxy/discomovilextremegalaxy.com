# Discomóvil Extreme Galaxy — Business Website

**Bilingual project documentation / Documentación bilingüe**

## English

### Overview

A responsive promotional website for **Discomóvil Extreme Galaxy**, a family-run DJ and event-services business in El Salvador. The site gives potential customers a place to understand the services, view event media and start a quote conversation.

**Implemented experience:** a single-page website with service, media, testimonial and contact sections.

### User experience

- Brand introduction and service positioning for DJ, sound, lighting and event animation.
- Service cards that summarize the business offering.
- Video and photo gallery using locally hosted media assets.
- WhatsApp quote entry points and a Facebook contact link.
- Responsive navigation and layouts for desktop and mobile.
- Scroll-triggered reveal effects and pointer-responsive hero lighting on capable desktop devices.
- Reduced or disabled decorative motion on touch devices, reduced-motion configurations, data-saving connections and resource-constrained devices.
- Bilingual site terms in **terms.html**.

### Implementation

The website uses semantic HTML for page sections, CSS for layout and visual effects, and vanilla JavaScript for interaction. The Intersection Observer API triggers scroll-reveal behavior, while Pointer Events and requestAnimationFrame drive the desktop hero-lighting effect without continuously polling the pointer.

### Technology

- HTML5, CSS3 and vanilla JavaScript.
- Intersection Observer API and Pointer Events API.
- requestAnimationFrame.
- Locally hosted image and video assets.

### Run locally

Open **index.html** in a browser, or serve the repository root with a static HTTP server:

~~~bash
python -m http.server 8000
~~~

Open http://localhost:8000.

### Scope

The public experience is centered on the landing page and its in-page sections. Contact actions open external channels; the repository does not provide online booking, payment processing or a business-management backend. Contact information and service availability should be confirmed with the business before use.

---

## Español

### Descripción general

Sitio web promocional adaptable para **Discomóvil Extreme Galaxy**, un negocio familiar de DJ y servicios para eventos en El Salvador. El sitio permite que los clientes potenciales conozcan la oferta, vean material audiovisual y comiencen una conversación para solicitar una cotización.

**Experiencia implementada:** sitio de una sola página con secciones de servicios, contenido multimedia, testimonios y contacto.

### Experiencia del usuario

- Presentación de marca y servicios de DJ, sonido, iluminación y animación.
- Tarjetas que resumen los servicios disponibles.
- Galería de videos y fotografías con recursos multimedia locales.
- Accesos para solicitar cotizaciones por WhatsApp y contactar mediante Facebook.
- Navegación y maquetación adaptables a computadoras y teléfonos.
- Efectos de aparición al desplazarse e iluminación del encabezado sensible al puntero en equipos de escritorio compatibles.
- Movimiento decorativo reducido o desactivado en dispositivos táctiles, configuraciones de movimiento reducido, conexiones con ahorro de datos y equipos con recursos limitados.
- Términos del sitio en español e inglés en **terms.html**.

### Implementación

El sitio utiliza HTML semántico para estructurar las secciones, CSS para la maquetación y los efectos visuales, y JavaScript puro para las interacciones. La API Intersection Observer activa los efectos de aparición durante el desplazamiento; Pointer Events y requestAnimationFrame controlan la iluminación del encabezado en escritorio sin consultar el puntero continuamente.

### Tecnologías

- HTML5, CSS3 y JavaScript puro.
- API Intersection Observer y API Pointer Events.
- requestAnimationFrame.
- Recursos locales de imagen y video.

### Ejecución local

Abre **index.html** en un navegador o sirve la raíz del repositorio mediante un servidor HTTP estático:

~~~bash
python -m http.server 8000
~~~

Abre http://localhost:8000.

### Alcance

La experiencia pública se concentra en la página principal y sus secciones internas. Las acciones de contacto abren canales externos; el repositorio no implementa reservas en línea, procesamiento de pagos ni backend de administración del negocio. Los datos de contacto y la disponibilidad de servicios deben confirmarse directamente con el negocio antes de utilizarlos.
