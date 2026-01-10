# Satyam Gupta's Portfolio

A modern, interactive portfolio website built with React, TypeScript, and Tailwind CSS.

## Technologies Used

- **Vite** - Lightning-fast build tool
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn-ui** - Beautiful, accessible components
- **Framer Motion** - Smooth animations

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or bun

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd satyamguptaportfolio

# Install dependencies
npm install
# or
bun install
```

### Development

```sh
# Start the development server
npm run dev
# or
bun run dev
```

Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

## Deployment

You can deploy this portfolio to any of these platforms:

### Vercel (Recommended)

1. Push your repository to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project" and select your repository
4. Vercel will auto-detect the settings and deploy

### Netlify

1. Push your repository to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "New site from Git" and select your repository
4. Set build command to `npm run build` and publish directory to `dist`
5. Deploy

### GitHub Pages

1. Update `vite.config.ts` with your repository name as the `base`
2. Run `npm run build`
3. Push the `dist` folder to the `gh-pages` branch
4. Enable GitHub Pages in repository settings

### Static Hosting (AWS S3, Google Cloud Storage, etc.)

1. Run `npm run build`
2. Upload the `dist` folder to your hosting service
3. Configure to serve `index.html` for all routes

## Build

```sh
npm run build
```

Creates an optimized production build in the `dist` folder.

## License

This project is open source and available under the MIT License.
