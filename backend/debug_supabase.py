import os
from supabase import create_client, Client
from dotenv import load_dotenv

load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), '../.env'))

SUB_URL = os.environ.get("SUPABASE_URL")
SUB_KEY = os.environ.get("SUPABASE_SERVICE_ROLE_KEY") or os.environ.get("SUPABASE_ANON_KEY")

print(f"URL: {SUB_URL}")
print(f"Key prefix: {SUB_KEY[:30] if SUB_KEY else 'MISSING'}...")

supabase: Client = create_client(SUB_URL, SUB_KEY)

print("\n[TEST 1] Insert WITHOUT budget field...")
try:
    result = supabase.table("proposals").insert({
        "name": "Debug Test",
        "email": "debug@test.com",
        "service": "AI Systems",
        "message": "Test without budget."
    }).execute()
    print(f"[SUCCESS] Test 1 passed: {result.data}")
except Exception as e:
    print(f"[FAIL] Test 1 Error: {e}")

print("\n[TEST 2] Insert WITH budget field...")
try:
    result = supabase.table("proposals").insert({
        "name": "Debug Test 2",
        "email": "debug2@test.com",
        "service": "Web Engineering",
        "budget": "$1k-$5k",
        "message": "Test with budget."
    }).execute()
    print(f"[SUCCESS] Test 2 passed: {result.data}")
except Exception as e:
    print(f"[FAIL] Test 2 Error: {e}")

print("\n[TEST 3] Checking existing columns in proposals table...")
try:
    result = supabase.table("proposals").select("*").limit(1).execute()
    print(f"[INFO] Table columns visible: {result.data}")
except Exception as e:
    print(f"[FAIL] Test 3 Error: {e}")
