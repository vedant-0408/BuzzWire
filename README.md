# ⚡ Buzzwire – Real-Time Chat and Calling App

**Buzzwire** is a full-stack real-time chat application that enables users to exchange messages and initiate voice/video calls instantly. Built for speed, responsiveness, and scalability, Buzzwire combines modern technologies to deliver a seamless communication experience.

## 🚀 Features

- 🔐 Secure authentication and session management
- 💬 Real-time 1-on-1 messaging using WebSockets
- 📞 Voice and video calling powered by WebRTC
- 🟢 Online presence detection
- 🔔 Instant notifications for new messages and calls
- 📱 Responsive UI for desktop and mobile

## 🧰 Tech Stack

| Layer         | Technology                                |
| ------------- | ------------------------------------------ |
| **Frontend**  | Next.js, Tailwind CSS                     |
| **Backend**   | Node.js, Express                          |
| **Real-time** | Socket.IO, WebRTC                         |
| **Database**  | PostgreSQL (via Prisma ORM)               |
| **Auth**      | Firebase Authentication                   |
| **Other**     | Zustand, Axios, Firebase SDK              |

## 🗂️ Project Structure

```

buzzwire/
├── client/           # Next.js frontend
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── styles/
├── server/           # Express backend
│   ├── controllers/
│   ├── routes/
│   ├── sockets/
│   ├── prisma/       # Prisma schema & migration files
├── public/           # Static assets
├── .env              # Environment variables
└── README.md

````

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/buzzwire.git
cd buzzwire
````

### 2. Set Up Environment Variables

Create `.env` files in both `client/` and `server/` directories with the following keys:

#### In `server/.env`:

```env
DATABASE_URL=your_postgresql_connection_string
FIREBASE_API_KEY=your_firebase_api_key
JWT_SECRET=your_secret
```

#### In `client/.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_SOCKET_URL=http://localhost:5000
```

### 3. Install Dependencies

```bash
cd server
npm install
npx prisma generate
cd ../client
npm install
```

### 4. Run the App

In separate terminals:

```bash
# Start backend
cd server
npm run dev

# Start frontend
cd client
npm run dev
```

Visit `http://localhost:3000` to start chatting!

---

## 🧪 Planned Improvements

* ✅ Group chat functionality
* 🔍 Chat search and filtering
* 🌐 Language support (i18n)
* 🧾 Chat history export

