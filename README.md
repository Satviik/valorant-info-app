# Valorant Info App

A React + Vite application that provides detailed information about Valorant agents, maps, and weapons.

## Features

- **Agents Page**: Browse all playable Valorant agents with detailed information
- **Agent Details Page**: View individual agent stats, abilities, and descriptions
- **Maps Page**: Explore all Valorant maps
- **Weapon Details Page**: Get comprehensive information about weapons including stats, damage ranges, and available skins

## Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS & PostCSS
- **Routing**: React Router
- **Package Manager**: pnpm
- **Linting**: ESLint

## Pages Overview

### Main Page (`/`)
Landing page with navigation to other sections.

### Agents Page (`/agents`)
Grid layout displaying all playable Valorant agents. Click on any agent to view detailed information.

### Agent Details Page (`/agents/:id`)
Detailed view of a specific agent including:
- Agent portrait and full-size artwork
- Role and description
- Ability information
- Back navigation

### Maps Page (`/maps`)
Grid layout showcasing all Valorant maps with their artwork.

### Weapon Details Page (`/weapons/:id`)
Comprehensive weapon information with the following features:

**Layout:**
- **Left Section**: Features the weapon image (75vh height) with a skin carousel below
- **Right Section**: Contains weapon stats and damage information

**Features:**
- Weapon image display
- **Stats Section**: 
  - Fire Rate
  - Magazine Size
  - Reload Time
  - Wall Penetration
- **Damage Section**: Range-based damage breakdown
  - Head, body, and leg damage for different ranges
- **Skin Carousel**: 
  - Navigate through available weapon skins using arrow buttons
  - Displays skin name and preview image
  - Automatic filtering of valid skins
- **Back Button**: Navigate back to previous page

## Project Structure

```
src/
├── Pages/
│   ├── MainPage.jsx
│   ├── Agentgridpage.jsx
│   ├── AgentDetails.jsx
│   ├── Mapsgridpage.jsx
│   └── WeaponDetails.jsx
├── components/
│   ├── AgentCard.jsx
│   └── MapCard.jsx
├── services/
│   └── api.js
├── App.jsx
├── main.jsx
└── index.css
```

## API Integration

This app uses the [Valorant API](https://valorant-api.com/) to fetch:
- Agent data and details
- Map information
- Weapon specifications and skins

## Getting Started

### Installation

```bash
pnpm install
```

### Development Server

```bash
pnpm run dev
```

### Build

```bash
pnpm run build
```

### Preview Build

```bash
pnpm run preview
```

## Styling

- Tailwind CSS for utility-first styling
- Dark theme with black background and white text
- Responsive grid layouts
- Smooth hover effects and transitions

## License

See LICENSE file for more information.
