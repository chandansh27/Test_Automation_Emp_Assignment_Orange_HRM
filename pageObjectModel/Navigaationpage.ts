import { Page, expect } from "@playwright/test";

export class Navigaationpage {
  constructor(private readonly page: Page) { }

  async navigateToPIMPageAndAddEmployee() {


    await this.page.click("//span[contains(@class,'oxd-main-menu-item--name') and (.='PIM')]", { timeout: 5000, })
    await this.page.click("//a[text()='Add Employee']", { timeout: 5000 })


  }

  async navigateToEmployeeList() {
    await this.page.click("//span[contains(@class,'oxd-main-menu-item--name') and (.='PIM')]", { timeout: 10000 })
    //await this.page.waitForTimeout(10000)// This time need to wait because application behaving very flacky after 2 iteration
    await this.page.click("//a[contains(@class,'oxd-topbar-body-nav-tab-item') and text()='Employee List']")
    

  }

}

