import { test, expect, devices } from '@playwright/test';
import { HomePage } from '../../page_objects/homePage';
import { MobSummerSkinCareEventPage } from '../../page_objects/summerSkincareEventPage';
import { DayWearMatteMoisturiserPage } from '../../page_objects/dayWearMatteMoisturiserPage';
import { ViewCartPage } from '../../page_objects/viewCartPage';

test.use({ ...devices['iPhone 11'] });

test('Add DayWear Matte MoisturiserOil-Control Anti-Oxidant Moisture Gel Creme to cart', async ({
  page,
}, testInfo) => {
  testInfo.setTimeout(90000);
  const homePage = new HomePage(page);
  const summerSkincareEvent = new MobSummerSkinCareEventPage(page);
  const dayWearMatteMoisturiserPage = new DayWearMatteMoisturiserPage(page);
  const viewCartPage = new ViewCartPage(page);

  await homePage.navigate();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  await homePage.clickAcceptCookieButtonIfVisible();
  await homePage.clickSummerSkincareEvent();

  await summerSkincareEvent.assertPageHeading('Summer Skincare Event');
  await summerSkincareEvent.clickDayWearMattMoisturiser();

  await dayWearMatteMoisturiserPage.assertPageHeading('DayWear Matte Moisturiser');
  await dayWearMatteMoisturiserPage.clickAddToBag();
  await dayWearMatteMoisturiserPage.clickBagPopupViewBagg();

  await viewCartPage.assertPageHeading('My Bag');
  await viewCartPage.assertProductName('DayWear Matte Moisturiser');
  await viewCartPage.assertProductPrice('£44.00');
  await viewCartPage.assertOrderTotal('£46.95');
  await viewCartPage.clickCheckoutBtn();
});
