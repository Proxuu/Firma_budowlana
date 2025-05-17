# BudEksperts - Strona Wizytówkowa Firmy Budowlanej

Link do strony - https://regal-maamoul-8d8a78.netlify.app/

![BudEksperts Logo](https://via.placeholder.com/150x50/0F3460/FFFFFF?text=BudEksperts)

## O Projekcie

BudEksperts to nowoczesna strona wizytówkowa dla firmy budowlanej. Strona została zaprojektowana z myślą o prezentacji usług, realizacji i zbudowaniu zaufania potencjalnych klientów. Cała zawartość strony jest w języku polskim.

### Technologie

- React 18
- TypeScript
- Tailwind CSS
- Lucide React (ikony)
- Vite (bundler)

## Funkcjonalności

- Responsywny design dostosowany do wszystkich rozmiarów ekranów
- Animacje przy przewijaniu i interakcjach
- Interaktywna nawigacja
- Karuzela opinii klientów
- Filtrowanie projektów według kategorii
- Formularz kontaktowy
- Mapa lokalizacji firmy
- Szczegółowa prezentacja usług

## Struktura Projektu

```
src/
├── components/
│   ├── layout/
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   ├── sections/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── Services.tsx
│   │   ├── Testimonials.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│   │   ├── SectionTitle.tsx
├── data/
│   ├── projects.ts
│   ├── services.ts
│   ├── testimonials.ts
├── pages/
│   ├── Home.tsx
├── App.tsx
├── index.css
├── main.tsx
```

## Instalacja i Uruchomienie

### Wymagania

- Node.js (wersja 18 lub nowsza)
- npm lub yarn

### Kroki instalacji

1. Sklonuj repozytorium:
   ```bash
   git clone https://github.com/twoj-uzytkownik/budeksperts.git
   cd budeksperts
   ```

2. Zainstaluj zależności:
   ```bash
   npm install
   # lub
   yarn
   ```

3. Uruchom projekt w trybie deweloperskim:
   ```bash
   npm run dev
   # lub
   yarn dev
   ```

4. Otwórz przeglądarkę pod adresem: `http://localhost:5173/`

### Budowanie wersji produkcyjnej

```bash
npm run build
# lub
yarn build
```

Pliki produkcyjne zostaną wygenerowane w katalogu `dist/`.

## Dostosowanie Treści

Aby dostosować treść strony, możesz edytować pliki w katalogu `src/data/`, który zawiera:

- `services.ts` - lista usług oferowanych przez firmę
- `projects.ts` - realizacje firmy
- `testimonials.ts` - opinie klientów

## Licencja

Ten projekt jest dostępny na licencji [MIT](LICENSE).

## Kontakt

BudEksperts - kontakt@budeksperts.pl