import requests
base = 'http://127.0.0.1:5000/command'

parameters = {
    "COMPANY_NAME": "testlogin5",
    "PHONE_NUMBER": "55555555",
    "COMMAND": 'create_new_company'
}

response = requests.post(base, params=parameters)

print(response)