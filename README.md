# Claude Portfolio

A sleek, dark-themed AI portfolio built with **React 18** + **Tailwind CSS 3** + **Vite 5**.

---

## ✨ Features

- Animated typing hero with role cycling
- Scroll-triggered skill bar animations
- Sticky glassmorphism navbar with active section tracking
- Smooth scroll navigation
- Teal + navy + lavender design system
- Responsive grid layout
- Reduced-motion support
- Custom scrollbar

---

## 🗂 Project Structure

```
claude-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Stats.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── SkillBar.jsx
│   │   ├── Work.jsx
│   │   └── Contact.jsx
│   ├── hooks/
│   │   └── useTypingEffect.js
│   ├── App.jsx
│   ├── data.js
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## 📧 Contact Form Setup (EmailJS)

The Contact section has a working form that sends messages straight to your inbox — no backend needed.

### 1. Create a free EmailJS account
Go to [emailjs.com](https://www.emailjs.com) and sign up.

### 2. Connect your email
**Email Services → Add New Service** → connect Gmail (or any provider).
Copy the **Service ID**.

### 3. Create a template
**Email Templates → Create New Template**, using these variables:
```
Subject: New message from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}
```
Copy the **Template ID**.

### 4. Get your Public Key
**Account → General** → copy the **Public Key**.

### 5. Paste your keys
Open **`src/emailConfig.js`** and replace the placeholders:

```js
export const EMAILJS_SERVICE_ID = 'service_xxxxxxx'
export const EMAILJS_TEMPLATE_ID = 'template_xxxxxxx'
export const EMAILJS_PUBLIC_KEY = 'xxxxxxxxxxxxxxx'
```

Save, restart `npm run dev`, and the form will send real emails. EmailJS's free tier allows 200 emails/month.

---

## 🔗 Social Media Links

Open **`src/socialLinks.js`** and replace the placeholder URLs with your own GitHub, LinkedIn, Twitter, and Instagram profiles:

```js
export const socialLinks = [
  { name: 'GitHub',    href: 'https://github.com/yourusername',    icon: 'github' },
  { name: 'LinkedIn',  href: 'https://linkedin.com/in/yourusername', icon: 'linkedin' },
  { name: 'Twitter',   href: 'https://twitter.com/yourusername',   icon: 'twitter' },
  { name: 'Instagram', href: 'https://instagram.com/yourusername', icon: 'instagram' },
]
```

---



### 1. Install dependencies

```bash
npm install
```

### 2. Start dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production

```bash
npm run build
```

Output goes to `dist/`.

### 4. Preview production build

```bash
npm run preview
```

---

## 🎨 Customisation

All portfolio content (roles, stats, skills, projects) lives in **`src/data.js`** — edit that file to make it your own.

Colors and fonts are defined in **`tailwind.config.js`** under `theme.extend`.

---

## 🛠 Tech Stack

| Tool | Version |
|------|---------|
| React | 18.3 |
| Tailwind CSS | 3.4 |
| Vite | 5.4 |
| PostCSS | 8.4 |
| Autoprefixer | 10.4 |

---

## 📄 License

MIT — free to use and adapt.
