# CityHack23 Outliers FinTech Track
## Project: GreenFin

<img src="https://user-images.githubusercontent.com/51944593/151665117-0d58be0c-e784-444e-b093-a4e299b1a6e8.png" width="200" alt="project_logo"/>
  
## Team: Outliers 
## Members
- Arman ZHUMAKHAN
- Adilzhan NARIK
- Ralif RAKHMATULLIN
- Nurgazy SALANOV
- Daulet IGAZIN

## Problem description:
The finance industry is adapting to the demands of consumers and authorities by expanding into the Eco-friendliness of Companies by generating their Environmental Performance Index (greenhouse gas emissions, waste and pollution, water use, land use and biodiversity). Large corporations are transforming their strategies to build sustainable business models, while large institutions and individual investors invest in this sector due to its high potential and long-term returns. However, individual retail investors lack access to analysis of Environment-related information presented in ESG reports. These investors cannot afford ESG Evaluations by rating agencies which charge hundreds of thousands of dollars. Moreover, currently, there is no available platform that collects different eco-friendly startups and green bonds for investors. In addition, investors may find it time-consuming to locate the answers to their questions, as public reports can span hundreds of pages.

## Solution description:
Our platform is built to help individual investors gain access to all available information related to a firm’s environmental projects and news about their sustainability strategies in one place so they can make informed investment decisions. We provide the following features:
- Dashboard with financial data, environmental news, and company actions toward Ecology improvement. We will collect these data from Yahoo Finance and News API. 
- AI model calculates Environment Performance Index using company reports and news. It helps investors make data-driven investment decisions by comparing Index scores. Our model is the NLP algorithm that takes into consideration environment-related words, positive and negative words. 
- The second NLP model will answer questions of investors based on reports, saving time for investors. We will use pre-trained RoBERTa, a transformers model, which is trained on 100,000 questions, allowing reports with 100s pages to be processed in seconds.
- Connect environmentally friendly startups with investors to raise funds and issue green bonds for sustainability projects. The platform offers a variety of resources like white papers to help investors make informed investment decisions.
- Help Environmental charity funds to get donations from a variety of investors, by creating a fundraising platform.

## Technology Used: 
- Front-end: React, JavaScript; 
- Back-end: Flask, Python; 
- Libraries: Huggingface.transformers, PyPDF2.pdfReader ;
- APIs: Yahoo Finance, News API;


## Usage
Clone the project to your local machine
```
$ git clone https://github.com/Drace2108/cityhack23
```

Open another terminal session and run the following command, this will start the website of our platform
```
$ npm start
```

To run backend server:
- first do `cd backend`, 
- create a virtual environment `python -m venv env`
- install necessary packages `pip install -r requirements.txt`
- run the backend `npm run start-backend`


Open a terminal session and run the following command, this will start the server of our platform
```
$ npm run start-backend
```


