import requests
import json

data = {
    "name": "Tester",
    "email": "test@test.com",
    "service": "AI Solutions",
    "budget": "$1k-$5k",
    "message": "This is a test message from local script."
}

try:
    response = requests.post('http://localhost:5006/api/send-proposal', json=data)
    print(f"Status: {response.status_code}")
    print(f"Response: {response.json()}")
except Exception as e:
    print(f"Error: {e}")
