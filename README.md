# XSha Random Manager
[![Netlify Status](https://api.netlify.com/api/v1/badges/ad8e0e19-c15c-4169-909d-261b91fcbfd6/deploy-status)](https://app.netlify.com/projects/xsharandomnumgenerator/deploys)
[![CI](https://github.com/Xanonymous-GitHub/xsha-random-number-generator/actions/workflows/ci.yml/badge.svg)](https://github.com/Xanonymous-GitHub/xsha-random-number-generator/actions/workflows/ci.yml)

A modern, accessible random number generator built with React 19+, TypeScript, and TailwindCSS. Features cryptographically secure random generation with a polished, responsive interface

## ✨ Features

- **Cryptographically Secure**: Uses Web Crypto API for true randomness
- **Accessible Design**: Full WCAG compliance with semantic markup and keyboard navigation
- **Modern UI**: Clean interface with dark/light theme detection and smooth animations
- **Responsive Layout**: Optimized for all screen sizes from mobile to desktop
- **Real-time Validation**: Instant feedback with comprehensive error handling
- **Performance Optimized**: React 19 features including concurrent rendering and deferred values

## 🚀 Quick Start

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 24+

### Installation & Development

```bash
# Clone the repository
git clone <repository-url>
cd xsha-random-number-generator

# Install dependencies
bun install

# Start development server
bun run dev
```

Visit `http://localhost:5173` to see the application running.

### Build for Production

```bash
# Create production build
bun run build

# Preview production build
bun run preview
```

## 🛠️ Tech Stack

### Core Technologies
- **React 19** - Latest React with concurrent features
- **TypeScript 5** - Strict type checking and modern language features
- **Vite 7** - Fast build tool and development server

### UI & Styling
- **TailwindCSS 4** - Utility-first CSS framework with integrated Vite plugin
- **Radix UI** - Accessible component primitives
- **shadcn/ui** - Pre-built component system
- **Lucide React** - Beautiful, customizable icons

### Development Tools
- **Biome 2** - Fast formatter and linter
- **ESLint 9** - Code quality and consistency
- **Husky** - Git hooks for automated quality checks
- **TypeScript ESLint** - TypeScript-specific linting rules

### Validation & Utilities
- **Zod 4** - Runtime type validation
- **clsx & tailwind-merge** - Conditional class name utilities

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                    # shadcn/ui components (Button, Card, etc.)
│   ├── AppFooter.tsx         # Application footer component
│   ├── AppHeader.tsx         # Application header with branding
│   ├── GenerateButton.tsx    # Primary action button
│   ├── NumberDisplay.tsx     # Random number result display
│   ├── RangeInput.tsx        # Min/max input components
│   └── RandomNumberGenerator.tsx # Main generator component
├── hooks/
│   ├── use-theme.ts          # Theme detection and management
│   └── useRandomNumberGenerator.ts # Core generator logic and state
├── lib/
│   └── utils.ts              # Utility functions and helpers
├── App.tsx                   # Root application component
├── main.tsx                  # Application entry point
└── index.css                 # Global styles and TailwindCSS imports
```

## 🎯 Key Features Explained

### Cryptographically Secure Random Generation
Uses the Web Crypto API (`crypto.getRandomValues()`) for true randomness suitable for security-sensitive applications, with fallback to `Math.random()` if unavailable.

### Accessibility First
- Semantic HTML structure with proper ARIA labels
- Keyboard navigation support
- Screen reader optimized announcements
- High contrast support in both light and dark themes

### Modern React Patterns
- Custom hooks for business logic separation
- `useDeferredValue` for performance optimization
- `memo` for component optimization
- Proper TypeScript integration throughout

### Responsive Design
- Mobile-first approach with progressive enhancement
- Fluid grid layouts using CSS Grid
- Optimized for touch interactions on mobile devices

## 🧪 Development Workflow

### Code Quality
All code changes are automatically validated through:

```bash
# Run all quality checks
bun run lint

# Auto-fix formatting and linting issues
bun run lint:fix
```

### Pre-commit Hooks
- Automatic linting and formatting on commit
- TypeScript compilation validation
- Build verification

### Commands

| Command            | Description                       |
|--------------------|-----------------------------------|
| `bun run dev`      | Start development server with HMR |
| `bun run build`    | Build for production              |
| `bun run preview`  | Preview production build          |
| `bun run lint`     | Run Biome + ESLint checks         |
| `bun run lint:fix` | Auto-fix formatting and linting   |
| `bun install`      | Install dependencies              |
| `bun run prepare`  | Setup git hooks                   |

## 🎨 Design System

The application uses a cohesive design system with:

- **Typography**: Inter font family for optimal readability
- **Color Palette**: Carefully crafted slate and blue color schemes
- **Spacing**: Consistent 8px grid system
- **Shadows**: Layered shadow system for depth
- **Animations**: Smooth transitions and micro-interactions

## 🚀 Performance Features

- **Code Splitting**: Automatic chunking for optimal loading
- **Tree Shaking**: Dead code elimination in production builds
- **Bundle Optimization**: Minified HTML, CSS, and JavaScript
- **Modern JavaScript**: ES2022 target with native module support

## 🔒 Security

- Cryptographically secure random number generation
- Input validation with Zod schemas
- XSS protection through React's built-in sanitization
- Content Security Policy ready

## 📱 Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Features**: Progressive enhancement for older browsers

## 🤝 Contributing

1. Ensure you have Bun installed
2. Run `bun install` to install dependencies
3. Create a feature branch
4. Make your changes following the existing patterns
5. Run `bun run lint:fix` to ensure code quality
6. Test your changes with `bun run build`
7. Submit a pull request

### Code Style
- **TypeScript**: Strict mode enabled
- **Formatting**: Biome with 2-space indentation
- **Imports**: Organized with absolute paths using `@/*` aliases
- **Components**: Functional components with proper TypeScript types

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
