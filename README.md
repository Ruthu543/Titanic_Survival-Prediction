# 🚢 Titanic Survival Prediction

## 📌 Project Overview

**Titanic Survival Prediction** is a Machine Learning web application that predicts whether a passenger would have **survived or not survived** the Titanic disaster based on passenger information.

The project includes a Machine Learning model for prediction and a web-based user interface for interacting with the model. Users can enter passenger details and receive a survival prediction.

## 🎯 Project Objectives

* Analyze the Titanic passenger dataset.
* Perform data cleaning and preprocessing.
* Identify important factors affecting passenger survival.
* Train a Machine Learning classification model.
* Evaluate model performance.
* Build an interactive web application for real-time predictions.
* Provide a simple and user-friendly interface.

## 🛠️ Technologies Used

### Machine Learning

* **Python**
* **Pandas** – Data preprocessing and analysis
* **NumPy** – Numerical computations
* **Scikit-learn** – Machine Learning
* **Jupyter Notebook** – Model development and experimentation

### Frontend

* **React.js**
* **JavaScript**
* **HTML**
* **CSS**


### Backend

* **Python / Flask** 
* REST API for connecting the Machine Learning model with the frontend

### Tools

* Git
* GitHub
* VS Code
* Jupyter Notebook

## 📊 Dataset

The project uses the **Titanic passenger dataset**, which contains information about passengers aboard the RMS Titanic.

Important features include:

| Feature     | Description                       |
| ----------- | --------------------------------- |
| PassengerId | Unique passenger identifier       |
| Pclass      | Passenger class                   |
| Name        | Passenger name                    |
| Sex         | Passenger gender                  |
| Age         | Passenger age                     |
| SibSp       | Number of siblings/spouses aboard |
| Parch       | Number of parents/children aboard |
| Fare        | Passenger fare                    |
| Embarked    | Port of embarkation               |
| Survived    | Target variable                   |

### Target Variable

```text
0 → Did Not Survive
1 → Survived
```

## 🔄 Machine Learning Workflow

```text
Titanic Dataset
       ↓
Data Cleaning
       ↓
Exploratory Data Analysis
       ↓
Feature Selection
       ↓
Handling Missing Values
       ↓
Encoding Categorical Features
       ↓
Train-Test Split
       ↓
Model Training
       ↓
Model Evaluation
       ↓
Save Trained Model
       ↓
Web Application
       ↓
Survival Prediction
```

## 🤖 Machine Learning Model

The project uses a classification model to predict Titanic passenger survival.

The model learns patterns from passenger characteristics such as:

* Passenger class
* Gender
* Age
* Family information
* Fare
* Port of embarkation

The trained model is then used to generate predictions for new passenger information.

## 🌐 Web Application

The application provides an interactive interface where users can enter passenger details.

### Prediction Process

```text
User enters passenger details
            ↓
Frontend collects input
            ↓
Backend/API receives input
            ↓
Input preprocessing
            ↓
Machine Learning model
            ↓
Prediction
            ↓
Survived / Did Not Survive
```

## 📂 Project Structure

```text
Titanic_Survival/
│
├── titanic-app/
│   │
│   ├── frontend/
│   │   ├── public/
│   │   ├── src/
│   │   │   ├── App.js
│   │   │   ├── App.css
│   │   │   ├── index.js
│   │   │   └── index.css
│   │   ├── package.json
│   │   └── package-lock.json
│   │
│   └── backend/
│       └── ...
│
├── notebooks/
│   └── Titanic_Survival.ipynb
│
├── model/
│   └── ...
│
├── requirements.txt
└── README.md
```

> The exact folder structure may vary depending on the files included in the repository.

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/Ruthu543/Titanic_Survival-Prediction.git
```

### 2. Navigate to the project

```bash
cd Titanic_Survival-Prediction
```

## 🐍 Python Environment Setup

Create a virtual environment:

```bash
python -m venv venv
```

Activate it on Windows:

```bash
venv\Scripts\activate
```

Install the required Python packages:

```bash
pip install -r requirements.txt
```

## ⚛️ Frontend Setup

Navigate to the frontend directory:

```bash
cd titanic-app/frontend
```

Install the Node.js dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm start
```

The frontend will normally be available at:

```text
http://localhost:3000
```

## ▶️ Running the Backend

If the project uses Flask, navigate to the backend directory:

```bash
cd ../backend
```

Run the application:

```bash
python app.py
```

The backend API will normally run at:

```text
http://127.0.0.1:5000
```

> Use the actual backend filename and port configured in your project if they differ.

## 💡 Key Features

* 🚢 Titanic survival prediction
* 🤖 Machine Learning classification
* 📊 Data preprocessing and analysis
* 🔍 Feature-based prediction
* ⚛️ Interactive React frontend
* 🔗 Frontend-backend integration
* ⚡ Real-time predictions
* 📱 User-friendly interface
* 📈 Extensible Machine Learning architecture

## 📈 Model Evaluation

The model can be evaluated using common classification metrics:

* Accuracy
* Precision
* Recall
* F1-Score
* Confusion Matrix

Example:

```text
Accuracy
Precision
Recall
F1-Score
```

Add your actual model results here if you have them.

## 🚀 Future Improvements

* Improve model accuracy through hyperparameter tuning.
* Compare multiple classification algorithms.
* Add survival probability to predictions.
* Add interactive data visualizations.
* Improve frontend UI/UX.
* Deploy the application to a cloud platform.
* Add user authentication.
* Store prediction history in a database.
* Add model performance monitoring.

## 📌 Use Cases

This project demonstrates practical skills in:

* Machine Learning
* Classification
* Data preprocessing
* Exploratory Data Analysis
* Python programming
* React development
* API integration
* Full-stack Machine Learning application development
* Git and GitHub

## 👩‍💻 Author

**Ruthu Madhavi Kola**

GitHub:
https://github.com/Ruthu543

## 📜 License

This project is created for **educational and portfolio purposes**.
