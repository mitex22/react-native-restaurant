describe('Home interaction swipe up', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('swipes up on home screen', async () => {
    await element(by.id('home-screen')).swipe('up', 'fast', 0.7);
    await expect(element(by.id('home-screen'))).toBeVisible();
  });
});
