import requests
base = 'http://127.0.0.1:5000/user_search'

parameters = {
    "PHONE_NUMBER": "56920932"
}

response = requests.get(base, params=parameters)

print(response.text)