# React Component Library (Learning Project)

This project is a personal exploration into building **reusable React components** and implementing common **React design patterns**. It serves as a hands-on playground for mastering advanced React concepts, component composition, and best practices in library development.

## 🎯 Learning Goals

- **Reusable Component Architecture:** Designing components that are flexible, maintainable, and easy to use in various contexts.
- **React Design Patterns:** Implementing patterns like **Compound Components** (used in the Quiz component) and **Render Props**.
- **Custom Hooks:** Encapsulating reusable logic (e.g., `useQuizz`) to keep components clean and functional.
- **CSS & Styling:** Managing styles effectively with CSS Modules and utility classes.
- **Headless UI:** Creating logic-only components that give full control over the UI rendering.

## 🚀 Features

- **Modular Components:** A collection of UI elements built from scratch.
- **Compound Component Pattern:** Demonstrated in the `Quizz` component for flexible state sharing.
- **Custom Hooks:** Logic extraction for better state management.
- **Customizable:** Props for colors, variants, and layouts.
- **Modern Stack:** Built with React 19 and Vite.

## 🛠 Technologies Used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- CSS Modules / CSS
- [clsx](https://www.npmjs.com/package/clsx) (for conditional class names)

## 📦 Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd ComponentLibrary
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server and view the components in action:

```bash
npm run dev
```

### Build

To build the project for production:

```bash
npm run build
```

## 🧩 Components

### 1. Badge

A simple label component for status, categories, or tags.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | node | - | The text or content inside the badge. |
| `type` | string | "square" | Shape of the badge. Options: `"square"`, `"pill"`. |
| `color` | string | "gray" | Color theme. Options: `gray`, `red`, `yellow`, `green`, `blue`, `indigo`, `purple`, `pink`. |

**Usage:**

```jsx
import Badge from './components/badge/Badge';

<Badge type="pill" color="green">Success</Badge>
<Badge type="square" color="red">Error</Badge>
```

### 2. Banner

A prominent message area for alerts, notifications, or status updates.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | - | The header text of the banner. |
| `description` | string | - | The body text of the banner. |
| `type` | string | "neutral" | Style variant. Options: `"success"`, `"warning"`, `"error"`, `"neutral"`. |
| `children` | node | - | Optional custom content. |

**Usage:**

```jsx
import Banner from './components/banner/Banner';

<Banner 
  type="warning" 
  title="Attention Needed" 
  description="Please update your profile information." 
/>
```

### 3. Card

A generic container for displaying content with an optional icon.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | - | The title of the card. |
| `description` | string | - | The main content text. |
| `icon` | string | (default icon) | Optional custom icon source. |
| `children` | node | - | Optional custom content. |

**Usage:**

```jsx
import Card from './components/card/Card';

<Card 
  title="Easy Deployment" 
  description="Deploy your apps with a single click." 
/>
```

### 4. Testimonial

A component to display user feedback or reviews, available in two distinct layouts.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | string | - | Layout style. Options: `"with-image"`, `"without-image"`. |
| `platform` | string | - | Context/Platform style (e.g., "mobile", "desktop"). |
| `img` | object | - | Object containing `src` and `alt` for the user image. |
| `quote` | string | - | The testimonial text. |
| `name` | string | - | Author's name. |
| `position` | string | - | Author's job title or role. |

**Usage:**

```jsx
import Testimonial from './components/testimonial/Testimonial';

<Testimonial 
  type="with-image" 
  platform="desktop"
  name="Christina Doe" 
  position="Software Engineer"
  quote="This library saved me hours of work!" 
  img={{ src: '/path/to/image.jpg', alt: 'Christina' }} 
/>
```

### 5. Quizz (Headless Component)

A flexible compound component for managing quiz logic and state. It handles the logic while you provide the UI structure.

**Subcomponents:**
- `Quizz.StartButton`
- `Quizz.QuestionSection`
- `Quizz.Question`
- `Quizz.OptionsSection`
- `Quizz.Option`
- `Quizz.FinishButton` (and others)

**Usage:**

```jsx
import Quizz from './headlessComponents/quizz/QuizzCompoundComponent/Quizz';

const questions = [
    {
        question: "What is React?",
        options: ["Library", "Framework", "Language"],
        answer: "Library"
    }
];

<Quizz questions={questions} onFinish={(score) => console.log(score)}>
    <Quizz.StartButton>Start Quiz</Quizz.StartButton>
    <Quizz.QuestionSection>
        <Quizz.Question />
        <Quizz.OptionsSection>
            <Quizz.Option />
        </Quizz.OptionsSection>
    </Quizz.QuestionSection>
</Quizz>
```
