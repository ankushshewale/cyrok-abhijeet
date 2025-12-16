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
│   ├── components/              # Reusable layout components
│   │   ├── header/              # Navigation header
│   │   ├── footer/              # Site footer
│   │   └── scroll-to-top/       # Scroll-to-top button
│   ├── pages/                   # Page-level standalone components
│   │   ├── home/                # Homepage
│   │   ├── about/               # About us
│   │   ├── services/            # Services overview
│   │   ├── service-detail/      # /services/:slug detail pages
│   │   ├── solutions/           # Solutions overview
│   │   ├── solution-detail/     # /solutions/:slug detail pages
│   │   ├── products/            # Products page
│   │   ├── industries/          # Industries overview
│   │   ├── industry-detail/     # /industries/:slug detail pages
│   │   └── contact/             # Contact page with reactive form
│   ├── app.ts                   # Root application component
│   ├── app.html                 # Root application template
│   ├── app.routes.ts            # Client-side routes
│   ├── app.routes.server.ts     # Server-side render mode config
│   ├── app.config.ts            # Client app configuration
│   └── app.config.server.ts     # Server app configuration
├── assets/                      # Static assets (images, etc.)
├── styles.scss                  # Global styles & design tokens
├── main.ts                      # Browser bootstrap
├── main.server.ts               # Server bootstrap
└── server.ts                    # Express SSR entrypoint
```

## 🌐 Available Routes

- `/` - Homepage
- `/about` - About CYROK Technologies
- `/services` - Services overview
- `/services/:slug` - Individual service detail pages (SSR, server-rendered)
- `/solutions` - Solutions & offerings
- `/solutions/:slug` - Individual solution detail pages (SSR, server-rendered)
- `/products` - Products catalog
- `/industries` - Industries we serve
- `/industries/:slug` - Individual industry detail pages (SSR, server-rendered)
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
- **Routing**:
  - Static routes like `/services`, `/solutions`, `/industries` are prerendered.
  - Dynamic detail routes `/services/:slug`, `/solutions/:slug`, `/industries/:slug` are configured with `RenderMode.Server` in `app.routes.server.ts` to avoid prerender errors.
- **Styling & Design System**:
  - Global tokens and theme variables are defined in `styles.scss` (colors, spacing, typography, shadows).
  - Buttons reuse shared classes `.btn`, `.btn-primary`, `.btn-secondary`, and size modifiers such as `.btn-large` / `.btn-small`.
  - Card-like UI uses the shared `.card` class; feature-specific cards extend this rather than redefining base colors.

## 📄 License

Private project - CYROK Technologies
