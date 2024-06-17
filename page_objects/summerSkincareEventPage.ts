import { test, expect, Locator, Page } from '@playwright/test';

// page heading:
export class MobSummerSkinCareEventPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private summerSkincareEventPageElements = {
    pageHeading: `.elc-product-grid-header.js-product-grid-header`,
  };

  async assertPageHeading(expectedText: string) {
    const pageHeadingElement = this.page.locator(
      this.summerSkincareEventPageElements.pageHeading
    );
    const pageHeading = await pageHeadingElement.textContent();
    await expect(pageHeading).toContain(expectedText);
  }

  async clickDayWearMattMoisturiser() {
    await this.page.getByRole('link', { name: 'daywear matte moisturiser oil' }).click();
  }
}
