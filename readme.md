# Tahmid Alam Tamim — Developer Portfolio

A responsive, dark-mode developer portfolio built with React and Vite. It showcases my projects, technical skills, education, and contact information, with client-side navigation between the homepage, project catalog, and contact page.

> **Live Site:** [Visit My Portfolio](https://portfolio-website-ebon-delta-kmq9aeidnr.vercel.app/)

## Screenshots

<!-- TODO: Add screenshots to the repository, then replace these placeholders. -->

<img width="1754" height="869" alt="image" src="https://github.com/user-attachments/assets/89b0e5f0-45a7-448c-aca5-313f0bbee0dd" />
<img width="1225" height="884" alt="image" src="https://github.com/user-attachments/assets/142686dd-c776-4d72-a277-ffcbfe5c1ab5" />
<img width="1548" height="910" alt="image" src="https://github.com/user-attachments/assets/50275890-622f-4545-bdb0-9923ac18b8f3" />

## Features

- Responsive layouts for mobile, tablet, and desktop.
- Dark, developer-tool-inspired interface with an OKLCH color theme.
- Home page with an introduction, terminal-style profile snippet, featured projects, technical skills, and education.
- Filterable project catalog backed by local JSON data.
- Dedicated `/contact` route with a contact form and social links.
- React Router client-side navigation, with a Vercel rewrite for direct route access.
- Reusable UI primitives styled with Tailwind CSS.

## Tech stack

- React 18
- Vite 6
- React Router 6
- Tailwind CSS 3
- Lucide React
- React Icons
- Web3Forms for optional contact-form delivery
- Vercel static hosting

## Pages

| Route | Description |
| --- | --- |
| `/` | Introduction, featured projects, skills, and education |
| `/projects` | Searchable and tag-filterable project catalog |
| `/contact` | Contact form and direct contact details |

## Featured projects

Project details are maintained in [`src/data/projects.json`](./src/data/projects.json).

- **MentorChai** — Virtual mentorship platform and thesis project, built with Laravel. [Repository](https://github.com/Mr-Explorer142/MentorChai) · [Live application](https://mentorchai-production-cdw3if.laravel.cloud/)
- **PonnoKini** — Full-stack e-commerce application with a Laravel API and React storefront. [Repository](https://github.com/Mr-Explorer142/PonnoKini) · [Live application](https://ponno-kini.vercel.app)

## Run locally

### Requirements

- Node.js (LTS recommended)
- npm

### Install and start

```bash
npm install
npm run dev
```

Vite prints the local development URL after the server starts.

### Production build

```bash
npm run build
npm run preview
```

The static production output is generated in `dist/`.

## Contact form setup

The contact form uses Web3Forms. Without an access key, the form displays a configuration message and directs visitors to email instead.

1. Create a Web3Forms access key.
2. Set the following variable in a local `.env.local` file:

   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
   ```

3. Add the same variable in the Vercel project settings for production deployments.

The provided [`.env.example`](./.env.example) shows the required variable name. Do not commit real credentials.

## Deployment

This is a static Vite application and can be deployed to Vercel:

1. Import the repository into Vercel.
2. Use `npm run build` as the build command.
3. Use `dist` as the output directory.
4. Configure `VITE_WEB3FORMS_ACCESS_KEY` in the Vercel environment variables if contact form delivery is required.

The Vercel rewrite in [`vercel.json`](./vercel.json) serves the React application for client-side routes such as `/projects` and `/contact`.

## Project structure

```text
src/
├── components/
│   ├── ui/                 # Reusable button, card, badge, input, and textarea
│   ├── ContactSection.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   └── TerminalMockup.jsx
├── data/
│   ├── profile.js          # Portfolio owner contact and profile details
│   └── projects.json       # Project catalog data
├── pages/
│   ├── Catalog.jsx
│   └── Homepage.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## Contact

- **Email:** [tahmidalamtamim142@gmail.com](mailto:tahmidalamtamim142@gmail.com)
- **GitHub:** [Mr-Explorer142](https://github.com/Mr-Explorer142)
- **LinkedIn:** [Tahmid Alam Tamim](https://www.linkedin.com/in/tahmid-alam-tamim142)
