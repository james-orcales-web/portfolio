# Portfolio React

A modern, responsive portfolio website built with React and Vite.

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd portfolio-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📁 Project Structure

```
portfolio-react/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navigation.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Hero.jsx
│   │   └── About.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Features

- **Responsive Design** - Works on all devices
- **Modern UI/UX** - Clean and professional interface
- **Smooth Animations** - Interactive elements with CSS animations
- **Component-Based** - Modular React components
- **Fast Performance** - Built with Vite for lightning-fast HMR

## 🛠️ Technologies Used

- React 18
- Vite
- CSS3 with custom properties
- Modern JavaScript (ES6+)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎯 Components Overview

### Navigation
Fixed navigation bar with logo and menu button

### Sidebar
Social media links positioned on the left side

### Hero
Main landing section with your name and introduction

### About
About section with stats counter animation and skill cards with 3D hover effects

## 🖼️ Adding Your Hero Background Image

Place your hero background image in the `public` folder and update the Hero component:

```jsx
<section className="hero" style={{ backgroundImage: "url('/your-image.jpg')" }}>
```

## 📦 Building for Production

```bash
npm run build
```

This will create a `dist` folder with your optimized production build.

## 🚀 Deployment

You can deploy this portfolio to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Simply run `npm run build` and upload the `dist` folder.

## 📄 License

MIT License - feel free to use this for your own portfolio!
