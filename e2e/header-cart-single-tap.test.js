describe('Header cart button single tap', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('taps header cart button once', async () => {
    await element(by.id('home-header-cart-button')).tap();
    await waitFor(element(by.id('cart-empty-title')))
      .toBeVisible()
      .withTimeout(5000);
  });
});
