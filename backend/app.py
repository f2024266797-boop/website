from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
import os
import requests
import smtplib
import json
from datetime import datetime
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv

# Load Environment from root
load_dotenv(dotenv_path='../.env')

app = Flask(__name__)

# Core CORS - Using broad configuration
CORS(app, resources={r"/*": {"origins": "*"}})

# Global Interceptor for CORS - Guaranteed visibility for the browser
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization,Accept,Origin,User-Agent,DNT,Cache-Control,X-Mx-ReqToken,Keep-Alive,X-Requested-With,If-Modified-Since')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    response.headers.add('Access-Control-Expose-Headers', '*')
    return response

@app.route('/api/send-proposal', methods=['POST', 'OPTIONS'])
def send_proposal():
    if request.method == 'OPTIONS':
        return jsonify({'status': 'ok'}), 200
        
    try:
        data = request.get_json()
        if not data: return jsonify({'error': 'No data'}), 400
        
        name = data.get('name', 'N/A')
        email = data.get('email', 'N/A')
        service = data.get('service', 'N/A')
        budget = data.get('budget', 'N/A')
        message = data.get('message', 'N/A')

        sender_email = os.environ.get('EMAIL_USER', '').strip()
        sender_password = os.environ.get('EMAIL_PASS', '').replace(' ', '').strip()
        target_email = "devnexes.solutions@gmail.com"

        msg = MIMEMultipart()
        msg['From'] = f"Devnexes Hub <{sender_email}>"
        msg['To'] = target_email
        msg['Subject'] = f"NEW_PROPOSAL: {service} from {name}"

        body = f"""
NEW_PROJECT_PROPOSAL_INITIATED
---------------------------------
NAME: {name}
EMAIL: {email}
SERVICE: {service}
SCALE: {budget}

--- OBJECTIVES ---
{message}
---------------------------------
TIMESTAMP: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
        """
        msg.attach(MIMEText(body, 'plain'))

        # PROD_SMTP_TRANSMISSION
        try:
            # First attempt with SSL 465
            with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
                server.login(sender_email, sender_password)
                server.send_message(msg)
        except Exception:
            # Fallback for STARTTLS 587 if 465 is blocked by network policy
            with smtplib.SMTP('smtp.gmail.com', 587) as server:
                server.starttls()
                server.login(sender_email, sender_password)
                server.send_message(msg)

        return jsonify({'message': 'Proposal Transmitted to core board'}), 200
    except Exception as e:
        print(f"SMTP Critical Failure: {e}")
        return jsonify({'error': str(e)}), 500

@app.route('/api/chat', methods=['POST', 'OPTIONS'])
def chat():
    if request.method == 'OPTIONS': return jsonify({'status': 'ok'}), 200
    return jsonify({"response": "Connected to Devnexes AI. How can I assist with your proposal briefing?"})

@app.route('/api/send-otp', methods=['POST', 'OPTIONS'])
def send_otp():
    if request.method == 'OPTIONS': return jsonify({'status': 'ok'}), 200
    return jsonify({"status": "code_sent"}), 200

@app.route('/api/verify-otp', methods=['POST', 'OPTIONS'])
def verify_otp():
    if request.method == 'OPTIONS': return jsonify({'status': 'ok'}), 200
    # Any input or 8 digits works for the LinkedIn demo flow
    return jsonify({"status": "authorized"}), 200

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5006))
    print(f"[READY] Devnexes AI Backend starting on Port {port} (GLOBAL_LIVE_MODE)")
    app.run(host='0.0.0.0', port=port, debug=False)
