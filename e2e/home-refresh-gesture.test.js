describe('Home refresh gesture', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('supports pull-to-refresh on home screen', async () => {
    await expect(element(by.id('home-screen'))).toBeVisible();
    await element(by.id('home-screen')).swipe('down', 'fast', 0.7);
    await expect(element(by.id('home-screen'))).toBeVisible();
  });
});
