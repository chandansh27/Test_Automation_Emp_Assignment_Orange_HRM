import { test, expect } from "@playwright/test";
import { LoginPage } from "../pageObjectModel/LoginPage";
import { EmployeePage } from "../pageObjectModel/EmployeePage";
import { HomePage } from "../pageObjectModel/HomePage";
import employeeData from "../data/employee-data.json";
import { Navigaationpage } from "../pageObjectModel/Navigaationpage";

import { TIMEOUT } from "dns";

test.beforeEach(async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //await page.waitForTimeout(5000)

})
// This is the script for the actual worflow
test('EmployeeWorkflow', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const employeePage = new EmployeePage(page);
    const homePage = new HomePage(page);
    const navigaationpage = new Navigaationpage(page)

    await loginPage.login("Admin", "admin123")

    for (const data of employeeData.employeeData) { // This interation will read the Jason data and add employees

        await navigaationpage.navigateToPIMPageAndAddEmployee()
        await employeePage.addEmployee(data.firstName, data.lastName)
        await navigaationpage.navigateToEmployeeList()
        await employeePage.searchEmployee(data.firstName)
        await employeePage.verifyEmployeeDetails(data.firstName, data.lastName)

    }
    
})
