// Contenido del sitio. Fuente: páginas del LRSM en fi.uba.ar
// (integrantes, proyectos vigentes y publicaciones), relevadas en nov. 2026.

export const lab = {
  name: 'Laboratorio de Redes y Sistemas Móviles',
  acronym: 'LRSM',
  department: 'Departamento de Electrónica',
  faculty: 'Facultad de Ingeniería, Universidad de Buenos Aires',
  // TODO: reemplazar por la descripción oficial del laboratorio.
  tagline:
    'Investigamos redes de computadoras, sistemas distribuidos y la próxima generación de comunicaciones: desde IoT y ciudades inteligentes hasta redes cuánticas.',
  address: 'Av. Paseo Colón 850, 1er piso',
  city: 'C1063ACV, Ciudad Autónoma de Buenos Aires, Argentina',
  phone: '528-50733 / 50732',
  email: 'fcaram@fi.uba.ar',
  fiubaUrl:
    'https://fi.uba.ar/investigacion/areas-de-investigacion/comunicaciones/laboratorio-de-redes-y-sistemas-moviles',
};

export const areas = ['Comunicaciones', 'Informática', 'Matemática aplicada'];

export type ResearchLine = { title: string; description: string; icon: 'network' | 'quantum' | 'shield' | 'iot' | 'chip' };

// Las descripciones son un primer borrador a partir de los proyectos y publicaciones.
export const researchLines: ResearchLine[] = [
  {
    icon: 'network',
    title: 'Redes y sistemas distribuidos',
    description:
      'Protocolos de transporte (TCP), redes móviles ad hoc (MANET), SDN, slicing en 5G y aplicaciones a ciudades inteligentes.',
  },
  {
    icon: 'quantum',
    title: 'Computación e información cuántica',
    description:
      'Lógica, redes y comunicaciones cuánticas: redes complejas basadas en estados entrelazados y el impacto del paradigma cuántico en blockchain.',
  },
  {
    icon: 'shield',
    title: 'Seguridad en redes globales',
    description:
      'Detección de intrusiones con aprendizaje automático, análisis matemático de blockchain y criptomonedas.',
  },
  {
    icon: 'iot',
    title: 'Internet, TIC e IoT',
    description:
      'Redes de sensores inalámbricos, IoT celular y nodos de monitoreo ambiental.',
  },
  {
    icon: 'chip',
    title: 'Sistemas digitales',
    description:
      'Lógica reconfigurable (FPGA) para sistemas críticos y cargas útiles satelitales.',
  },
];

export type Person = { name: string; title?: string };
export type Group = { role: string; people: Person[] };

export const team: Group[] = [
  { role: 'Responsable', people: [{ name: 'Leonidas Facundo Caram', title: 'Dr. Ing.' }] },
  { role: 'Docente consulto', people: [{ name: 'Alberto Enrique Dams', title: 'Ing.' }] },
  {
    role: 'Docentes',
    people: [
      { name: 'Luis Armando Marrone', title: 'Ing.' },
      { name: 'Nicolás Álvarez' },
      { name: 'Hugo Alberto Pagola', title: 'Ing.' },
      { name: 'Silvia Beatriz Lovato' },
      { name: 'Federico Hernán Diograzia' },
    ],
  },
  {
    role: 'Investigadores',
    people: [
      { name: 'Claudia Mónica Sarris', title: 'Dra.' },
      { name: 'Miguel Antonio Martínez' },
      { name: 'Cesar Federico Caiafa', title: 'Dr.' },
    ],
  },
  {
    role: 'Posgrado',
    people: [
      { name: 'Micaela Paula Suriano', title: 'Doctoranda' },
      { name: 'Juan Manuel Fajardo', title: 'Maestrando' },
    ],
  },
  {
    role: 'Estudiantes de grado',
    people: [{ name: 'Cristian Simonelli' }, { name: 'María Rocío de Aguirre' }],
  },
];

export type Project = { title: string; funding: string; period: string; director: string };

