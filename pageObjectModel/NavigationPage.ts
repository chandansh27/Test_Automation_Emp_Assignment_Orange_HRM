import { Page } from "@playwright/test";

/**
   This page naviates to PIM and than comes back to EmployeeList
 */

export class NavigationPage { 

  constructor(private readonly page: Page) { }

  async navigateToPIMPageAndAddEmployee() {

    await this.page.click("//span[contains(@class,'oxd-main-menu-item--name') and (.='PIM')]", { timeout: 5000, });
    await this.page.click("//a[text()='Add Employee']", { timeout: 5000 });
    await this.page.reload(); // using this becuse of flakiness in the website
   
  }

  async navigateToEmployeeList() {
    await this.page.click("//span[contains(@class,'oxd-main-menu-item--name') and (.='PIM')]", { timeout: 10000 });
    await this.page.click("//a[contains(@class,'oxd-topbar-body-nav-tab-item') and text()='Employee List']");

  }

}

