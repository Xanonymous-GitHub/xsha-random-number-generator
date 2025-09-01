# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

XSha Random Manager - A React-based random number generator application built with TypeScript, Vite, and modern tooling. Currently in early development with minimal implementation.

**Tech Stack:**
- React 19 with TypeScript 5.9
- Vite 7 for build tooling
- TailwindCSS 4 for styling
- Biome 2 + ESLint 9 for code quality
- Radix UI components with shadcn/ui
- Lucide React icons
- Zod 4 for validation

## Essential Commands

### Development
- `bun run dev` - Start development server with hot reload
- `bun run build` - Build for production (TypeScript + Vite)
- `bun run preview` - Preview production build

### Code Quality  
- `bun run lint` - Run Biome + ESLint checks (use before commits)
- `bun run lint:fix` - Auto-fix formatting and linting issues
- `bun run lint:fix` - **REQUIRED**: Run after EVERY task completion iteratively until all errors/warnings fixed

### Package Management
- `bun install` - Install dependencies
- `bun run prepare` - Setup git hooks (Husky)

## Code Architecture & Conventions

### TypeScript Configuration
- **Strict mode enabled** with comprehensive error checking
- ESNext target with modern features
- React JSX transform (react-jsx)
- No unused locals/parameters allowed
- Verbatim module syntax enforced

### Code Style
- **2-space indentation** (Biome enforced)
- **Double quotes** for JavaScript strings
- **Import organization** automatic on save
- **Strict linting** with Biome + ESLint + React rules

### Project Structure
```
src/
├── App.tsx              # Main React component
├── main.tsx             # App entry point
├── index.css            # Global styles (TailwindCSS imports)
├── lib/
│   └── utils.ts         # Utility functions (clsx, cn helper)
├── components/
│   └── ui/
│       └── button.tsx   # shadcn/ui Button component
└── vite-env.d.ts        # Vite types
```

## MCP Tools & Modern Development Practices

### **MANDATORY**: Use MCP Tools for Enhanced Development
**STRONGLY RECOMMENDED** to leverage specialized MCP servers for optimal performance:

- **Context7**: Use for official documentation, framework patterns, API references
  - React, TypeScript, Vite documentation
  - Latest best practices and patterns
  - Version-specific implementation guides

- **Sequential Thinking (`--think-hard`)**: Use for complex analysis and system design
  - Architecture decisions
  - Performance optimization planning
  - Multi-component problem solving

- **Serena**: Use for semantic code understanding and project memory
  - Large codebase navigation
  - Symbol operations and refactoring
  - Session persistence and context retention

- **Magic**: Use for UI component tasks and frontend development
  - React component generation
  - Modern UI patterns and design systems
  - Accessibility-compliant implementations

- **Morphllm-Fast-Apply**: Use for efficient bulk code transformations
  - Multi-file pattern updates
  - Code style enforcement
  - Framework migration tasks

### **CRITICAL**: Never Trust Memory for "Modern/Latest" Requirements
**ALWAYS verify current information** when dealing with:
- **"Modern" or "latest" practices** - Get fresh documentation from Context7/web
- **API references** - Verify current syntax and patterns
- **Framework versions** - Check for breaking changes and new features
- **Best practices** - Ensure recommendations are current

### Modern Development Requirements
- **Follow latest best practices** for React 19, TypeScript 5.x, Vite 7.x
- **Use current patterns** - Verify with Context7 before implementation
- **Stay updated** - Don't rely on training data for current practices
- **Validate approaches** - Cross-reference with official documentation

## Development Workflow

### Quality Gates (Required)
1. **TypeScript compilation** must pass (`tsc -b`)
2. **Linting** must pass (`bun run lint`)
3. **Production build** must work (`bun run build`)

### **MANDATORY**: Post-Task Quality Protocol
**After EVERY task completion:**
1. **Run iteratively**: `bun run lint:fix`
2. **Fix ALL errors and warnings** - no exceptions
3. **Repeat until clean** - continue until zero issues
4. **Verify build** - ensure `bun run build` succeeds
5. **Only then** proceed to next task

### Git Workflow
- **Pre-commit hooks** automatically run lint-staged
- **Lint-staged** runs quality checks on staged files
- **Failed linting blocks commits**

### Task Completion Checklist
**REQUIRED sequence for every task:**
1. Complete implementation
2. Run `bun run lint:fix` iteratively until all errors/warnings resolved
3. Test production build (`bun run build`)
4. Use MCP tools (Context7, Sequential, etc.) for validation
5. Confirm modern best practices followed
6. Only then mark task as complete

## Current Implementation Status

**Enhanced Setup**: Modern React + TypeScript foundation with:
- TailwindCSS 4 for utility-first styling with integrated Vite plugin
- shadcn/ui component system with Radix UI primitives
- Lucide React icons for consistent iconography
- Path aliases configured (`@/*` → `./src/*`)
- HTML minification in production builds
- Single page application (no routing yet)
- No state management beyond React built-ins  
- No testing framework configured
- No API layer or backend integration

**Production Ready**: Fully configured development environment with modern UI framework, styling system, quality tools, git hooks, and deployment-ready build process.

## Auto-Memory Management

### Memory Update Instructions
**CRITICAL**: This CLAUDE.md file and project memories MUST be kept current with any changes. After ANY modification to the codebase:

1. **Auto-Update Memories**: Use `write_memory()` to update relevant memory files:
   - `project_overview.md` - Project purpose, tech stack changes
   - `code_style_conventions.md` - Linting, formatting, TypeScript config changes
   - `suggested_commands.md` - New bun scripts, build processes
   - `task_completion_checklist.md` - Quality gates, workflow changes
   - `project_structure.md` - Directory structure, architecture changes

2. **Auto-Update CLAUDE.md**: Immediately update this file to reflect:
   - New dependencies or tech stack changes
   - Modified build/development commands
   - Updated code conventions or linting rules  
   - Changed project structure or architecture
   - New quality gates or workflow requirements

3. **Update Triggers**: Update memories and CLAUDE.md when:
   - `package.json` dependencies change
   - Configuration files modified (tsconfig, vite.config, biome.json, eslint.config)
   - New directories or major files added
   - Development workflow or commands change
   - Code style or linting rules updated

### Memory Sync Protocol
- **Before completing any task**: Verify CLAUDE.md accuracy
- **After major changes**: Update both memories and CLAUDE.md
- **Session end**: Ensure documentation reflects current project state
- **New features**: Update architecture notes and suggested commands

**Note**: Future Claude Code instances rely on this documentation being accurate and current. Always maintain synchronization between actual codebase state and documentation.