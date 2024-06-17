import { test, expect, Locator, Page } from '@playwright/test';

// page heading:
export class ViewCartPage {
  private readonly page: Page;

  // create constructor
  constructor(page: Page) {
    this.page = page;
  }

  private viewCartPageElements = {
    pageHeading: `h2[class="viewcart-panel__title checkout__panel-title"]`,
    productName: `div[class="product_name cart-item__product-name"]`,
    productPrice: `div[class="total column cart-item__total"]`,
    orderTotal: `div[class="total value order-summary__total-value"]`,
    checkoutBtn: `a[class="btn btn-primary continue-checkout"]`,
  };

  async assertPageHeading(expectedText: string) {
    const pageHeadingElement = this.page.locator(this.viewCartPageElements.pageHeading);
    const pageHeading = await pageHeadingElement.textContent();
    await expect(pageHeading).toContain(expectedText);
  }

  async assertProductName(expectedText: string) {
    const productNameElement = this.page.locator(this.viewCartPageElements.productName);
    const productName = await productNameElement.textContent();
    await expect(productName).toContain(expectedText);
  }

  async assertProductPrice(expectedText: string) {
    const productPriceElement = this.page.locator(this.viewCartPageElements.productPrice);
    const productPrice = await productPriceElement.textContent();
    await expect(productPrice).toContain(expectedText);
  }

  async assertOrderTotal(expectedText: string) {
    const orderTotalElement = this.page.locator(this.viewCartPageElements.orderTotal);
    const orderTotal = await orderTotalElement.textContent();
    await expect(orderTotal).toContain(expectedText);
  }

  async clickCheckoutBtn() {
    await this.page.locator(this.viewCartPageElements.checkoutBtn).click();
  }
}
