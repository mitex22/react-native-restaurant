describe('Home interaction swipe down', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('swipes down on home screen', async () => {
    await element(by.id('home-screen')).swipe('down', 'fast', 0.7);
    await expect(element(by.id('home-screen'))).toBeVisible();
  });
});
