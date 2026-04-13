describe('Home sequence interactions', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('combines tap and swipe actions on home', async () => {
    await element(by.id('home-screen')).tapAtPoint({ x: 20, y: 120 });
    await element(by.id('home-screen')).swipe('up', 'fast', 0.6);
    await element(by.id('home-screen')).swipe('down', 'fast', 0.6);
    await expect(element(by.id('home-screen'))).toBeVisible();
  });
});
