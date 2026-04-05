from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os
from dotenv import load_dotenv
from supabase import create_client, Client

# Initialize Flask with specific static folder settings
# We point static_folder to the 'dist' directory which is one level up from 'backend'
app = Flask(__name__, static_folder='../dist', static_url_path='')
CORS(app)

# Load environment variables from the root folder
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
load_dotenv(os.path.join(BASE_DIR, '..', '.env'))

# 🛰️ SUPABASE CONFIGURATION
SUB_URL = os.environ.get("SUPABASE_URL")
SUB_KEY = os.environ.get("SUPABASE_SERVICE_ROLE_KEY") or os.environ.get("SUPABASE_ANON_KEY")

supabase_internal = None
if SUB_URL and SUB_KEY:
    try:
        supabase_internal = create_client(SUB_URL, SUB_KEY)
        print(f"[READY] Supabase Internal Handshake: SUCCESSFUL (URL: {SUB_URL[:15]}...)")
    except Exception as e:
        print(f"[ERROR] Supabase Init Failed: {e}")

# IMPORTANT: Serve the React App for any route not handled by an API
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

# 📡 DATABASE PROXY ENDPOINT (For Admin)
@app.route('/api/get-proposals', methods=['GET', 'OPTIONS'])
def get_proposals():
    if request.method == 'OPTIONS': return jsonify({'status': 'ok'}), 200
    if not supabase_internal: return jsonify({'error': 'Database connect string missing'}), 500
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
        return jsonify({"message": "Success", "data": res.data}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5006))
    app.run(host='0.0.0.0', port=port)
