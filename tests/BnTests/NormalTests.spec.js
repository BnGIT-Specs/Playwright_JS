import { test, expect } from '@playwright/test';

test('Launch-Automation Execise', async ({ page }) => {
  //const Context = await browser.newContext();
  //const page = await Context.newPage();
  await page.goto('https://automationexercise.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Automation/);
});

test('Validate - Login Page', async ({ page }) => {  
  //const Context = await browser.newContext();
  //const page = await Context.newPage();
  await page.goto('https://automationexercise.com/');

  // Click the get started link.
  await page.getByRole('link', { name: ' Signup / Login' }).click();

  // Expects page to have a heading with the name of Installation.  
  await expect(page).toHaveTitle(/Login/);
});

test('Validate - Successful login', async ({ page }) => {
  //const Context = await browser.newContext();
  //const page = await Context.newPage();
  await page.goto('https://automationexercise.com/');

  // Click the get started link.
  await page.getByRole('link', { name: ' Signup / Login' }).click();

  await page.locator('[data-qa="login-email"]').fill('bivasCareers@gmail.com');
  await page.locator('[data-qa="login-password"]').fill('test@123'); 
  await page.locator('[data-qa="login-button"]').click();

  await expect(page).toHaveTitle('Automation Exercise');
  await expect(page.getByRole('link', { name: ' Logout' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'AutomationExercise' })).toBeVisible();
});
