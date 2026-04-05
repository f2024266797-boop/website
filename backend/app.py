from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
import os
import json
from datetime import datetime
from dotenv import load_dotenv
from supabase import create_client, Client

# Load Environment
load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), '../.env'))

# 🛰️ SUPABASE CONFIGURATION (Secure Internal Interface)
SUB_URL = os.environ.get("SUPABASE_URL")
SUB_KEY = os.environ.get("SUPABASE_SERVICE_ROLE_KEY") or os.environ.get("SUPABASE_ANON_KEY")

supabase_internal: Client = None
if SUB_URL and SUB_KEY:
    try:
        supabase_internal = create_client(SUB_URL, SUB_KEY)
        print("[READY] Supabase Internal Handshake: SUCCESSFUL (DB_SYNCHRONIZED)")
    except Exception as e:
        print(f"[ERROR] Supabase Failed to Initialize: {e}")
else:
    print("[WAITING] Supabase Missing Credentials in .env (DB_STANDBY_MODE)")

app = Flask(__name__)

# Core CORS - Using broad configuration
CORS(app, resources={r"/*": {"origins": "*"}})

# Global Interceptor for CORS
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

        # 🛰️ SUPABASE PERSISTENCE LAYER
        if supabase_internal:
            try:
                db_data = {
                    "name": name,
                    "email": email,
                    "service": service,
                    "budget": budget,
                    "message": message
                }
                supabase_internal.table("proposals").insert(db_data).execute()
                print(f"[SYNC] Proposal from {name} saved to Supabase.")
            except Exception as db_err:
                print(f"[WARN] Database Save Failed: {db_err}")

        return jsonify({'message': 'Proposal Transmitted to core board'}), 200
    except Exception as e:
        print(f"Submission Critical Failure: {e}")
        return jsonify({'error': str(e)}), 500

@app.route('/api/check-db', methods=['GET', 'OPTIONS'])
def check_db():
    if request.method == 'OPTIONS': return jsonify({'status': 'ok'}), 200
    
    status = {
        "url_present": bool(SUB_URL),
        "key_present": bool(SUB_KEY),
        "client_ready": supabase_internal is not None,
    }
    
    if supabase_internal:
        status["handshake"] = "ACTIVE"
    else:
        status["handshake"] = "WAITING_FOR_ENVIRONMENT"
        
    return jsonify(status), 200

@app.route('/api/get-proposals', methods=['GET', 'OPTIONS'])
def get_proposals():
    if request.method == 'OPTIONS': return jsonify({'status': 'ok'}), 200
    
    if not supabase_internal:
        return jsonify({'error': 'Supabase not initialized'}), 500
        
    try:
        # Fetch directly using internal client (Service Role Bypasses RLS)
        response = supabase_internal.table("proposals").select("*").order("created_at", desc=True).execute()
        return jsonify(response.data), 200
    except Exception as e:
        print(f"[ERROR] Admin Fetch Failed: {e}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5006))
    print(f"[READY] Devnexes Core Backend starting on Port {port} (GLOBAL_LIVE_MODE)")
    app.run(host='0.0.0.0', port=port, debug=False)
