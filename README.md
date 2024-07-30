### Installation

1. Clone the repo using below URL

```sh
https://github.com/chandansh27/Test_Automation_Emp_Assignment_Orange_HRM.git
```

2. Navigate to folder and install npm packages using:

```sh
npm install
```
3. For first time installation run below command to download required browsers

```sh
npx playwright install
```

4. To run the `orange-HRM.spec and orange-HRM-API.spec` files , either run command from terminal  npx playwright test  , this is will run the test in  headless mode  or click on the file e.g orange-HRM.spec , right click on it and click on Run Tests 

5. Reports will get genarted under Playwright-report folder , right click on index.html file --> Reveal in File explorer and double click on it

   ###### POM (Page Object Model)
   Used POM as a design pattern to written the classes under pageObjectModel folder for better usage of code/script
   called the methods in main spec file which is : orange-HRM.spec
   have used Faker.js to generate realistic data , we can use Json and Xls also as data driven approach , but have used faker for relalistc data apprach:  https://www.npmjs.com/package/@faker-js/faker

   ###### Execution Test cases from Jenkins

    installed Jenkins and NPM pacakeg on EC2, configuration  on Jenkins server , and run the job
   

