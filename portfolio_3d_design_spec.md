# Specification: Interactive 3D Scroll-Based Portfolio Design

This document details the current state of the portfolio codebase and outlines the design and animation objectives for the next implementation phase.

---

## 💻 Current Codebase State

The portfolio has been fully refactored from a single monolithic file into a **clean, modular React + Vite codebase** styled with **Tailwind CSS v4** and **Framer Motion**.

### Folder & File Structure:
*   `src/main.jsx`: Application entry.
*   `src/App.jsx`: Main container shell that wraps and mounts the sections.
*   `src/index.css`: Tailwind imports and custom animations (aurora background gradients, orbit paths, text shimmer).
*   `src/hooks/useScrambleText.js`: Custom hook for scrambling characters.
*   `src/components/Sidebar.jsx`: Floating navigation bar.
*   `src/components/Hero.jsx`: Landing section featuring scramble name text, 3D tilt photo orbit rings, and floating stats.
*   `src/components/About.jsx`: About section displaying personal bio, metrics, and core philosophy.
*   `src/components/Skills.jsx`: Technical skills section rendering a Recharts Radar chart alongside categorized toolkit cards.
*   `src/components/Projects.jsx`: Featured projects showing source code/demo links.
*   `src/components/Experience.jsx`: Split columns showing education and work history timelines.
*   `src/components/Certificates.jsx`: Visual badges representing professional credentials.
*   `src/components/Contact.jsx`: Integrated contact form linked with EmailJS.
*   `src/components/Footer.jsx`: Social copyright bar.

---

## 🎨 New Design Requirements: Interactive 3D Scroll Narrative

The objective is to replace the linear static background styling with a **cinematic, scroll-based 3D animation interface**.

### 🚫 Design Restrictions:
*   **No Particle Backgrounds**: Avoid simple floating points/particles canvas systems (like `ParticleNetwork.jsx`). The client prefers solid, volumetric shapes and meshes.

### 🌟 Key Elements to Implement:

#### 1. Scroll-Controlled 3D Mesh Animation
*   Implement a central WebGL scene (using **Three.js** or **React Three Fiber**) or a high-end CSS 3D Parallax system (using **Framer Motion** scroll hooks or **GSAP ScrollTrigger**).
*   The scene should display a solid 3D asset (e.g., an abstract geometric wireframe sphere, a tech hardware chip, or a neural network construct).
*   **Scroll Binding**: As the user scrolls down, the 3D model must rotate, zoom in/out, translate along a camera path, or scale dynamically, aligning its positions with each scrolling section.

#### 2. Atmospheric 2-Second Loop Videos
*   Integrate atmospheric looping videos (like `/Character_sitting_at_workstation_202606011152.mp4` located in the `public/` directory).
*   The video should serve as an immersive viewport backdrop (e.g., opacity `0.15` - `0.2` on dark background) that fades or transitions as different sections are reached.

#### 3. Transition Animation Polish
*   Section text headers (e.g. "About Me", "Featured Projects") should fade and translate on scroll-trigger points.
*   Interactive elements (like the Radar chart and project cards) should possess 3D card tilt transformations when hovered.

---

## 🚀 Guidelines for the Next Agent
1.  **Maintain Modularity**: Keep the code split into the existing components under `src/components/`. Do not bundle them back into `App.jsx`.
2.  **Add Dependencies Wisely**: Install `three`, `@react-three/fiber`, `@react-three/drei`, or `gsap` if you decide to implement a custom WebGL 3D scroll environment.
3.  **Run Build Checks**: Always run `npm run lint` and `npm run build` after editing to ensure the code stays clean and warning-free.
