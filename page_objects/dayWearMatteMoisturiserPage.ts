import { test, expect, Locator, Page } from '@playwright/test';

// page heading:
export class DayWearMatteMoisturiserPage {
  private readonly page: Page;

  // create constructor
  constructor(page: Page) {
    this.page = page;
  }

  private dayWearMatteMoisturiserPageElements = {
    productPrice: `p[class="sc-pjGtN fzmeAg elc-price-formatted elc-product-price js-product-price"`,
    bagPopupClose: `svg[data-cart-drawer-target="modalClose"]`,
    bagPopupViewBag: `(//span[@slot="button-drawer-cta-3"])[1]`,
    bagPopupContinueShopping: `(//span[@slot="button-drawer-cta-3"])[1]`,
  };

  async assertPageHeading(expectedText: string) {
    const productNameElement = await this.page.getByRole('heading', {
      name: expectedText,
    });
    const productName = await productNameElement.textContent();
    await expect(productName).toContain(expectedText);
  }

  async clickAddToBag() {
    await this.page.getByRole('button', { name: 'Add To Bag' }).click();
  }

  async clickBagPopupClose() {
    await this.page
      .locator(this.dayWearMatteMoisturiserPageElements.bagPopupClose)
      .click();
  }

  async clickBagPopupViewBagg() {
    await this.page
      .locator(this.dayWearMatteMoisturiserPageElements.bagPopupViewBag)
      .click();
  }

  async clickBagPopupContinueShopping() {
    await this.page
      .locator(this.dayWearMatteMoisturiserPageElements.bagPopupContinueShopping)
      .click();
  }
}
