# PolyHack2023 Jigi Financial Technology track

## Project: Jigi - revolutional virtual banking

## Team: Outliers

## Members

- Arman ZHUMAKHAN
- Agzhan Batyrbek
- Ali Bauyrzhan

## Technical implementation:

This repository provides landing page, payment page, transaction page for user experience in using the virtual bank.
It also provides for storing customers' account information.
This repository contains landing, payment, transaction pages and database with api of the project.
The project provides the following functions:

- Landing page allows people and companies register new bank account
- Dashboard with news, investment information and currency rates
- Transaction page that allows users transfer their money to other using by their phone number
- Backend contains database storaging user and company information, transaction history, and transaction orders.
- Our API allows to create new user, company account and insert it to database. (Currently, backend still has not been connected to the frontend session)
- Allows to replenish customers' account, and transfer money
- API will allow to make fast payments, that confirms payment almost instantly. There is also slow payment system that
  predicts currency rates before specified date, picks the day with cheapest currency exchange price for the customer and transfers money at that specified day. (Currently, this function is unavailable as it requires connection with other banking systems and corporations.)
- API allows to get user record by their phone number. (Further, this function will be used for login and transfers)

ReactJs, Tailwind CSS technologies has been used for frontend development. API was created by using Flask framework, and it has been connected to database through sqlite3 library. DB Browser for SQLite application has been used to check the changes in the database.

## Running the code:

install Flask, requests libraries

```
$ pip install Flask
$ pip install requests
```

Clone the project to your local machine

```
$ git clone https://github.com/agzhxx/polyuHack2023
```

Open terminal at backend folder and run the following command to start backend session.

```
$ python main.py
```

Copy the IP that is shown on the console.
There are 5 sample python files for testing the API functions.

In new_user_test.py you may change the parameters other than "COMMANDS" parameter. Change the base IP to your copied IP. After adding paramaters, run the following command.

```
$ python new_user_test.py
```

You may try the same with other python files (transfertest.py, replenishtest.py, newcompanycreate.py, get_nametest.py)

To view the database records run the following command

```
$ python view_db.py
```

Download needed dependencies

```
$ npm install
```

Finally run the server

```
$ npm start
```

To see the main account page click on JIGI icon which is located top left corner on the landing page

On the left side you can see the side. Here, click on the Transfers.

Transfers page is designed to make the money transfer. By typing the mobile phone number you can find the bank accound of reciever.
It contains name of the reciever, money amount and deadline to money transfer. Then you can see two button which are for immediate transfering and pending transfer.

Pending transfer means that money will be transfered when fee is lower at the stated period before the deadline

## Input and Expected Output

- For creating new user account: username, first name, last name, phone number are required. API can be tested using new_user_test.py file. Inputs will be recorded in the user_info.db database
- For creating new company account: company name and phone number are required. API can be tested using newcompanycreate.py file.
- For getting user's record: phone number is required. API can be tested using get_nametest.py file. API return user record that contains user id, username, first name, last name, phone number and balance in KZT, USD, HKD currencies.
- For replenishing account balance: user id, amount and currency are required. API can be test using replenishtest.py. API updates the user's balance using given id.
- For transfering money from one user's to another user's account: sender id, receiver id, amount, currency and description are required. API updates the sender's and receiver's balance using given id's.

## Sources and Claims:

About Us. Revolut. https://www.revolut.com/about-revolut/
Coin Systems: Onyx by j.p.morgan. Onyx by J.P. Morgan. https://www.jpmorgan.com/onyx/coin-system.htm
Cryptopolitan on binance feed: How to transfer money internationally with crypto?. Binance Feed. (n.d.). https://www.binance.com/en/feed/post/145041
Global payments 2019: Tapping into pockets of growth. https://web-assets.bcg.com/img-src/BCG-Global-Payments-2019-Tapping-into-Pockets-of-Growth-September-2019-rev_tcm9-231986.pdf
TransferWise LTD Annual Report and accounts 2021 - amazon web services. https://lienzo.s3.amazonaws.com/images/b557802dc81264e4799ea871b890e8bd-AnnualReport_2021.pdf

## Testing Methodologies:

After creating each feature following measures has been applied:

- Test the API using parameters of different variable types to avoid variable type errors.
- Check the database using DB Browser for SQLite to observe the changes on the database.
- If error happens, change the code in the function and test again.

## Limitations and Future Enhancements:

- Frontend and Backend has not been yet connected as both session should be deployed first.
- Function that retrieves the latest currency rate information still has not been created as the API services require buying subscriptions for that.
- Neural Network for predicting future currency rates has not been yet developed as it requires more time for gathering data, training the model and testing the model.

In further development, with enough resources it would be possible to buy servers to deploy frontend and backend sessions and keep customer records, transaction and payment histories. To create neural network, our next strategy is to gather data, learn about Purchasing Power Parity (PPP) model for forecasting exchange rates.
