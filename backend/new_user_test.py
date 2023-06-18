import requests
base = 'http://127.0.0.1:5000/command'

parameters = {
    "USERNAME": "testlogin5",
    "FIRST_NAME": "testname5",
    "LAST_NAME": "testlastname5",
    "PHONE_NUMBER": "55555555",
    "COMMAND": 'create_new_user'
}

response = requests.post(base, params=parameters)

print(response)