// Proyectos dirigidos por integrantes del laboratorio.
export const projects: Project[] = [
  {
    title:
      'Estudio y análisis de la tecnología Blockchain usando herramientas y métodos matemáticos y su vulnerabilidad frente al paradigma cuántico',
    funding: 'UBACyT 20020220400162BA',
    period: '2023 – 2024',
    director: 'L. F. Caram (dir.), H. D. Merlino (codir.)',
  },
  {
    title: 'Estudio y análisis de la tecnología Blockchain usando herramientas y métodos matemáticos',
    funding: 'UBACyT 20020190200305BA',
    period: '2020 – 2022',
    director: 'L. F. Caram',
  },
  {
    title: 'Isla de enclavamiento sobre plataforma de lógica reconfigurable',
    funding: 'UBA PDE 2021',
    period: '2021 – 2022',
    director: 'N. Álvarez',
  },
  {
    title: 'Solutions to Inverse Problems in Biomedical Engineering Based on Sparse Representations and Artificial Intelligence',
    funding: 'PIP CONICET',
    period: '2022 – 2024',
    director: 'C. F. Caiafa',
  },
];

export type Publication = { authors: string; title: string; venue: string; year: number; kind: 'Artículo' | 'Libro' | 'Congreso' };

// Selección destacada; la lista completa está en la página de FIUBA.
export const publications: Publication[] = [
  {
    kind: 'Libro',
    authors: 'Marrone, L.; Robles, M.; Barbieri, A.; Castro, N.',
    title: 'Paradigma TCP/IP',
    venue: 'EDULP',
    year: 2023,
  },
  {
    kind: 'Congreso',
    authors: 'Sarris, C. M.; Caram, L. F.',
    title: 'Esquema de funcionamiento de una red compleja cuántica basada en estados entrelazados',
    venue: 'CUANTOS 5, FAMAF-UNC',
    year: 2023,
  },
  {
    kind: 'Congreso',
    authors: 'Caiafa, C. F.; Caram, L. F.; Merlino, H.; Rosso, O. A.',
    title:
      'Statistical complexity of crypto-currencies time-series fluctuations and their relationship with their corresponding white paper rules',
    venue: 'LANET 2023, Cusco',
    year: 2023,
  },
  {
    kind: 'Artículo',
    authors: 'Sanca, G. A.; Barella, M.; Gómez Marlasca, F.; Álvarez, N.; Levy, P.; Golmar, F.',
    title: 'LabOSat-01: a payload for in-orbit device characterization',
    venue: 'IEEE Embedded Systems Letters',
    year: 2023,
  },
  {
    kind: 'Congreso',
    authors: 'Nuñez-Agurto, D.; Fuertes, W.; Marrone, L.; Benavides-Astudillo, E.; Vásquez-Bermúdez, M.',
    title: 'Traffic Classification in Software-Defined Networking by Employing Deep Learning Techniques: A Systematic Literature Review',
    venue: 'CITI 2023, CCIS vol. 1873',
    year: 2023,
  },
  {
    kind: 'Congreso',
    authors: 'Haro-Mendoza, D.; Tello-Oquendo, L.; Pla, V.; Martinez-Bauset, J.; Lin, S.-C.; Marrone, L. A.',
    title: 'Modeling the Resource Allocation in 5G Radio Access Networks with Network Slicing',
    venue: 'CSCI 2022, Las Vegas',
    year: 2022,
  },
  {
    kind: 'Artículo',
    authors: 'Iuliano, P.; Marrone, L.; Tinetti, F.',
    title: 'Protocolo para el cálculo científico distribuido sobre clientes móviles indeterminados en una Mobile Ad hoc Network (MANET)',
    venue: 'Desarrollo e Innovación en Ingeniería, Vol. II',
    year: 2021,
  },
  {
    kind: 'Congreso',
    authors: 'Becci, G.; Díaz, J.; Marrone, L.; Morandi, M.',
    title: 'Machine Learning Classifiers Selection in Network Intrusion Detection',
    venue: '50 JAIIO – IETF Day',
    year: 2021,
  },
];
