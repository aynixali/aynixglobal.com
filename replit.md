# Aynix - Premium Electronics Startup

## Overview

This is a full-stack TypeScript application featuring a cyberpunk-themed landing page for Aynix, a premium electronics startup. Aynix creates next-generation consumer electronics including smartphones, smartwatches, power banks, cooling devices, custom OS, and future electric vehicles. The application showcases a modern tech stack with a React frontend, Express backend, and PostgreSQL database integration using Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom cyberpunk theme (neon colors, glass effects)
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite with custom configuration for monorepo structure

### Backend Architecture
- **Runtime**: Node.js with Express framework
- **Language**: TypeScript with ES modules
- **Development**: tsx for development server with hot reload
- **Production**: esbuild for bundling

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon Database serverless)
- **Migrations**: Drizzle Kit for schema management
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development

## Key Components

### Frontend Components
- **Landing Page**: Cyberpunk-themed sections showcasing Aynix products (Hero, About, Products, Innovation Pipeline, Contact)
- **Custom UI Elements**: Loading screen with Matrix-style animations, glassmorphism effects, removed custom cursor for better performance
- **Responsive Design**: Mobile-first approach with breakpoint-aware components
- **Animation System**: Scroll-based reveal animations and CSS transitions
- **Product Showcase**: Sections for Aynix Phone, Watch, Power, Air, OS, and Motors

### Backend Infrastructure
- **Route Registration**: Centralized route management system
- **Storage Abstraction**: Interface-based storage layer supporting multiple implementations
- **Development Tools**: Request logging middleware and error handling
- **Vite Integration**: Development server with HMR support

### Database Schema
- **Users Table**: Basic user management with username/password fields
- **Type Safety**: Zod schemas for runtime validation
- **Insert/Select Types**: Automatically generated from Drizzle schema

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **Route Handling**: Express routes process requests through storage interface
3. **Data Layer**: Storage implementation handles CRUD operations
4. **Response**: JSON responses with error handling middleware

## External Dependencies

### Core Technologies
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Headless UI component primitives
- **wouter**: Lightweight routing library

### Development Tools
- **@replit/vite-plugin-***: Replit-specific development plugins
- **drizzle-kit**: Database schema management
- **tailwindcss**: Utility-first CSS framework

### UI/UX Libraries
- **class-variance-authority**: Component variant management
- **clsx**: Conditional CSS class names
- **date-fns**: Date manipulation utilities

## Deployment Strategy

### Development Environment
- **Hot Reload**: Vite dev server with React Fast Refresh
- **Database**: In-memory storage for rapid development
- **Error Handling**: Runtime error overlay for debugging

### Production Build
- **Frontend**: Vite builds static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Database**: PostgreSQL with connection pooling via environment variables

### Environment Configuration
- **DATABASE_URL**: Required for PostgreSQL connection
- **NODE_ENV**: Controls development vs production behavior
- **REPL_ID**: Enables Replit-specific development features

## Company Vision
Aynix is Pakistan's most futuristic tech startup, based in Islamabad, revolutionizing everyday electronics. Our mission is "Engineering the Elite Future of Technology." Our products include:
- **Aynix Phone**: Flagship Android smartphone with custom AynixOS skin and premium design
- **Aynix Laptop Series**: Premium lightweight laptops with elite specs and AynixOS (Coming Soon)
- **Aynix Watch**: Powerful, minimal smartwatch
- **Aynix Power**: Fast-charging power banks
- **Aynix Air**: Next-gen mini fans & personal coolers
- **AynixOS**: Custom operating system for all devices
- **Aynix Motors**: Future electric vehicle technology

Our global vision is to become a tech powerhouse, starting from elite laptops and smart devices, but dreaming beyond into electric cars, wearables, and intelligent ecosystems.

Contact: aynixofficial@gmail.com | Islamabad, Pakistan

The application follows a monorepo structure with clear separation between client, server, and shared code, making it easy to maintain and scale while preserving the cyberpunk aesthetic and premium electronics startup theme.