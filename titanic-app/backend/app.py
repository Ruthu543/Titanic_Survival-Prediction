from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import joblib

app = Flask(__name__)
CORS(app)

# Load the pre-trained model
model = joblib.load('titanic_model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    try:
        print("Received Data:", data)

        # Extract features from the request
        features = np.array([[  
            int(data['Pclass']),
            int(data['Sex']),
            float(data['Age']),
            int(data['SibSp']),
            int(data['Parch']),
            float(data['Fare']),
            int(data['Embarked'])
        ]])

        # Make prediction
        prediction = model.predict(features)[0]

        # Get prediction probability (probability of survival)
        probability = model.predict_proba(features)[0][1]  # [0] → first sample, [1] → survived prob

        return jsonify({
            'survived': int(prediction),
            'probability': round(float(probability), 4)  # Rounded to 4 decimal places
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=5000)
