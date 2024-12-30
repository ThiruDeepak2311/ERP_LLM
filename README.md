# ERP LLM Integration

## **Overview**
This project integrates state-of-the-art Large Language Models (LLMs) into an ERP system for project planning and scheduling. By leveraging advanced AI capabilities, the system enhances predictive scheduling, resource optimization, and risk assessment, providing actionable insights based on historical data, resource availability, and project complexity.

https://private-user-images.githubusercontent.com/116452492/399225664-0e055a31-d4f9-4792-aaf0-736f39f24284.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzU1Mzk3MjksIm5iZiI6MTczNTUzOTQyOSwicGF0aCI6Ii8xMTY0NTI0OTIvMzk5MjI1NjY0LTBlMDU1YTMxLWQ0ZjktNDc5Mi1hYWYwLTczNmYzOWYyNDI4NC5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMjMwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTIzMFQwNjE3MDlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yZWRmMmU0ZWIyYzQyN2UxZDZmNWFhOTBlODcyOThkYzMzMGU5ZjMwZjI2ZGY1ZGRjYWRjYjE3MjkwYjMyYWU3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9._D-8tsUoljHBGgByPt1i0vuzy-Jf2RxbNF0KisD2dw8

---

## **Features**
1. **Predictive Scheduling**:
   - Analyzes historical project data and patterns.
   - Predicts realistic timelines and identifies potential roadblocks.
   - Suggests mitigation strategies for delays or inefficiencies.

2. **Resource Optimization**:
   - Allocates resources efficiently based on project needs and availability.
   - Reduces idle time while maximizing productivity.
   - Recommends alternative resource allocation strategies during bottlenecks.

3. **Risk Assessment**:
   - Identifies potential risks using historical data and project parameters.
   - Proposes proactive mitigation strategies.
   - Ensures robust project execution through continuous monitoring.

---

## **Tech Stack**
- **Frontend**: React.js (Material-UI for styling and components)
- **Backend**: Flask (Python-based API)
- **LLM API**: Cohere API for language generation
- **Database**: Historical project data stored in a CSV file

---

## **How It Works**

### **1. Data Flow**
- The user inputs project details (e.g., project name, duration, resources, and challenges) into the React frontend.
- The backend Flask API processes this input, analyzes historical data, and sends requests to the Cohere API.
- The Cohere API generates predictions, optimization strategies, or risk assessments based on the input and historical data.
- The results are sent back to the frontend and displayed in a clean, interactive format.

### **2. API Endpoints**
- **`/predict-scheduling`**:
  - Generates a timeline, potential roadblocks, and mitigation strategies.
- **`/resource-optimization`**:
  - Suggests efficient resource allocation strategies.
- **`/risk-assessment`**:
  - Identifies potential risks and proposes mitigation strategies.

---

## **Deployment**
### **Frontend**
1. Build the frontend:
   ```bash
   npm run build
   ```
2. Deploy the build folder using Vercel or any static hosting provider.

### **Backend**
1. Ensure `app.py` and `data.csv` are ready.
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Run the backend locally:
   ```bash
   python app.py
   ```
4. Deploy the backend to a cloud platform (e.g., AWS, Heroku).

---

## **Project Structure**
```
ERP_LLM/
├── app.py                 # Flask backend API
├── data.csv               # Historical project data
├── requirements.txt       # Backend dependencies
├── frontend/              # React frontend
│   ├── public/            # Static files (index.html, favicon, etc.)
│   ├── src/               # React components
│   ├── package.json       # Frontend dependencies and scripts
│   ├── package-lock.json  # Dependency lock file
│   └── .gitignore         # Ignored files (node_modules, build, etc.)
├── README.md              # Project documentation (this file)
```

---

## **Setup Instructions**

### **1. Clone the Repository**
```bash
git clone <repository_url>
cd ERP_LLM
```

### **2. Backend Setup**
1. Create a virtual environment:
   ```bash
   python -m venv env
   source env/bin/activate  # On Windows: env\Scripts\activate
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Run the backend:
   ```bash
   python app.py
   ```

### **3. Frontend Setup**
1. Navigate to the `frontend/` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

---

## **Why Cohere API Was Used**
1. **High-Quality Text Generation**:
   - Cohere provides precise and contextually relevant predictions.
2. **Customizability**:
   - Supports domain-specific models tailored for project management needs.
3. **Scalability**:
   - Handles diverse project portfolios efficiently.
4. **Cost-Effectiveness**:
   - Offers high performance at a competitive cost.

---

## **Future Enhancements**
1. Integrate additional LLMs (e.g., OpenAI, Hugging Face) for broader capabilities.
2. Implement a user authentication system.
3. Add real-time monitoring and project progress tracking.
4. Develop a mobile-friendly interface.

---
