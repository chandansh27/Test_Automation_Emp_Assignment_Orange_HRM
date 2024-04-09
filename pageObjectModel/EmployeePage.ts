import { Page } from "@playwright/test";

/**
   This page will add Employees, search Employees and get personal details of searched employee
 */
export class EmployeePage {

    constructor(private readonly page: Page) { }

    async addEmployee(firstName: string, lastName: string) {
        await this.page.locator("[name='firstName']").fill(firstName);
        await this.page.locator("[name='lastName']").fill(lastName);
        await this.page.locator('//button[normalize-space()="Save"]').click();

        await this.page.waitForTimeout(5000);

    }

    async searchEmployee(employeeName: string) {
        await this.page.locator("//div[contains(@class,'oxd-input-group') and contains(.,'Employee Name')]//input").fill(employeeName);
        await this.page.locator('//button[normalize-space()="Search"]').click();

        await this.page.waitForTimeout(6000)

    }

    async getSearchedEmployeeDetails() {

        const firstNameElement = await this.page.locator("//div[@class='oxd-table-card'][1]//div[@role='cell'][3]//div");
        firstNameElement.click();

        await this.page.waitForTimeout(5000);

        const employeeDetails =
        {
            firstName: await this.page.locator('input[name="firstName"]').inputValue(),
            lastName: await this.page.locator('input[name="lastName"]').inputValue()

        };
        //await this.page.waitForTimeout(6000)
        return employeeDetails;

    };
}
