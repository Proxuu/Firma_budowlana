export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatarUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Adam Kowalski',
    role: 'Właściciel domu jednorodzinnego',
    content: 'Współpraca z tą firmą była czystą przyjemnością. Budowa naszego domu przebiegła sprawnie i zgodnie z harmonogramem. Ekipa była profesjonalna i zawsze służyła pomocą oraz radą. Polecam wszystkim, którzy cenią sobie jakość i terminowość.',
    avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    name: 'Marta Nowak',
    role: 'Inwestor komercyjny',
    content: 'Już drugi raz korzystaliśmy z usług tej firmy i ponownie jesteśmy bardzo zadowoleni. Realizacja naszego biurowca przebiegła bez najmniejszych problemów, a jakość wykonania przewyższyła nasze oczekiwania. Z pewnością będziemy kontynuować współpracę przy kolejnych projektach.',
    avatarUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 3,
    name: 'Jan Wiśniewski',
    role: 'Dyrektor szkoły',
    content: 'Modernizacja naszej szkoły była dużym wyzwaniem, ale firma poradziła sobie znakomicie. Prace zostały wykonane w czasie wakacji, dzięki czemu rok szkolny rozpoczął się bez opóźnień. Profesjonalizm i zaangażowanie ekipy budowlanej zasługują na najwyższe uznanie.',
    avatarUrl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];