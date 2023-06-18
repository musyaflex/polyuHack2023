import sqlite3
from datetime import datetime

def get_latest_and_future_expected_currency_rate(curfrom, curto, is_fastpayment, *args):  #should work with currency that
    # company accepts. User sends money on chosen currency and currency rate and,
    # if available currency rate for future will be retrieved.

    return "this function is currently unavailable"

def create_new_user(username, first_name, last_name, phone_number):

    with sqlite3.connect("user_info.db") as db:
        cursor = db.cursor()
        cursor.execute("SELECT * FROM USER_INFO")
        id = len(cursor.fetchall())+1
        result = f'INSERT INTO USER_INFO VALUES("{id}", "{username}", "{first_name}", "{last_name}", "{phone_number}", 0, 0, 0)'
        cursor.execute(result)
        db.commit()
    return None

def create_new_company(company_name, phone_number):

    with sqlite3.connect("user_info.db") as db:
        cursor = db.cursor()
        cursor.execute("SELECT * FROM COMPANY_INFO")
        id = len(cursor.fetchall())+1
        result = f'INSERT INTO COMPANY_INFO VALUES("{id}", "{company_name}","{phone_number}", 0, 0, 0)'
        cursor.execute(result)
        db.commit()
    return None

def replenish(user_id, bal, currency):

    currencies = {"KZT": 5, "USD": 6, "HKD": 7}
    if currency not in currencies:
        return "unsupported currency"

    with sqlite3.connect("user_info.db") as db:
        cursor = db.cursor()
        cursor.execute("SELECT * FROM USER_INFO")
        data = cursor.fetchall()
        cursor.execute(f"UPDATE USER_INFO SET BAL_{currency} = {float(data[int(user_id)-1][currencies[currency]]) + float(bal)} WHERE ID = {user_id};")
        db.commit()

def transfer(sender_id, receiver_id, amount, currency, description):

    currencies = {"KZT": 5, "USD": 6, "HKD": 7}
    if currency not in currencies:
        return "unsupported currency"


    with sqlite3.connect("user_info.db") as db:
        cursor = db.cursor()
        cursor.execute("SELECT * FROM USER_INFO")
        data = cursor.fetchall()
        #changes sender and receiver balance
        val_after_receive = float(data[int(receiver_id)-1][currencies[currency]]) + float(amount)
        val_after_charge = float(data[int(sender_id)-1][currencies[currency]]) - float(amount)
        cursor.execute(f"UPDATE USER_INFO SET BAL_{currency} = {val_after_charge} WHERE ID = {sender_id};")
        cursor.execute(f"UPDATE USER_INFO SET BAL_{currency} = {val_after_receive} WHERE ID = {receiver_id};")

        #records the transaction to Transaction_history
        cursor.execute("SELECT * FROM TRANSACTION_HISTORY")
        data = cursor.fetchall()
        id = len(data) + 1
        print(str(datetime.now()))
        result = f'INSERT INTO TRANSACTION_HISTORY VALUES({id}, {sender_id}, {receiver_id}, {amount}, "{currency}", "{str(datetime.now())}", 0, "{description}", "{currency}")'
        cursor.execute(result)
        db.commit()

def get_balance(id_list): #Retrieves user's balance account. Further will be used to show user's balance and check if customer has enough money for transaction or payment.
    with sqlite3.connect("user_info.db") as db:
        cursor = db.cursor()
        cursor.execute("SELECT * FROM USER_INFO")
        data = cursor.fetchall()
        result_list = []
        for id in id_list:
            result_list.append(data[id-1][4])
    return result_list

def get_name_by_phone(number): #Retrieves user information through phone number
    with sqlite3.connect("user_info.db") as db:
        cursor = db.cursor()
        cursor.execute("SELECT * FROM USER_INFO")
        data = cursor.fetchall()
        for record in data:
            if record[5] == number:
                return record    #R #

def fast_payment(sender_id, company_id, amount, sender_currency, receiver_currency, description): #The function currently unavailable

    currencies = {"KZT": 5, "USD": 6, "HKD": 7}
    if sender_currency not in currencies:
        return "unsupported currency"
    with sqlite3.connect("user_info.db") as db:
        cursor = db.cursor()
        cursor.execute("SELECT * FROM USER_INFO")
        data = cursor.fetchall()
        if sender_currency != receiver_currency:
            #calculates how much of sender currency required to exchange to receiver currency + 10% for commission and risk.
            charging_amount = float(amount)*get_latest_and_future_expected_currency_rate(sender_currency, receiver_currency, 1) * 1.1
            val_after_charge = float(data[int(sender_id)-1][currencies[sender_currency]]) - charging_amount
            cursor.execute(f"UPDATE USER_INFO SET BAL_{sender_currency} = {val_after_charge} WHERE ID = {sender_id};")

            #sends the money to company's Jigi account (1% for commission fee for the company)
            cursor.execute("SELECT * FROM COMPANY_INFO")
            data = cursor.fetchall()
            val_after_receive = float(data[int(company_id-1)][currencies][sender_currency]) + charging_amount*(1.09/1.1)
            cursor.execute(f"UPDATE COMPANY_INFO SET BAL_{sender_currency} = {val_after_receive} WHERE ID = {sender_id};")

            #Inserts order to fast_payments_orders. When money succesfully transfers from company's Jigi account to it's savings account, the record will be deleted in other function.
            result = f'INSERTT INTO FAST_PAYMENT_ORDERS VALUES({company_id}, {sender_id}, {charging_amount*(1.09/1.1)}, "{sender_currency}")'
            cursor.execute(result)
            db.commit()
            return 'Payment has been confirmed successfully!'
        else: #If sender_currency and receiver_currency are equal, transaction goes without currency rate calculation
            val_after_charge = float(data[int(sender_id) - 1][currencies[sender_currency]]) - float(amount)
            cursor.execute(f"UPDATE USER_INFO SET BAL_{sender_currency} = {val_after_charge} WHERE ID = {sender_id};")

            cursor.execute("SELECT * FROM COMPANY_INFO")
            data = cursor.fetchall()
            val_after_receive = float(data[int(company_id) - 1][currencies[receiver_currency]]) + float(amount)
            cursor.execute(f"UPDATE USER_INFO SET BAL_{receiver_currency} = {val_after_receive} WHERE ID = {company_id};")

            cursor.execute("SELECT * FROM TRANSACTION_HISTORY")
            data = cursor.fetchall()
            id = len(data) + 1
            print(str(datetime.now()))
            result = f'INSERT INTO TRANSACTION_HISTORY VALUES({id}, {sender_id}, 0, {amount}, "{sender_currency}", "{str(datetime.now())}", 1, "{description}", "{receiver_currency}")'
            cursor.execute(result)
            db.commit()

def slow_payment(sender_id, company_id, amount, sender_currency, receiver_currency, description): # This function is currently unavailable.
    #Further, the function will pick the suitable date for transfering customer money to company's money, so that currency rate will be cheapest for customer.
    #The date, sender_id, company_id, amount and currency information then will be recorded in SLOW_PAYMENT_ORDERS table.
    #When the suitable day comes, the record from SLOW_PAYMENT_ORDERS then will go through fast_payment function.
    pass





