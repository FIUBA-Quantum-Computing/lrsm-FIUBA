// Contenido del sitio. Fuente: páginas del LRSM en fi.uba.ar
// (integrantes, proyectos vigentes y publicaciones), relevadas en nov. 2026.

export const lab = {
  name: 'Laboratorio de Redes y Sistemas Móviles',
  acronym: 'LRSM',
  department: 'Departamento de Electrónica',
  faculty: 'Facultad de Ingeniería, Universidad de Buenos Aires',
  // TODO: reemplazar por la descripción oficial del laboratorio.
  tagline:
    'Investigamos redes, sistemas distribuidos y computación cuántica: desde IoT y redes cuánticas hasta el diseño de una QPU propia. Formamos estudiantes de grado, maestría y doctorado.',
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
      'Hardware cuántico (diseño de una QPU propia), machine learning cuántico, optimización variacional y redes cuánticas: del qubit a la aplicación.',
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
      'Lógica reconfigurable (FPGA) para sistemas críticos, control de QPUs y aceleración de simuladores cuánticos.',
  },
];

export type Person = { name: string; title?: string };
export type Group = { role: string; people: Person[] };

export const team: Group[] = [
  { role: 'Director', people: [{ name: 'Leonidas Facundo Caram', title: 'Dr. Ing.' }] },
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
    role: 'Grupo de computación cuántica',
    people: [
      { name: 'Julián Melmer Stiefkens', title: 'Ing. Informático · Optimización cuántica' },
      { name: 'Lucas Burdman', title: 'Ing. Electrónico · QML' },
      { name: 'Martín Costantini', title: 'FPGAs' },
      { name: 'Manuel Compoliete', title: 'Ayudante de cátedra' },
      { name: 'Francisco Moya', title: 'Tesista · QPU' },
      { name: 'Lautaro García Vitale', title: 'Tesista · QPU' },
      { name: 'Leandro Tosi', title: 'Codirector externo (CONICET–Instituto Balseiro)' },
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

// Proyectos financiados dirigidos por integrantes del laboratorio.
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
    kind: 'Congreso',
    authors: 'Melmer Stiefkens, J.',
    title: 'VQ-MAR: A Variational Quantum–Classical Hybrid Framework for Managed Aquifer Recharge Site Selection',
    venue: 'IEEE Quantum Week (QCE26), Toronto',
    year: 2026,
  },
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

export type Featured = {
  tag: string;
  title: string;
  subtitle?: string;
  people: string;
  summary: string;
  points: string[];
  accent: 'signal' | 'violet';
};

// Fuente: presentación "De qubits a aplicaciones" (ago. 2026).
export const featured: Featured[] = [
  {
    tag: 'Tesis de grado · Hardware cuántico',
    title: 'Diseñando nuestra propia QPU',
    people: 'Francisco Moya y Lautaro García Vitale · codirección de Leandro Tosi (Instituto Balseiro)',
    summary:
      'Diseño, simulación, fabricación y caracterización de 4 transmones superconductores organizados en dos pares, para comparar acoplamiento directo contra un coupler sintonizable (transmón + SQUID).',
    points: [
      'Litografía electrónica y evaporación de metales propias',
      'Caracterización en criostato de dilución a ~10 mK',
      'Primera QPU universitaria del país en desarrollo',
    ],
    accent: 'violet',
  },
  {
    tag: 'Paper · IEEE QCE26',
    title: 'VQ-MAR: optimización cuántico-clásica',
    subtitle: 'A Variational Quantum–Classical Hybrid Framework for Managed Aquifer Recharge Site Selection',
    people: 'Julián Melmer Stiefkens',
    summary:
      'Selección de sitios de recarga de acuíferos formulada como QUBO y resuelta con QAOA sobre datos hidrogeológicos reales, presentada en IEEE Quantum Week 2026 (Toronto).',
    points: [
      'QAOA con warm-start clásico: AR ≥ 0.99 a N=20',
      'Validado en hardware real: IBM Kingston QPU',
      'Pipeline con datos reales (SSURGO, NWIS, NLCD, NOAA, OSM)',
    ],
    accent: 'signal',
  },
  {
    tag: 'Tesis de grado · QML',
    title: 'Redes neuronales híbridas clásico-cuánticas',
    people: 'Lucas Burdman',
    summary:
      'Circuitos cuánticos parametrizados integrados en arquitecturas de ML convencionales, aplicados al reconocimiento de emociones a partir de señales de audio.',
    points: [
      'El bloque cuántico agrega solo 6–12 parámetros',
      'Desempeño comparable o superior al modelo clásico',
      '98 % de accuracy verificado en hardware de IBM',
    ],
    accent: 'signal',
  },
];

// Fuente: presentación del proyecto QUANTIC al programa PITFIUBA (ago. 2026).
export const quantic = {
  title: 'QUANTIC',
  fullName: 'QUANTum Ingeniería en Cómputo y Comunicaciones',
  tag: 'Proyecto PITFIUBA',
  leads: 'Dirección: Leonidas Facundo Caram · Codirección: Leandro Tosi (Instituto Balseiro)',
  summary:
    'Un proyecto interdisciplinario para desarrollar y aplicar tecnologías cuánticas al procesamiento de información, e instalar en la UBA capacidades propias de diseño y fabricación de qubits superconductores.',
  axes: [
    {
      title: 'Hardware cuántico',
      area: 'Ing. Electrónica y ciencia de materiales',
      goals: [
        'Diseñar, fabricar y caracterizar un procesador cuántico funcional de 4 a 6 qubits (transmon / fluxonium)',
        'Lectura de alta fidelidad, compuertas de uno y dos qubits y generación de entrelazamiento',
      ],
    },
    {
      title: 'Comunicaciones cuánticas',
      area: 'Ing. en Telecomunicaciones',
      goals: [
        'Componentes para nodos de una red cuántica, hacia la Internet Cuántica',
        'Prototipo de repetidor cuántico y detector de fotones únicos (KIDs de aluminio granular)',
      ],
    },
    {
      title: 'Quantum Machine Learning',
      area: 'Ing. Informática',
      goals: [
        'Protocolos que integran capas cuánticas en redes neuronales clásicas',
        'Modelos híbridos aplicados a problemas reales, como el procesamiento de voz',
      ],
    },
  ],
  roadmap: [
    { months: '1–6', text: 'Diseño y simulación electromagnética del procesador: transmons, uniones Josephson y resonadores de lectura.' },
    { months: '6–12', text: 'Procesos de fabricación en sala limpia y caracterización de un único transmón.' },
    { months: '12–18', text: 'Electrónica rápida a temperatura ambiente (FPGAs) y cableado criogénico.' },
    { months: '18–24', text: 'Chip final de 4–6 qubits: compuertas de dos qubits, entrelazamiento y algoritmos como Grover.' },
  ],
  partners: [
    'Departamentos de Electrónica y de Computación, FIUBA',
    'Grupo de Circuitos Cuánticos, Instituto Balseiro',
    'Grupo de Teoría de la Materia Condensada, Centro Atómico Bariloche (CNEA)',
  ],
};

export const openLines = [
  {
    title: 'Optimización adaptativa',
    description: 'ADAPT-VQE / ADAPT-QAOA: ansätze a medida del problema para superar el muro de coherencia.',
    contact: 'Julián',
  },
  {
    title: 'FPGAs para computación cuántica',
    description: 'Control de la QPU y aceleración de simuladores cuánticos.',
    contact: 'Lucas · Martín',
  },
  {
    title: 'Redes cuánticas',
    description: 'Blockchain con criptografía post-cuántica y QKD, y el primer QRouter de FIUBA.',
    contact: 'Facundo',
  },
];

export const community = [
  { title: 'Qiskit Fall Fest 2025 · FIUBA', description: 'Un mes de charlas, talleres y hackathon con IBM Quantum en la UBA.' },
  { title: 'OQI Hackathon 2026 · Puebla, México', description: 'Optimización cuántica de la liberación de agua en el embalse binacional Falcon.' },
  { title: 'Hackathon LATAM · Montevideo', description: 'Decisiones en tiempo real para contención de incendios forestales.' },
  { title: 'Cuantos 8 · NYUAD Quantum Hackathon', description: 'Escuela y Taller Argentino de Cuántica, y hackathon en Abu Dhabi.' },
];

export const course = {
  name: 'Computación Cuántica',
  url: 'https://computacion-cuantica-fiuba.netlify.app/',
  summary:
    'Materia de grado de FIUBA dictada por el laboratorio. No hace falta experiencia previa en cuántica, y es la vía más directa para sumarse a un proyecto de investigación.',
  levels: [
    { level: 'Grado', text: 'Teórica: Facundo Caram. Práctica: Lucas Burdman, Manuel Compoliete y Julián Melmer Stiefkens.' },
    { level: 'Maestría', text: 'Vinculada a la Maestría en Ingeniería en Telecomunicaciones y a la Especialización en Sistemas Embebidos.' },
    { level: 'Doctorado', text: 'Tesis doctoral en curso sobre redes de información cuánticas.' },
  ],
};
