<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/scikit_learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white" alt="Scikit-Learn" />
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" />
</div>

<h1 align="center">PharmaSense</h1>
<p align="center">
  <strong>Intelligent AI-Powered Pharmacy & Inventory Management System</strong>
</p>

## 🚀 Overview

**PharmaSense** is a comprehensive, enterprise-level pharmacy management dashboard designed to modernize medical dispensing, stock tracking, and procurement workflows. Built strictly to industry standards, it fuses a lightning-fast React frontend with a sophisticated Python/Scikit-Learn **Machine Learning Engine** to systematically eliminate stockouts, minimize medical wastage, and enforce strict regulatory compliance.

## ✨ Key Features

- **Machine Learning Demand Forecasting**: Anticipates local seasonal diseases and historical usage to trigger automated Restock Alerts.
- **First-Expire-First-Out (FEFO) Dispatching**: A custom algorithmic router that guarantees expiring medicine batches are split and dispensed prior to newer stockpiles to minimize wastage.
- **Deep Role-Based Access Control (RBAC)**: Secure workspaces mathematically segmented between `Pharmacists`, `Store Managers`, and global `Administrators`. 
- **Cross-Device Lifecycle Alerts**: Native active warning triggers for Low Stock, Near-Expiry, and automated Restock API handoffs.
- **Complete Financial Auditing**: Comprehensive compliance tracking that logs every single CRUD event, user action, and UI override interaction dynamically. 
- **PDF Invoice Exports**: Localization built-in with dynamically rendering Indian Rupee receipts printable on strict A4 canvases. 

## 🛠️ Technology Stack

| Architecture Layer | Technology |
| :--- | :--- |
| **Frontend Framework** | React.js 18 + Vite |
| **Styling & UX** | Tailwind CSS v3, Headless UI, Lucide Icons |
| **State Management** | Context API (`useReducer` Pattern mimicking Redux) |
| **Machine Learning** | Python 3.x, Scikit-Learn, Pandas, NumPy |
| **Data Generation** | Synthesized Datasets with localized geographic constraints |
| **Report Generation** | Python `docx`, PDF Web Exports |

## 📦 Project Architecture

```
📂 pharmacy-system
 ┣ 📂 scripts
 ┃ ┣ 📜 generate_ml_data.py   # Synthesizes a massive 5000-row DataFrame
 ┃ ┣ 📜 train_all_ml_models.py # Trains dual RandoForest/Logistic regressors
 ┃ ┗ 📜 generate_docx.py       # Auto-injects reports into Native Docx Templates
 ┣ 📂 src
 ┃ ┣ 📂 components           # Global UI components (Headers, Nav, Badges)
 ┃ ┣ 📂 context              # Auth & Data Reducer instances
 ┃ ┣ 📂 data                 # Seed database parameters
 ┃ ┣ 📂 pages                # Core Modules (ML, Billing, Dispensing, Audit)
 ┃ ┗ 📂 utils                # Date parsing, FEFO array routers, Export logic
 ┗ 📜 PROJECT_DIAGRAMS.md    # Mermaid.js UML Structural Diagrams
```

## 🚀 Getting Started

### 1. Frontend Web App (React)

```bash
# Clone the repository
git clone https://github.com/yourusername/pharmasense.git

# Navigate into the frontend root
cd pharmacy-system

# Install NPM dependencies
npm install

# Start the Vite local development server
npm run dev
```

### 2. Machine Learning Engine (Python)

To re-train the analytical models on new dispensing patterns:

```bash
# Ensure Python 3.9+ is installed
cd pharmacy-system/scripts

# Install the dependencies
pip install pandas scikit-learn numpy

# Generate 5,000 synthesized medical datasets
python generate_ml_data.py

# Train the Demand Forecasting & Stockout Risk Models natively
python train_all_ml_models.py
```
*(Trained models will serialize into `# /models/*.pkl`)*.

## 🔐 Demo Credentials

Use the following profiles to test RBAC parameters:

| Role | Email Login | Password |
| :--- | :--- | :--- |
| **Admin** | `admin@pharmasense.com` | `password123` |
| **Store Manager** | `priya@pharmasense.com` | `password123` |
| **Pharmacist** | `siddharth@pharmasense.com` | `password123` |

## 📊 Documentation

For full technical specifications on methods, sequence diagrams, and mathematical calculations, view our native documents:
- [Methodology & Documentation](PROJECT_METHODS_DOCUMENTATION.md)
- [UML Software Diagrams (Use-Case, Seq, Classes)](PROJECT_DIAGRAMS.md)

---
<p align="center">
  <i>Built for the Future of Quality Medicines & Care.</i>
</p>
