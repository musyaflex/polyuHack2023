import requests
base = 'http://127.0.0.1:5000/command'

parameters = {
    "SENDER_ID": 1,
    "RECEIVER_ID": 5,
    "AMOUNT": 300,
    "COMMAND": 'user_transfer',
    "CURRENCY": "HKD",
    'DESCRIPTION': 'transfer'
}

response = requests.post(base, params=parameters)

print(response)