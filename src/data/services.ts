export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Budowa domów jednorodzinnych',
    description: 'Kompleksowa budowa domów jednorodzinnych od fundamentów po wykończenie. Dbamy o najwyższą jakość wykonania i terminowość.',
    icon: 'home',
  },
  {
    id: 2,
    title: 'Remonty i modernizacje',
    description: 'Profesjonalne remonty i modernizacje istniejących budynków. Dostosujemy przestrzeń do Twoich potrzeb i oczekiwań.',
    icon: 'hammer',
  },
  {
    id: 3,
    title: 'Projekty komercyjne',
    description: 'Realizacja obiektów komercyjnych, biurowych i przemysłowych. Doświadczenie w budowie różnorodnych obiektów użytkowych.',
    icon: 'building-2',
  },
  {
    id: 4,
    title: 'Wykończenia wnętrz',
    description: 'Kompleksowe wykończenia wnętrz z dbałością o każdy detal. Zamienimy surowe ściany w funkcjonalną i estetyczną przestrzeń.',
    icon: 'paintbrush',
  },
  {
    id: 5,
    title: 'Instalacje',
    description: 'Montaż i serwis instalacji elektrycznych, hydraulicznych, grzewczych oraz wentylacyjnych. Nowoczesne i energooszczędne rozwiązania.',
    icon: 'pipe',
  },
  {
    id: 6,
    title: 'Doradztwo budowlane',
    description: 'Profesjonalne doradztwo na każdym etapie inwestycji. Pomożemy w wyborze optymalnych rozwiązań technicznych i materiałowych.',
    icon: 'clipboard-check',
  },
];