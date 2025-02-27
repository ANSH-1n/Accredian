# 🎓 Accredian Referral System

A modern full-stack referral system that enables users to refer friends to educational courses. Built with React, Material-UI, Node.js, and MySQL.

## 🌟 Features

- **Modern UI/UX**: Sleek, responsive interface with Material-UI components
- **Real-time Validation**: Robust form validation using Formik and Yup
- **Email Notifications**: Automated email system for both referrer and referee
- **Secure Database**: MySQL with Prisma ORM for data integrity
- **RESTful API**: Well-structured endpoints for referral management
- **Error Handling**: Comprehensive error handling and user feedback

## 🛠️ Tech Stack

### Frontend
- **Framework**: React.js with Vite
- **UI Library**: Material-UI (MUI) v5
- **Form Management**: Formik & Yup
- **Animations**: Framer Motion
- **HTTP Client**: Axios
- **State Management**: React Hooks

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **ORM**: Prisma
- **Database**: MySQL (Railway)
- **Email Service**: Nodemailer with Gmail
- **Security**: CORS, Environment Variables

## 🚀 Live Deployments

- **Frontend**: [https://testapp123.vercel.app](https://testapp123.vercel.app)
- **Backend**: [https://accredian-backend-qxle.onrender.com](https://accredian-backend-qxle.onrender.com)
- **Database**: Railway MySQL

## 📦 Project Structure

```bash
Accredian/
├── accredian-frontend-task/     # Frontend application
│   ├── src/
│   │   ├── components/          # React components
│   │   ├── utils/              # Utility functions
│   │   └── App.jsx             # Main application
│   ├── .env                    # Environment variables
│   └── package.json            # Dependencies
│
└── Accredian-backend-task/     # Backend application
    ├── src/
    │   ├── controllers/        # Request handlers
    │   ├── routes/            # API routes
    │   ├── utils/             # Helper functions
    │   └── index.js           # Entry point
    ├── prisma/                # Database schema
    ├── database.sql          # Database backup
    └── package.json          # Dependencies
```

## 🔧 Setup & Installation

1. **Clone the repository**
```bash
git clone https://github.com/ANSH-1n/Accredian.git
cd Accredian
```

2. **Frontend Setup**
```bash
cd accredian-frontend-task
npm install
cp .env.sample .env  # Configure environment variables
npm run dev
```

3. **Backend Setup**
```bash
cd Accredian-backend-task
npm install
cp .env.sample .env  # Configure environment variables
npx prisma generate
npm start
```

## 🌐 API Endpoints

- `POST /api/referrals/create`: Create a new referral
  - Validates referral data
  - Creates database entry
  - Sends email notifications

## 🔐 Environment Variables

### Frontend (.env)
```env
VITE_API_URL=your_backend_url
```

### Backend (.env)
```env
DATABASE_URL=your_mysql_url
GMAIL_USER=your_email
GMAIL_PASS=your_app_password
PORT=8000
```

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 👨‍💻 Author

**Ansh Jamwal**
- GitHub: [@ANSH-1n](https://github.com/ANSH-1n)

## 🙏 Acknowledgments

- Material-UI for the beautiful components
- Railway for database hosting
- Vercel and Render for deployments 