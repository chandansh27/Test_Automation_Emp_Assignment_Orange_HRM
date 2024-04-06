import { Page } from "playwright";

export class HomePage {
  constructor(private readonly page: Page) {}

  async navigateToHomePage() {
    await this.page.goto(this.page.url()); 
  }
}
