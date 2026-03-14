# 📱 Pokedex Mobile App (React Native + Expo)

A modern **Pokedex mobile application** built with **React Native and Expo Router**, inspired by UI designs from Dribbble.
The app fetches Pokémon data from the PokéAPI and displays a responsive list of Pokémon cards. Users can select a Pokémon to view detailed information on a separate screen.

This project focuses on **API integration, navigation patterns, and dynamic UI rendering in mobile applications**.

---

# 🚀 Features

- Fetch Pokémon data from the public PokéAPI
- Responsive Pokémon card layout
- Dynamic background color based on Pokémon type
- Pokémon sprite rendering (front and back)
- Navigation to a detailed Pokémon page
- Scrollable mobile interface
- Clean component-based architecture

---

# 🧠 Technical Concepts Demonstrated

This project demonstrates several concepts commonly used in modern mobile development.

### 1. API Consumption

The application fetches Pokémon data from:

https://pokeapi.co/

Key implementation techniques:

- Asynchronous data fetching using `fetch`
- Handling multiple API calls using `Promise.all`
- Parsing JSON API responses
- Rendering remote image assets

---

### 2. Parallel Data Fetching

Instead of fetching Pokémon one by one, the app uses:

Promise.all()

to perform **parallel API requests**, which improves performance.

Example:

```javascript
const detailedPokemons = await Promise.all(
  data.results.map(async (pokemon) => {
    const response = await fetch(pokemon.url);
    return await response.json();
  }),
);
```

This is a **common performance optimization used in production applications**.

---

### 3. Mobile Navigation (Expo Router)

The project uses **Expo Router** for navigation between screens.

Navigation example:

```javascript
<Link
  href={{
    pathname: "./pokemondetails",
    params: { name: pokemon.name },
  }}
>
```

This demonstrates **parameterized routing**, where information about the selected Pokémon is passed to the details screen.

---

### 4. State Management with React Hooks

React Hooks are used to manage application state and side effects.

Hooks used:

- `useState` → manage Pokémon data
- `useEffect` → trigger API calls when components mount
- `useLocalSearchParams` → read route parameters

---

### 5. Dynamic UI Rendering

The UI adapts based on Pokémon attributes.

Example: background colors change depending on Pokémon type.

```javascript
backgroundColor: colorsByType[pokemon.types[0].type.name];
```

This demonstrates **data-driven UI rendering**, a key principle in modern frontend development.

---

# Technologies Used

- React Native
- Expo
- Expo Router
- TypeScript
- REST APIs
- PokéAPI
- JavaScript ES6+
- Mobile UI Layout (Flexbox)

---

# 📂 Project Structure

```
app/
 ├── index.tsx            # Home screen (Pokemon list)
 ├── pokemondetails.tsx  # Details screen

components/
 └── PokemonCard.tsx
```

---

# ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/pokedex-app.git
```

Navigate to the project folder:

```bash
cd pokedex-app
```

Install dependencies:

```bash
npm install
```

Start the Expo development server:

```bash
npx expo start
```

Then open the app using:

- Expo Go (mobile)
- Android emulator
- iOS simulator

---

# 🎯 Skills Demonstrated

This project highlights the following industry-relevant skills:

- Mobile application development
- REST API integration
- Asynchronous programming
- State management in React
- Dynamic UI rendering
- Navigation architecture
- Component-based design
- Performance optimization with parallel requests

"/sreenshots/PokedexHome.png"

"/sreenshots/Detailpage.png"

"/sreenshots/onmobileDetailpage.jpeg"

---

# 📜 License

This project is open source and available under the MIT License.
