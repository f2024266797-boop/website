from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os
import json
from datetime import datetime
from dotenv import load_dotenv
from supabase import create_client, Client

# Set base directory (root)
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
# Dist folder is in the root
DIST_FOLDER = os.path.join(BASE_DIR, '..', 'dist')

app = Flask(__name__, static_folder=DIST_FOLDER, static_url_path='/')
CORS(app)

# Load environment variables
load_dotenv(dotenv_path=os.path.join(BASE_DIR, '..', '.env'))

# 🛰️ SUPABASE CONFIGURATION
SUB_URL = os.environ.get("SUPABASE_URL")
SUB_KEY = os.environ.get("SUPABASE_SERVICE_ROLE_KEY") or os.environ.get("SUPABASE_ANON_KEY")

supabase_internal = None
try:
    if SUB_URL and SUB_KEY:
        supabase_internal = create_client(SUB_URL, SUB_KEY)
        print("[READY] Supabase Internal Handshake: SUCCESSFUL")
except Exception as e:
    print(f"[RECOVERABLE ERROR] Supabase Connection failed: {e}")

# Serve the main React entry point
@app.route('/')
def index():
    return send_from_directory(DIST_FOLDER, 'index.html')

# Serve static assets (JS, CSS, Images)
@app.route('/<path:path>')
def serve_static(path):
    if os.path.exists(os.path.join(DIST_FOLDER, path)):
        return send_from_directory(DIST_FOLDER, path)
    return send_from_directory(DIST_FOLDER, 'index.html')

# 📡 DATABASE PROXY ENDPOINT (For Admin)
@app.route('/api/get-proposals', methods=['GET', 'OPTIONS'])
def get_proposals():
    if request.method == 'OPTIONS': return jsonify({'status': 'ok'}), 200
    if not supabase_internal: return jsonify({'error': 'Server configuration error'}), 500
    
    try:
        response = supabase_internal.table("proposals").select("*").order("created_at", desc=True).execute()
        return jsonify(response.data), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# 🚀 CLIENT SUBMISSION PROXY
@app.route('/api/send-proposal', methods=['POST', 'OPTIONS'])
def send_proposal():
    if request.method == 'OPTIONS': return jsonify({'status': 'ok'}), 200
    if not supabase_internal: return jsonify({'error': 'Backend offline'}), 500
    
    try:
        data = request.json
        res = supabase_internal.table("proposals").insert(data).execute()
        return jsonify({"message": "Data logged successfully", "data": res.data}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5006))
    app.run(host='0.0.0.0', port=port, debug=False)
