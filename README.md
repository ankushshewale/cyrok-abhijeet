# CYROK Technologies - Company Website

Official website for CYROK Technologies - a future-ready IT services and solutions provider delivering secure, scalable, and ethical technology across enterprises, digital infrastructure, and advanced computing systems.

## 🚀 Tech Stack

- **Angular** 21.0.0
- **TypeScript** 5.9.2
- **Angular SSR** (Server-Side Rendering)
- **Express** 5.1.0
- **Vitest** (Testing)

## 📋 Prerequisites

- **Node.js** (v20 or higher recommended)
- **npm** 11.6.2 (package manager)

## 🛠️ Setup & Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd cyrok-abhijeet
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 🏃 Development

### Start Development Server

```bash
npm start
# or
ng serve
```

The application will be available at `http://localhost:4200/` and will automatically reload when you make changes.

### Build for Production

```bash
npm run build
```

This compiles the project and stores the build artifacts in the `dist/` directory.

### Build with Watch Mode

```bash
npm run watch
```

Builds the project in watch mode for development.

### Run Tests

```bash
npm test
# or
ng test
```

Runs unit tests using Vitest.

### Serve SSR Build

```bash
npm run serve:ssr:cyrok
```

Starts the Node.js Express server with the SSR build (requires building first).

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # Reusable components
│   │   ├── header/         # Navigation header
│   │   └── footer/         # Site footer
│   ├── pages/              # Page components
│   │   ├── home/           # Homepage
│   │   ├── about/          # About us
│   │   ├── services/       # Services page
│   │   ├── solutions/      # Solutions page
│   │   ├── products/       # Products page
│   │   ├── industries/     # Industries page
│   │   └── contact/        # Contact page
│   ├── app.ts              # Root component
│   ├── app.routes.ts       # Application routes
│   └── app.config.ts       # App configuration
├── assets/                 # Static assets (images, etc.)
└── styles.css              # Global styles
```

## 🌐 Available Routes

- `/` - Homepage
- `/about` - About CYROK Technologies
- `/services` - Services overview
- `/solutions` - Solutions & offerings
- `/products` - Products catalog
- `/industries` - Industries we serve
- `/contact` - Contact us

## 📝 Key Features

- ✅ Server-Side Rendering (SSR) for better SEO
- ✅ Responsive design
- ✅ Modern Angular standalone components
- ✅ Optimized production builds

## 🔧 Configuration

- **Angular Config**: `angular.json`
- **TypeScript Config**: `tsconfig.json`
- **Package Manager**: npm (configured in `package.json`)

## 📄 License

Private project - CYROK Technologies
