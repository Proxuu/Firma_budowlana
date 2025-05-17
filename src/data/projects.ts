export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  year: number;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Osiedle Słoneczne',
    category: 'budownictwo mieszkaniowe',
    description: 'Kompleks 12 domów jednorodzinnych z pełną infrastrukturą. Projekt realizowany od podstaw, z wykorzystaniem energooszczędnych technologii.',
    imageUrl: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    year: 2023,
  },
  {
    id: 2,
    title: 'Biurowiec Panorama',
    category: 'budownictwo komercyjne',
    description: 'Nowoczesny budynek biurowy o powierzchni 5000m² z podziemnym parkingiem i zielonym dachem.',
    imageUrl: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    year: 2022,
  },
  {
    id: 3,
    title: 'Rewitalizacja kamienicy przy ul. Długiej',
    category: 'renowacje',
    description: 'Kompleksowa rewitalizacja zabytkowej kamienicy z zachowaniem historycznego charakteru budynku przy jednoczesnej modernizacji wnętrz.',
    imageUrl: 'https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    year: 2022,
  },
  {
    id: 4,
    title: 'Rezydencja Parkowa',
    category: 'budownictwo mieszkaniowe',
    description: 'Luksusowa rezydencja o powierzchni 450m² z basenem, ogrodem zimowym i systemem inteligentnego zarządzania budynkiem.',
    imageUrl: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    year: 2021,
  },
  {
    id: 5,
    title: 'Centrum handlowe "Galeria Centralna"',
    category: 'budownictwo komercyjne',
    description: 'Obiekt handlowy o powierzchni 15000m² z parkingiem na 300 miejsc. Kompleksowa realizacja od projektu po oddanie do użytku.',
    imageUrl: 'https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    year: 2020,
  },
  {
    id: 6,
    title: 'Modernizacja Szkoły Podstawowej nr 5',
    category: 'obiekty użyteczności publicznej',
    description: 'Kompleksowa modernizacja budynku szkoły obejmująca termomodernizację, wymianę instalacji oraz adaptację poddasza na cele edukacyjne.',
    imageUrl: 'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    year: 2019,
  },
];