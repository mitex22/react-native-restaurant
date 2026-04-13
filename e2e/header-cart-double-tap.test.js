describe('Header cart button double tap', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('taps header cart button twice', async () => {
    await element(by.id('home-header-cart-button')).tap();
    await waitFor(element(by.id('cart-empty-title')))
      .toBeVisible()
      .withTimeout(5000);
    await element(by.id('cart-empty-title')).tap();
    await expect(element(by.id('cart-empty-title'))).toBeVisible();
  });
});
