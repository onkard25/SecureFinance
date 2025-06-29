# 💼 GenAI-Powered Financial Support Platform
🔗 [Secure Finance](https://onkardsw.web.app/)

This project provides an AI-driven solution for customer assistance and insurance claim support in the BFSI (Banking, Financial Services, and Insurance) domain. It integrates powerful GenAI models from Google with an intuitive frontend to deliver a seamless, self-service experience for users.

---
# Problem Statement
Customers in the BFSI sector often face delays and confusion when seeking support or filing insurance claims due to manual processes and scattered resources. This project solves that by using GenAI to provide instant, clear, and personalized assistance through a unified web platform.

---
## 🔁 Overall Process of the Website

The platform consists of **three main components**:

1. **Frontend (React):**
   - A modern landing page that introduces the services.
   - Provides two clear Call-To-Action buttons: one for Customer Support and one for Insurance Claim queries.
   - Connects directly to the backend Streamlit applications.

2. **Customer Support Agent (Streamlit + Gemini Flash):**
   - Users can enter general banking queries (e.g., credit cards, loans, account issues).
   - Responses are powered by the Gemini 1.5 Flash model, formatted with structured, user-friendly explanations.

3. **Insurance Claim Assistant (Streamlit + Gemini Flash + FAQ Priming):**
   - Handles insurance-related questions like how to claim, required documents, and claim status tracking.
   - Supports provider-specific queries by generating clickable helpful links for portals like LIC, SBI, HDFC Ergo, etc.

---

## 🛠️ Tech Stack Used

| Layer     | Technologies Used                                |
|-----------|--------------------------------------------------|
| Frontend  | React, Tailwind CSS, Lucide Icons                |
| Backend   | Python, Streamlit                                |
| AI Model  | Google Gemini 1.5 Flash                          |
| Dev Tools | dotenv, npm, pip, Git                            |

---

## ⚙️ Setup Guide

### 1. Clone the Repository

```bash
git clone https://github.com/onkard25/SecureFinance.git
```

---

### 2. Run Backend (Streamlit)

#### a) Install dependencies

Go inside each backend folder and install:

```bash
cd Backend/Customer support
pip install -r requirements.txt
streamlit run app.py
```

In a new terminal:

```bash
cd Backend/Insurance Claim
pip install -r requirements.txt
streamlit run app.py
```

Make sure you have a `.env` file with your Gemini API Key:
```
GEMINI_API_KEY=your_api_key_here
```

---

### 3. Run Frontend (React)

#### a) Install and start React app

```bash
cd Frontend
npm install
npm run dev
```

---

