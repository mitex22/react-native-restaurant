describe('Home interaction tap', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('taps the home screen without crashing', async () => {
    await element(by.id('home-screen')).tapAtPoint({ x: 40, y: 80 });
    await expect(element(by.id('home-screen'))).toBeVisible();
  });
});
