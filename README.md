<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
-->

# My React Portfolio

A modern, interactive personal portfolio built with React, Vite, and JSON-mapped content. All sections (projects, skills, experiences, contact) are dynamically generated from JSON, making updates effortless.

[![Vercel Deployment](https://vercelbadge.vercel.app/api/ishaanbillore13/my-react-portfolio)](https://my-react-portfolio-ishaan13.vercel.app)
![React](https://img.shields.io/badge/React-19.1.1-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.1.2-yellow?logo=vite)
![JSON Mapped](https://img.shields.io/badge/JSON-mapped-blueviolet?logo=json)
![NPM Version](https://img.shields.io/badge/npm-10.0.0-orange?logo=npm)


Live Demo: https://my-react-portfolio-ishaan13.vercel.app/

<h2>🌟 Features</h1>
<ul>
  <li>Fully responsive & mobile-friendly.</li>
  <li>JSON-mapped data for projects, skills, and sections — no hardcoding required.</li>
  <li>Interactive particle animations with tsparticles.</li>
  <li>Animated typing effects with react-type-animation.</li>
  <li>Smooth scrolling & scrollspy navigation.</li>
  <li>Circular progress bars to visualize skills.</li>
  <li>Dark/Light mode toggle.</li>
  <li>Fast development & production-ready builds with Vite.</li>
  <li>Integrated Vercel Analytics & Speed Insights.</li>
</ul>

<h2>🎨 Screenshot</h2>
<img width="1906" height="986" alt="image" src="https://github.com/user-attachments/assets/bd19c358-a8ce-47a5-8f8f-2ffb1bed04d4" />

<h2>🛠 Tech Stack</h2>
<ul>
  <li>Frontend: React, GSAP</li>
  <li>UI / Icons: Bootstrap Icons, React Icons</li>
  <li>Animations: react-type-animation, react-circular-progressbar, tsparticles</li>
  <li>Build / Dev Tools: Vite, ESLint</li>
  <li>Data Handling: JSON-mapped content</li>
</ul>

<h2>⚡ Installation</h2>

  ```bash
git clone https://github.com/ishaanbillore13/My-React-Portfolio.git
cd My-React-Portfolio
npm install
npm run dev
  ```
Open http://localhost:5173/ in your browser.

<h2>💾 JSON Data Structure</h2>

<h3>Skills Example:</h3>

  ```json
{
"heading": "Skills",
"skills": [
    {
      "title": "Programming Languages",
      "items": ["Java", "Javascript", "Typescript"],
      "competency": [80,75,75]
    },
    {
      "title": "Web Development Technologies",
      "items": ["Html", "Css", "Bootstrap", "MaterialUI"],
      "competency": [90,90,75,70]
    },
]
  ```

<h3>Experiences Example:</h3>

```json
{
    "heading" : "Relevant Professional Experience",
    "experience" : [
        {
            "companyName": "BMW Techworks India",
            "location": "Pune, India",
            "overallTimePeriod" : "November 2024 - Present",
            "roles" : [
                {
                    "role" : "Junior Software Developer",
                    "roleTimePeriod" : null,
                    "skills" : [
                        "Angular", 
                        "SpringBoot", 
                        "AWS", 
                        "Docker", 
                        "Kubernetes",
                        "GithubActions"
                    ],
                    "tasks": [
                        "Added Angular features for improved UX.",
                        "Deployed app to multiple regions using unified codebase and AWS.",
                        "Managed cross-linked cloud services for deployment and scalability."
                    ]
                } 
            ]
        }
    ]
}
```
Update Sources/ JSON files to add/remove projects, skills, or sections — no React code changes required.

<h2>⚙️ Build for Production</h2>

```bash
npm run build
```
Production-ready files are in dist/, ready for deployment on Vercel, Netlify, or any static hosting.

<h2>📁 Folder Structure</h2>

```csharp
MY-PORTFOLIO/
├─ .history
├─ dist
├─ node_modules
├─ public
├─ src
│  ├─ assets/        # Images, icons, other static files
│  ├─ Components/    # React components
│  ├─ Sources/       # JSON-mapped data and helper modules
│  ├─ App.css
│  ├─ App.jsx        # Main app component
│  ├─ index.css
│  └─ main.jsx       # React entry point
├─ .gitignore
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ README.md
└─ vite.config.js
```

<h2>🏗 Dependencies</h2>

<h3>Main</h3>

```markdown
- react ^19.1.1
- react-dom ^19.1.1
- @tsparticles/react ^3.0.0
- @tsparticles/engine ^3.9.1
- @tsparticles/slim ^3.9.1
- tsparticles ^3.9.1
- react-icons ^5.5.0
- react-type-animation ^3.2.0
- gsap ^3.13.0
- bootstrap-icons ^1.13.1
- @vercel/analytics ^1.5.0
- @vercel/speed-insights ^1.2.0
```

<h3>Dev</h3>

```markdown
- vite ^7.1.2
- @vitejs/plugin-react ^5.0.0
- eslint ^9.33.0
- @eslint/js ^9.33.0
- eslint-plugin-react-hooks ^5.2.0
- eslint-plugin-react-refresh ^0.4.20
- vite-plugin-svgr ^4.5.0
- @svgr/webpack ^8.1.0
- @types/react ^19.1.10
- @types/react-dom ^19.1.7
- globals ^16.3.0
```

<h2>Contributions</h2>

This repository is open for public use and contributions. You are welcome to:

```markdown
- Add new features or improve existing ones.
- Fix bugs or optimize code.
- Improve documentation or examples.
```

❌ **Do not** modify any personal files, including my resume, portfolio content, or any sensitive/private data.

Please fork the repository and submit pull requests for your changes. All contributions will be reviewed before merging.

<h2>📜 License</h2>

MIT License © Ishaan Billore



