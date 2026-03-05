# 🎬 Movix — TMDB Movie Explorer

Movix is a **Netflix-inspired movie discovery application** built with **React, TypeScript, React Query, Tailwind CSS, and Framer Motion**.
The project focuses on **frontend architecture, performance optimization, and polished UI interactions**.

Users can browse trending movies, explore detailed movie information, search movies and actors, view cast details, and maintain a personalized watchlist with authentication.

---

# 🌐 Live Demo

[https://movix-tmdb.netlify.app](https://movix-tmdb.netlify.app)

---

# 🚀 Tech Stack

### Frontend

* React
* TypeScript
* Vite

### Styling

* Tailwind CSS

### Server State Management

* React Query (TanStack Query)

### Global State

* React Context API

### Animation

* Framer Motion

### Authentication

* Auth0

### API

* TMDB (The Movie Database)

---

# ✨ Features

### 🎥 Netflix-Style Home Page

* Hero carousel with trending movies
* Smooth automatic transitions
* Horizontal movie sections

Sections include:

* Trending
* Popular
* Top Rated

---

### 🎞 Movie Cards with Hover Preview

Movie cards display:

* Poster
* Title

On hover they reveal:

* Runtime
* Genres
* Movie name overlay

Hover interactions are animated using **Framer Motion**.

---

### ⚡ Prefetch on Hover

Movie details are **prefetched using React Query** when a user hovers over a movie card.

Benefits:

* Faster navigation
* Reduced perceived loading time
* Better UX

---

### 🎬 Movie Details Page

Displays complete movie information including:

* Backdrop
* Poster
* Title
* Tagline
* Rating
* Runtime
* Genres
* Release date
* Overview

Additional sections include:

* Cast
* Director
* Streaming providers (India)

---

### 👥 Cast Section

Displays top cast members with:

* Actor photo
* Name
* Character played

Cast cards are horizontally scrollable.

---

### 🧑‍🎤 Interactive Person Modal

Clicking a cast member opens a modal showing:

* Actor profile image
* Name
* Character
* Department
* Short biography

Biography is limited to a few sentences to keep the modal lightweight.

---

### 🎬 Known For Movies

The modal also displays movies the actor is known for.

Data is fetched using:

```
/person/{person_id}/combined_credits
```

Movies are filtered and sorted by popularity.

These movies are rendered using reusable **MovieCard components**.

---

### 🔎 Movie & Actor Search

Users can search for:

* Movies
* Actors

Features include:

* Debounced search input
* Loading skeletons
* Empty state
* Error handling

---

### ❤️ Watchlist System

Users can add movies to their watchlist using a heart icon.

Behavior:

* Outline heart → movie not saved
* Filled heart → movie saved

Watchlist uses:

* React Context
* localStorage

Each user has a unique storage key:

```
watchlist_userId
```

---

### 📄 Watchlist Page

Displays all saved movies.

Features:

* Grid layout
* Remove from watchlist
* Empty state UI

---

### ❤️ Header Watchlist Badge

The header contains a heart icon with a badge showing the number of saved movies.

The badge updates automatically using **Context state updates**.

---

# ⚡ Performance Optimizations

Several optimizations were implemented to improve performance.

### React Query Caching

* Server-state caching
* Configurable stale time
* Query deduplication

```
staleTime: 5 minutes
refetchOnWindowFocus: false
```

---

### Prefetching

Movie details are prefetched when hovering over movie cards.

This makes movie pages load instantly after clicking.

---

### Lazy Loading

Images are lazy loaded using:

```
loading="lazy"
```

---

### Code Splitting

Pages are lazy loaded using:

```
React.lazy()
```

This reduces the initial bundle size.

---

# 🧱 Project Architecture

The project follows a **layered architecture** for maintainability.

```
src

api/
  movieService.ts

components/
  movie/
    MovieCard
    HorizontalMovieSection
    CastSection
    PersonCard

  reusable/
    Container
    Skeleton
    Modal

context/
  WatchlistContext

hooks/
  useTrending
  useTopRated
  usePopular
  useMovieDetails
  usePersonCredits
  usePersonDetails

pages/
  Home
  MovieDetailsPage
  SearchPage
  WatchlistPage

routes/
  AppRoutes

types/
  movie.ts

utils/
```

This structure separates:

* API logic
* UI components
* business logic
* page routing

making the application scalable.

---

# 🛠 Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/movix
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file in the root directory.

```
VITE_TMDB_API_KEY=
VITE_AUTH0_CLIENT_ID=
VITE_AUTH0_CLIENT_DOMAIN=
```

Example `.env.example`:

```
VITE_TMDB_API_KEY=your_api_key
VITE_AUTH0_CLIENT_ID=your_client_id
VITE_AUTH0_CLIENT_DOMAIN=your_auth0_domain
```

---

# 📸 Screenshots

### Home Page

Hero carousel with movie sections.

### Movie Details Page

Detailed movie information with cast.

### Person Modal

Actor details with known movies.

### Search Page

Movie and actor search results.

### Watchlist Page

User saved movies.

---

# 📚 Key Concepts Demonstrated

This project demonstrates:

* React Query server-state management
* Prefetch strategies for performance
* Component-driven architecture
* Context-based global state
* Clean API abstraction layer
* Modal state management
* UI animation with Framer Motion

---

# 🚧 Future Improvements

Possible future enhancements:

* Infinite scrolling for search results
* Advanced filtering by genre/year
* Dark/light theme toggle
* Progressive Web App support

---

# 📄 License

MIT License

