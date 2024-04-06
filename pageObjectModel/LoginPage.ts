import { Page } from "playwright";

export class LoginPage {
  constructor(private readonly page: Page) {}

  async login(username: string, password: string) {
    await this.page.locator('[placeholder="Username"]').fill(username)
    await this.page.locator('[placeholder="Password"]').fill(password)
    await this.page.locator('[type="submit"]').click()
  }
}
