# RaiderCare

## Project Description

RaiderCare is a student-focused health navigation web application built for HackWesTX at Texas Tech University.

The platform helps users:

- Describe their symptoms
- Understand possible next steps
- Identify an appropriate type of healthcare professional
- Access emergency and mental-health resources
- Find university and nearby healthcare services

RaiderCare provides health navigation and educational guidance. It does not provide medical diagnoses or replace professional medical care.

## Care Levels

RaiderCare organizes health guidance into four care levels:

1. **Emergency** — Call 911 immediately
2. **Urgent** — Seek same-day urgent care
3. **Non-urgent** — Schedule a university clinic appointment
4. **Health Counseling** — Connect with mental-health or counseling resources

## Tech Stack

- Astro
- TypeScript
- JavaScript
- HTML
- CSS
- Vite
- Auth0
- Google Gemini API
- Gemini 3.8 Flash

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/vishalthapa07/raider_care.git
```

### 2. Open the project directory

```bash
cd raider_care
```

### 3. Install project dependencies

```bash
npm install
```

### 4. Install Auth0

```bash
npm install @auth0/auth0-spa-js
```

### 5. Install the Google Gemini SDK

```bash
npm install @google/genai
```

## Environment Variables

Create a file named `.env` inside the root directory of the project.

```env
PUBLIC_GEMINI_API_KEY=YOUR_GEMINI_API_KEY
PUBLIC_GEMINI_MODEL=YOUR_GEMINI_MODEL
PUBLIC_AUTH0_DOMAIN=YOUR_AUTH0_DOMAIN
PUBLIC_AUTH0_CLIENT_ID=YOUR_AUTH0_CLIENT_ID
```

Do not commit your real `.env` file to GitHub.

Add the following files to `.gitignore`:

```gitignore
.env
.env.production
```

## Run the Project

Start the Astro development server:

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:4321
```

## Medical Disclaimer

RaiderCare is intended for educational and health-navigation purposes only. It does not diagnose medical conditions, prescribe medication, or replace advice from a qualified healthcare professional.

For a life-threatening emergency, call **911**.

For a mental-health or suicide crisis, call or text **988**.
