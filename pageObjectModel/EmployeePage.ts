import { Page, expect } from "@playwright/test";
import { TIMEOUT } from "dns";

export class EmployeePage {
    constructor(private readonly page: Page) { }

    async addEmployee(firstName: string, lastName: string) {
        await this.page.locator("[name='firstName']").fill(firstName)
        await this.page.locator("[name='lastName']").fill(lastName)
        //await page.locator('[type="submit"]').click() //button[.='save']
        await this.page.locator('//button[normalize-space()="Save"]').click();
        //await this.page.waitForTimeout(5000)


    }

    async searchEmployee(EmployeeName: string) {
        await this.page.locator("//div[contains(@class,'oxd-input-group') and contains(.,'Employee Name')]//input").fill(EmployeeName)
        await this.page.locator('//button[normalize-space()="Search"]').click()
        //await this.page.waitForTimeout(5000)
    }

    async verifyEmployeeDetails(expectedFirstName: string, expectedLastName: string) {
        const firstNameElement = await this.page.locator(`//div[@role='cell']//div[contains(.,'${expectedFirstName}')]`)
        expect(firstNameElement).toBeVisible({ visible: true })


    }
}
