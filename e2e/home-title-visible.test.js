describe('Home title visibility', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('shows restaurant name on home screen', async () => {
    await expect(element(by.id('home-restaurant-name'))).toBeVisible();
  });
});
