# RND-IOB Application

This repository includes both the **Front-End** (React.js) and **Back-End** (Express.js) code bases.

---

## 🚀 Front-End Code Base

### 🔧 Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/2059052/RND-IOB.git
   cd RND-IOB
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm run dev
   ```

4. **Visit the App**
   - The React.js app will run at: [http://localhost:5173](http://localhost:5173)

> 💡 Keep the terminal tab open during your coding session.

---

## 🧩 Back-End Code Base

### 🔧 Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/2059052/RND-IOB.git
   cd RND-IOB
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm run start
   ```

4. **API Server Running At**
   - Express APIs will be available at: [http://localhost:3001](http://localhost:3001)

> ⚠️ To interact with the back-end, the front-end must be running and making requests to port `3001`.

## 🛢️ MongoDB Setup (Local Development)

### 📥 1. Install MongoDB

- **macOS (Homebrew):**
  ```bash
  brew tap mongodb/brew
  brew install mongodb-community@7.0
  ```

- **Ubuntu/Debian:**
  Follow the [MongoDB official install guide](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/)

- **Windows:**
  Download and install from: [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)

### ▶️ 2. Start MongoDB Locally

- **macOS/Linux (Homebrew/Systemd):**
  ```bash
  brew services start mongodb-community@7.0
  # or use:
  mongod
  ```

### ⚙️ 3. Connect Your App to MongoDB

In your Backend Express `.env` or config file, add:

```env
MONGO_URI=mongodb://localhost:27017/your-database
```


---

## 🛠 Tech Stack

- **Front-End**: React.js
- **Back-End**: Express.js
- **Package Manager**: npm
- **Local Ports**:
  - Front-End: `5173`
  - Back-End: `3001`

---

## 📌 Notes

- Ensure Node.js and npm are installed.
- Use separate terminal tabs for running the front-end and back-end concurrently.
