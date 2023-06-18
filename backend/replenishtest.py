import requests
base = 'http://127.0.0.1:5000/command'

parameters = {
    "COMMAND": "replenish",
    "ID": 3,
    "BALANCE": 2000,
    "CURRENCY": "HKD"
}

response = requests.post(base, params=parameters)

print(response)