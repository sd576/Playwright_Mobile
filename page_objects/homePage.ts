import { test, expect, Locator, Page, chromium } from '@playwright/test';

export class HomePage {
  private readonly page: Page;
  private readonly url: string;

  constructor(page: Page) {
    this.page = page;
    this.url = 'https://www.esteelauder.co.uk';
  }

  private homePageElements = {
    rejectCookieButton: `button[id="onetrust-reject-all-handler"]`,
    rewardPopupClose: `#cboxClose`,
    rewardPopupJoin: `#cboxLoadedContent > div > div > div.loyalty_popover__signup-label > a`,
    summerSkincareEvent: `.module_block__hero_link`,
  };

  async navigate() {
    await this.page.goto(this.url);
  }

  async assertPageHeading(expectedText: string) {
    const productNameElement = await this.page.getByRole('heading', {
      name: expectedText,
    });
    const productName = await productNameElement.textContent();
    await expect(productName).toContain(expectedText);
  }

  async clickAcceptCookieButtonIfVisible() {
    try {
      const acceptCookieButton = await this.page.waitForSelector(
        'button[id="onetrust-accept-btn-handler"]',
        { state: 'visible' }
      );
      await acceptCookieButton.click();
    } catch (error) {
      console.log('Accept cookie button not found or visible');
    }
  }

  async closeRewardPopup() {
    await this.page.getByRole('button', { name: 'close' }).click();
  }

  async clickSummerSkincareEvent() {
    await this.page.locator('#node-401329').getByRole('link').first().click();
  }

  async rejectCookies() {
    await this.page.locator(this.homePageElements.rejectCookieButton).click();
  }
}
