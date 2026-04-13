describe('Restaurant app', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('shows the home screen with the restaurant name', async () => {
    await expect(element(by.id('home-screen'))).toBeVisible();
    await expect(element(by.text('Tasty Bites'))).toBeVisible();
  });
});
