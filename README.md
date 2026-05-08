# SST - Sree Sai Traders Web Application

## 📁 Project Structure

```
sst-app/
├── client/                     # React + Vite Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── WhatsAppButton.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Products.jsx
│   │   │   ├── AdminLogin.jsx
│   │   │   └── AdminPanel.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
│
└── server/                     # Node.js + Express Backend
    ├── src/
    │   └── index.js
    └── package.json
```

## 🚀 Setup Instructions

### Prerequisites
- Node.js v18+ installed
- npm installed

---

### Step 1: Setup the Server

```bash
cd sst-app/server
npm install
```

### Step 2: Setup the Client

```bash
cd sst-app/client
npm install
```

---

### Step 3: Run the Application

**Terminal 1 — Start the Backend Server:**
```bash
cd sst-app/server
npm run dev
# Server runs on http://localhost:5000
```

**Terminal 2 — Start the Frontend:**
```bash
cd sst-app/client
npm run dev
# App runs on http://localhost:5173
```

Open your browser at **http://localhost:5173**

---

## 🔐 Admin Credentials

- **Email:** admin@sst.com
- **Password:** sst@admin2024

Admin Panel URL: http://localhost:5173/admin

---

## 📱 Features

| Feature | Details |
|---|---|
| 🏠 Home | Hero section, stats, product highlights, CTA |
| ℹ️ About | Company story, values, contact info |
| 🛒 Products | 14 products with category filter dropdown |
| 📞 Contact | Enquiry form saved to backend |
| 🔐 Admin Login | Email + password authentication |
| 📊 Admin Panel | View/track/manage all customer enquiries |
| 💬 WhatsApp | Floating button → direct message to 9894868478 |
| 📱 Responsive | Mobile-first design |

## 🎨 Tech Stack

- **Frontend:** React 18, Vite, React Router DOM, TailwindCSS
- **Backend:** Node.js, Express.js
- **Styling:** TailwindCSS (red & white theme)
- **Fonts:** Playfair Display + Nunito (Google Fonts)
