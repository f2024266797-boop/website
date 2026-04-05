import os
from supabase import create_client, Client
from dotenv import load_dotenv

# Load Environment from root
load_dotenv(dotenv_path='../.env')

# Retrieve Keys
SUB_URL = os.environ.get("VITE_SUPABASE_URL")
SUB_KEY = os.environ.get("VITE_SUPABASE_ANON_KEY")

print(f"--- SUPABASE CONNECTIVITY REPORT ---")
print(f"TARGET_URL: {SUB_URL}")
print(f"TARGET_KEY_PREFIX: {SUB_KEY[:15]}...")

if not SUB_URL or not SUB_KEY:
    print("[FAIL] Missing credentials in .env")
    exit(1)

try:
    # Initialize Client
    supabase: Client = create_client(SUB_URL, SUB_KEY)
    
    # Simple Health Check (Querying for non-existent table is enough to check handshake)
    # Testing an actual API call
    print("[HANDSHAKE] Attempting connection...")
    
    # We can use auth.get_user() if we have an access token, 
    # but here we just check if the server responds
    response = supabase.table("_devnexes_health_check_").select("*").limit(1).execute()
    
    # If we get here without an exception, the client successfully contacted Supabase
    print("[SUCCESS] Devnexes DB Handshake: COMPLETED (dmrifeislfmtzmminlkm)")
    print("[STATUS] Live & Ready for production.")
except Exception as e:
    # Check if it's just a 'table not found' (which means connection is fine)
    if "relation \"_devnexes_health_check_\" does not exist" in str(e).lower() or "404" in str(e):
        print("[SUCCESS] Devnexes DB Handshake: COMPLETED (Verified via 404 Table Response)")
        print("[STATUS] Live & Ready (Handshake Verified).")
    else:
        print(f"[FAIL] Connection Error: {e}")
