import { Page, expect } from "@playwright/test";

export class Navigaationpage {
  constructor(private readonly page: Page) { }

  async navigateToPIMPageAndAddEmployee() {
    //await this.page.click("//span[.='PIM']",{timeout: 5000}) 

    await this.page.click("//span[contains(@class,'oxd-main-menu-item--name') and (.='PIM')]", { timeout: 5000, })

    //await this.page.locator('oxd-main-menu-item--name').filter({hasText: "PIM"}).first().click()

    await this.page.click("//a[text()='Add Employee']", { timeout: 5000 })


  }

  async navigateToEmployeeList() {
    await this.page.click("//span[contains(@class,'oxd-main-menu-item--name') and (.='PIM')]", { timeout: 10000 })
    //await this.page.click("//a[text()='Employee List']",{timeout: 7000, delay: 5000})
    await this.page.click("//a[contains(@class,'oxd-topbar-body-nav-tab-item') and text()='Employee List']", { timeout: 7000 })



  }

}

