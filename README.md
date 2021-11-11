# A PayOut Flow App Built Using ReactJS and styled-components.

This is a web app that allows a person to snd money in any currency to a receipient anywhere in the world. 

# Getting Started
Make sure you have nodejs installed on your PC by running the following command in your CLI Terminal:
```bash
node -v
```
This should give you the version of the nodejs you have installed like this: 
```bash
v16.7.0
```
If you do not have it installed previously you can proceed to [nodejs](https://nodejs.org/en/download/) to install it from their official website.

After installing nodejs you can either install [yarn](https://www.npmjs.com/package/yarn) or you can use npm as well to install the project's dependencies (node_modules) using this command in the project terminal 
```bash
yarn install
```
or 
```bash
npm install
```

# STARTING THE SERVER AND GET THE APPLICATION RUNNING IN THE BROWSWR
After Installing the dependencies then, Run this command: 
```bash
yarn start 
```
or 
```bash
npm start or npm run start 
```
This will start the server at http://localhost:3000 and you will be able to see the interface dislay like this: 
![image](https://user-images.githubusercontent.com/61933245/141100250-5353245a-3d67-495b-80dc-6999df5afeed.png)

# EDITORS SETUP
This project is using eslint for js linting and prettier for code formating, make sure to install eslint and prettier extensions in your code editor's extension market place so you can see linting errors as you code and have your code formatted on save by prettier. 

# ASSUMPTIONS MADE
My thought process in building this app was splitted into 4 parts: 
1. Knowing how many flows is needed for the customer to complete their money transfer process  from the Figma Design  (6 steps)
2. Then I created the Card rendring for each process, although some process are 2 in 1 like the receipient part that gives the option of Inside/Outside of Europe and the Currency Converter Selection. 
3. Then, I made the Navigation Header which consists of the company's Logo , the Stepper Navigation and the Cancel Button. The Stepper Navigation was then connected to the Cards that was creared in 2 using condtional rendering, i.e if the user clicks on any step display this particular card. Also for easy access, and user experience simplicity, forward /continue buttons was attached to each card which moves the step forward once the user is done with a part. 
4. The Last part was to clean up the code and make the app mobile responsive. 

# REQUIREMENTS NOT COVERED
The flags were not included in the Payout Card due to issues with the API. 

# ISSUES FACED WHILE COMPLETING THE ASSESSMENT
1. The major Issue I faced was the API issue. The API from [Xe Currency](https://www.xe.com/currencyconverter/) returns the country flags along side the short name but I could not use it because I onlly had access to only the http url and not https, so I will need to make a subscription before I can make an API call using the https. 
2. The second issue faces was understanding the flow of the App and the steps to take in building it which I finally figured out. 

# CONSTRUCTIVE FEEDBACK 
My only feedback as of now is that, there should be a Back Button which allows user to easily go back probably if they make a mistake or they just want to verify the information entered previously. They should not necessarily have to click the stepper button to move back. 
 
