print("Hearthbeat Test Started")
import os
from dotenv import load_dotenv
load_dotenv(dotenv_path='../.env')
print(f"URL: {os.environ.get('VITE_SUPABASE_URL')}")
print("Test Ended")
