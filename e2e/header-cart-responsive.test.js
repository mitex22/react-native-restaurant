describe('Header cart button', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('keeps app responsive after tapping header cart button', async () => {
    await element(by.id('home-header-cart-button')).tap();
    await waitFor(element(by.id('cart-empty-title')))
      .toBeVisible()
      .withTimeout(5000);
  });
});
