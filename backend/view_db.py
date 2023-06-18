import sqlite3

db = sqlite3.connect("user_info.db")
cursor = db.cursor()

cursor.execute("SELECT * FROM USER_INFO")
data = cursor.fetchall()
print("User records:")
for record in data:
    print(f"ID: {record[0]}, USERNAME: {record[1]}, FIRST_NAME: {record[2]}, LAST_NAME: {record[3]}, PHONE_NUMBER: {record[4]}, BAL_KZT: {record[5]}, BAL_USD: {record[6]}, BAL_HKD: {record[7]}")

cursor.execute("SELECT * FROM COMPANY_INFO")
data = cursor.fetchall()
print("\n\nCompany records:")
for record in data:
    print(f'ID: {record[0]}, COMPANY_NAME: {record[1]}, PHONE_NUMBER: {record[2]}, BAL_KZT: {record[3]}, BAL_USD: {record[4]}, BAL_HKD: {record[5]}')

cursor.execute("SELECT * FROM TRANSACTION_HISTORY")
data = cursor.fetchall()
for record in data:
    print(f"ID: {record[0]}, SENDER_ID: {record[1]}, RECEIVER_ID: {record[2]}, BALANCE: {record[3]}, CURRENCY: {record[4]}, RECEIVING_CURRENCY: {record[8]}, DATE: {record[5]}, IS_PAYMENT: {record[6]}, DESCRIPTION: {record[7]}, COMPANY_ID:{record[9]} ")

