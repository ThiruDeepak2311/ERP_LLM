from flask import Flask, request, jsonify
import cohere
import pandas as pd
from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Initialize Cohere Client
cohere_client = cohere.Client("ywT0FSzhxN4IrGCXuiKN1HepdROguDV5d3RwGBuE")  # Replace with your Cohere API key

# Load historical data
data_path = "env/data.csv"  # Ensure this file exists
historical_data = pd.read_csv(data_path)


def generate_response(prompt):
    """Function to generate responses using Cohere."""
    response = cohere_client.generate(
        model="command-xlarge-nightly",
        prompt=prompt,
        max_tokens=300,
        temperature=0.7
    )
    return response.generations[0].text.strip()


@app.route("/")
def home():
    return "ERP Backend is Running!"


@app.route('/predict-scheduling', methods=['POST'])
def predict_scheduling():
    try:
        project_details = request.json.get('project_details', {})
        prompt = f"""
        Analyze the following historical data to provide a realistic timeline, potential roadblocks, and mitigation strategies:
        {historical_data.to_string(index=False)}

        New project details:
        {project_details}
        """
        prediction = generate_response(prompt)
        return jsonify({"prediction": prediction})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/resource-optimization', methods=['POST'])
def resource_optimization():
    try:
        project_details = request.json.get('project_details', {})
        prompt = f"""
        Based on the following historical data, allocate resources optimally for the project:
        {historical_data.to_string(index=False)}

        New project details:
        {project_details}
        """
        optimization = generate_response(prompt)
        return jsonify({"optimization": optimization})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/risk-assessment', methods=['POST'])
def risk_assessment():
    try:
        project_details = request.json.get('project_details', {})
        prompt = f"""
        Based on the following historical data, identify potential risks and provide proactive mitigation strategies:
        {historical_data.to_string(index=False)}

        New project details:
        {project_details}
        """
        risk_assessment = generate_response(prompt)
        return jsonify({"risk_assessment": risk_assessment})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)
