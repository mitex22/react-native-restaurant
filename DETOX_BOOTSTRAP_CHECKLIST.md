# Detox Bootstrap Checklist (Reuse for New Projects)

Use this when creating a new React Native / Expo app and you want Detox quickly.

## 0) Machine prerequisites (once per Mac)

Run once (skip if already installed):

```bash
brew --version
pod --version
applesimutils --version
```

If missing:

```bash
brew install cocoapods
brew tap wix/brew
brew install applesimutils
```

## 1) Project prerequisites (every project)

From your new project root:

```bash
npm install --save-dev detox jest jest-circus expo-detox-config-plugin
```

If npm peer resolution is flaky:

```bash
echo "legacy-peer-deps=true" >> .npmrc
```

## 2) Expo config plugin (Expo managed projects)

Add plugin in `app.json`:

```json
{
  "expo": {
    "plugins": ["expo-detox-config-plugin"]
  }
}
```

## 3) Generate native projects

```bash
npx expo prebuild
npx pod-install
```

## 4) Create Detox config

Create `.detoxrc.js` (minimal iOS + Android template):

```js
/** @type {Detox.DetoxConfig} */
module.exports = {
  testRunner: {
    args: {
      $0: 'jest',
      config: 'e2e/jest.config.js',
    },
    jest: {
      setupTimeout: 120000,
    },
  },
  apps: {
    'ios.debug': {
      type: 'ios.app',
      binaryPath: 'ios/build/Build/Products/Debug-iphonesimulator/<AppName>.app',
      build:
        'xcodebuild -workspace ios/<AppName>.xcworkspace -scheme <AppName> -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build',
    },
    'android.debug': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
      testBinaryPath:
        'android/app/build/outputs/apk/androidTest/debug/app-debug-androidTest.apk',
      build:
        'cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug',
      reversePorts: [8081],
    },
  },
  devices: {
    simulator: {
      type: 'ios.simulator',
      device: {
        type: 'iPhone 16',
      },
    },
    emulator: {
      type: 'android.emulator',
      device: {
        avdName: 'Pixel_6_API_34',
      },
    },
  },
  configurations: {
    'ios.sim.debug': {
      device: 'simulator',
      app: 'ios.debug',
    },
    'android.emu.debug': {
      device: 'emulator',
      app: 'android.debug',
    },
  },
};
```

Replace `<AppName>` with your iOS native app/scheme name (often sanitized Expo app name).

## 5) Add E2E test runner config

Create `e2e/jest.config.js`:

```js
/** @type {import('jest').Config} */
module.exports = {
  rootDir: '..',
  testMatch: ['<rootDir>/e2e/**/*.test.js'],
  testTimeout: 120000,
  maxWorkers: 1,
  globalSetup: 'detox/runners/jest/globalSetup',
  globalTeardown: 'detox/runners/jest/globalTeardown',
  reporters: ['detox/runners/jest/reporter'],
  testEnvironment: 'detox/runners/jest/testEnvironment',
  testRunner: 'jest-circus/runner',
  verbose: true,
};
```

## 6) Add sample test

Create `e2e/app.test.js`:

```js
describe('App', () => {
  beforeAll(async () => {
    await device.launchApp({ newInstance: true });
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('shows home screen', async () => {
    await expect(element(by.id('home-screen'))).toBeVisible();
  });
});
```

## 7) Add stable selectors in app code

Add test IDs in UI:

```jsx
<ScrollView testID="home-screen">
```

Avoid selecting by fragile text where possible.

## 8) Add npm scripts

In `package.json`:

```json
{
  "scripts": {
    "e2e:prebuild": "expo prebuild",
    "e2e:build:ios": "detox build --configuration ios.sim.debug",
    "e2e:test:ios": "detox test --configuration ios.sim.debug",
    "e2e:build:android": "detox build --configuration android.emu.debug",
    "e2e:test:android": "detox test --configuration android.emu.debug"
  }
}
```

## 9) Run sequence (iOS)

Terminal A:

```bash
npm start
```

Terminal B:

```bash
npm run e2e:build:ios
npm run e2e:test:ios
```

## 10) Run sequence (Android)

```bash
npm run e2e:build:android
npm run e2e:test:android
```

## 11) Quick troubleshooting

- `applesimutils: command not found`  
  Install with Homebrew (`brew tap wix/brew && brew install applesimutils`).

- `Failed to find a device by type`  
  Set a real simulator name from `applesimutils --list`.

- `EACCES` on npm install  
  Fix ownership:
  ```bash
  sudo chown -R "$(whoami)" ~/.npm
  sudo chown -R "$(whoami)" "<project-path>"
  ```

- Script fails with `.../SoftUni: is a directory`  
  Your path has spaces and some generated scripts are poorly quoted. Move project to a no-space path if possible.

- iOS only runs on macOS  
  Detox iOS requires Xcode + simulator.

## 12) Recommended personal workflow

1. Keep a small reusable `e2e/smoke.test.js`.
2. Add `testID`s while building screens (not later).
3. Run `e2e:test:ios` on every major UI flow change.
4. Keep one stable simulator target in `.detoxrc.js`.

