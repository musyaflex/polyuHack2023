from flask import Flask, request
import sqlite3
import commands

app = Flask(__name__)

@app.route("/command", methods = ['POST'])
def command():

    data = request.args

    if data['COMMAND'] == "create_new_user":    # Inserts new user record in database
        username = data["USERNAME"]
        first_name = data["FIRST_NAME"]
        last_name = data["LAST_NAME"]
        phone_number = data["PHONE_NUMBER"]
        commands.create_new_user(username, first_name, last_name, phone_number)
        return "User succesfully created!"
    elif data['COMMAND'] == "user_transfer":  # Provides money transaction
        sender_id = data['SENDER_ID']
        receiver_id = data['RECEIVER_ID']
        amount = data["AMOUNT"]
        currency = data["CURRENCY"]
        description = data["DESCRIPTION"]
        commands.transfer(sender_id, receiver_id, amount, currency, description)
        return "transfer successfully received"
    elif data['COMMAND'] == "replenish":     #Provides replenishment
        user_id = data['ID']
        bal = data['BALANCE']
        currency = data['CURRENCY']
        commands.replenish(user_id, bal, currency)
        return "successfully replenished!"
    elif data['COMMAND'] == "create_new_company":  #Inserts new company record
        company_name = data["COMPANY_NAME"]
        phone_number = data["PHONE_NUMBER"]
        commands.create_new_company(company_name, phone_number)
        return "company account successfully created"

@app.route("/user_search", methods = ["GET"])
def get_user():
    data = request.args
    number = data['PHONE_NUMBER']
    record = commands.get_name_by_phone(number)
    return list(record)



if __name__ == '__main__':
    app.run(debug=False)