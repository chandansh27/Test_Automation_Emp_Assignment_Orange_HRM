import { Page } from "playwright";

export class LoginPage {
  
  constructor(private readonly page: Page) { }

  /**
    This method is for Login to website 
   */
  async login(username: string, password: string) {

    await this.page.getByPlaceholder('Username').fill(username);
    await this.page.getByPlaceholder('Password').fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
    
  }

}
