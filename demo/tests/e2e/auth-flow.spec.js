const { test, expect } = require('@playwright/test');

test('Succesfull login shows correct user on dashboard', async ({ page }) => {
    
    await page.goto('http://localhost:3000/auth.html');
    await page.fill('#fullName', 'Jonathan');

    await page.click('button[type="submit"]');
    await page.waitForURL('**/dashboard.html');

    await expect(page.locator('#userName')).toHaveText('Jonathan'); 
});