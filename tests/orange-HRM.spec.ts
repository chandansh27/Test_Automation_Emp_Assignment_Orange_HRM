import { test, expect } from "@playwright/test";
import { LoginPage } from "../pageObjectModel/LoginPage";
import { EmployeePage } from "../pageObjectModel/EmployeePage";
//import employeeData from "../data/employee-data.json"; // we can also use Json/xls data to add employee data but used better approach like faker
import { NavigationPage } from "../pageObjectModel/NavigationPage";
import { faker } from '@faker-js/faker'; //Faker tries to generate realistic data

test.beforeEach(async ({ page }) => { 
    // before each test run go to login page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
});

test.afterEach(async ({ page }) => {
    // after test run finish log out from the application
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/logout');
    
});

// Adding Employees Data and verifying details
test('employeeWorkflow', async ({ page }, testInfo) => {
    const loginPage = new LoginPage(page);
    const employeePage = new EmployeePage(page);
    const navigationPage = new NavigationPage(page);

    await loginPage.login("Admin", "admin123");

    for (let employeeCounter = 0; employeeCounter < 5; employeeCounter++) { // Loop 5 times to add employees
        const firstName = faker.person.firstName(); // Generate a random first name
        const lastName = faker.person.lastName(); // Generate a random last name

        await navigationPage.navigateToPIMPageAndAddEmployee();
        await employeePage.addEmployee(firstName, lastName);

        await navigationPage.navigateToEmployeeList();
        await employeePage.searchEmployee(firstName);
        await page.waitForTimeout(3000);


        try {
            const employeeDetails = await employeePage.getSearchedEmployeeDetails();
            expect(employeeDetails.firstName).toBe(firstName);
            expect(employeeDetails.lastName).toBe(lastName);

            const screenshot = await page.screenshot();
            // attach image to current test when passed
            await testInfo.attach(`pass_ExecutionScreenShot_${employeeCounter}`, { body: screenshot, contentType: 'image/png' });

        } catch (error) {
            console.error('Assertion failed:', error);

            const screenshot = await page.screenshot();
            //attach image to current test if fail
           await testInfo.attach(`failed_ExecutionErrorScreenShot_${employeeCounter}`, { body: screenshot, contentType: 'image/png' });
        }
    }
});
