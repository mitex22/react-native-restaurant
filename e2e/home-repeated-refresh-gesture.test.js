describe('Home repeated refresh gesture', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('handles two pull-to-refresh gestures', async () => {
    await element(by.id('home-screen')).swipe('down', 'fast', 0.7);
    await element(by.id('home-screen')).swipe('down', 'fast', 0.7);
    await expect(element(by.id('home-screen'))).toBeVisible();
  });
});
