# Laboratorio de Redes y Sistemas Móviles (LRSM) · FIUBA

Sitio web del **Laboratorio de Redes y Sistemas Móviles** del Departamento de Electrónica, Facultad de Ingeniería, Universidad de Buenos Aires.

> **Estado:** primer borrador. La mayor parte del contenido (integrantes, proyectos, publicaciones y contacto) sale de la [página institucional del LRSM](https://fi.uba.ar/investigacion/areas-de-investigacion/comunicaciones/laboratorio-de-redes-y-sistemas-moviles). Hay que revisar los textos de presentación (`tagline` y las descripciones de las líneas de investigación).

## Tecnologías

- [Astro](https://astro.build/) 5 (sitio estático)
- [Tailwind CSS](https://tailwindcss.com/) 4

## Desarrollo local

Requiere Node.js 20.19 o superior (recomendado: 22).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # previsualiza el build
```

## Estructura

```
src/
├── data/lab.ts           # todo el contenido: datos del lab, líneas, equipo, proyectos, publicaciones
├── pages/index.astro     # landing page (una sola página con secciones)
├── components/Icon.astro # íconos de las líneas de investigación
├── layouts/Layout.astro  # <head>, fuentes y estilos globales
└── styles/global.css     # tema de Tailwind (colores, tipografías)
```

Para actualizar el contenido, en general alcanza con editar `src/data/lab.ts`.

## Pendientes

- [ ] Texto institucional de presentación y misión del laboratorio
- [ ] Revisar y completar las descripciones de las líneas de investigación
- [ ] Logo oficial (hoy `public/favicon.svg` es provisorio)
- [ ] Fotos del equipo y del laboratorio
- [ ] Correo institucional del laboratorio (hoy figura el del responsable)
- [ ] Actualizar proyectos vigentes (los listados en FIUBA terminan en 2024–2025)
- [ ] Deploy (Netlify o GitHub Pages)
