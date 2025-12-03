# 🎓 Compiler Phases - Interactive 3D Visualization

An immersive, interactive 3D visualization of compiler phases built with React, Three.js, and Framer Motion. This educational tool helps students and developers understand the complex process of compilation through stunning visual representations.

![Compiler Phases Visualization](https://img.shields.io/badge/Status-Active-success)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)
![Three.js](https://img.shields.io/badge/Three.js-0.160.1-orange)

---

## 📋 Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Compiler Phases](#compiler-phases)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## ✨ Features

- **🎨 Interactive 3D Visualization** - Explore compiler phases in beautiful 3D space
- **🎵 Background Music** - Optional ambient music for enhanced learning experience
- **🌓 Dark/Light Mode** - Seamless theme switching for comfortable viewing
- **📱 Responsive Design** - Works flawlessly on desktop, tablet, and mobile devices
- **⚡ Smooth Animations** - Fluid transitions powered by Framer Motion
- **🎯 Phase-by-Phase Exploration** - Detailed breakdown of each compilation phase
- **🔊 Audio Controls** - Toggle background music on/off
- **🎭 Modern UI** - Built with Radix UI and Tailwind CSS for premium aesthetics

---

## 🎬 Demo

Visit the live demo: [Compiler Phases 3D Visualization](#)

**Key Compiler Phases Covered:**
1. Lexical Analysis (Scanner)
2. Syntax Analysis (Parser)
3. Semantic Analysis
4. Intermediate Code Generation
5. Code Optimization
6. Code Generation

---

## 🛠️ Tech Stack

### Core Technologies
- **React 18.3.1** - UI framework
- **TypeScript 5.8.3** - Type-safe development
- **Vite 5.4.19** - Lightning-fast build tool

### 3D Graphics & Animation
- **Three.js 0.160.1** - 3D rendering engine
- **@react-three/fiber 8.18.0** - React renderer for Three.js
- **@react-three/drei 9.122.0** - Useful helpers for React Three Fiber
- **Framer Motion 11.18.2** - Production-ready animations

### UI Components & Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Radix UI** - Accessible, unstyled component primitives
- **Lucide React** - Beautiful & consistent icons
- **next-themes** - Theme management (dark/light mode)

### Additional Libraries
- **React Router DOM** - Client-side routing
- **TanStack Query** - Data fetching and caching
- **React Hook Form** - Form management
- **Zod** - Schema validation

---

## 📦 Installation

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn** or **bun**

### Steps

1. Clone the repository:
```bash
git clone https://github.com/Fady2024/compiler-phases-3d.git
cd compiler-phases-3d
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
bun dev
```

4. Open your browser and navigate to:
```
http://localhost:8080
```

---

## 🚀 Usage

### Development

Run the development server with hot reload:
```bash
npm run dev
```

### Build for Production

Create an optimized production build:
```bash
npm run build
```

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

### Linting

Run ESLint to check code quality:
```bash
npm run lint
```

---

## 📁 Project Structure

```
compiler-journey-3d-main/
├── public/                      # Static assets
│   ├── mixkit-cat-walk-371.mp3 # Background music
│   ├── placeholder.svg          # Placeholder images
│   └── robots.txt               # SEO robots file
├── src/
│   ├── components/              # React components
│   │   ├── BackgroundMusic.tsx  # Music player component
│   │   ├── ui/                  # Radix UI components
│   │   └── ...                  # Other components
│   ├── data/                    # Data files
│   ├── hooks/                   # Custom React hooks
│   ├── lib/                     # Utility functions
│   ├── pages/                   # Page components
│   │   ├── Index.tsx            # Main page
│   │   └── NotFound.tsx         # 404 page
│   ├── App.tsx                  # Root component
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles
├── index.html                   # HTML template
├── vite.config.ts              # Vite configuration
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Project dependencies
```

---

## 🔬 Compiler Phases

### 1. **Lexical Analysis (Tokenization)**
The scanner reads the source code and breaks it into tokens (keywords, identifiers, operators, etc.).

### 2. **Syntax Analysis (Parsing)**
The parser analyzes the token sequence to create a syntax tree, checking for grammatical correctness.

### 3. **Semantic Analysis**
Checks the meaning of the code, including type checking and scope resolution.

### 4. **Intermediate Code Generation**
Generates intermediate representation (IR) of the source code for optimization.

### 5. **Code Optimization**
Improves the intermediate code for better performance and resource utilization.

### 6. **Code Generation**
Translates optimized intermediate code into target machine code or assembly language.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Fady Gerges**

A passionate software developer and computer science enthusiast dedicated to creating educational tools and innovative solutions.

### Connect with Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/fady-gerges-kodsy/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Fady2024)
[![Facebook](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/fady.gerges.kodsy/)

### Links
- 🔗 LinkedIn: [linkedin.com/in/fady-gerges-kodsy](https://www.linkedin.com/in/fady-gerges-kodsy/)
- 🔗 GitHub: [github.com/Fady2024](https://github.com/Fady2024)
- 🔗 Facebook: [facebook.com/fady.gerges.kodsy](https://www.facebook.com/fady.gerges.kodsy/)

---

## 🙏 Acknowledgments

- Thanks to my professors and the Computer Science Department for inspiration
- The React and Three.js communities for excellent documentation
- All contributors who have helped improve this project

---

<div align="center">

**⭐ If you find this project helpful, please consider giving it a star!**

Made with ❤️ by [Fady Gerges](https://github.com/Fady2024)

</div>
