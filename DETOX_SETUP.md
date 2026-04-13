# Detox Setup Guide (Expo + React Native)

This project is configured for Detox end-to-end (E2E) testing on iOS and Android.

Use this guide when setting up from scratch, or when onboarding a new machine.

## 1) What was configured in this repo

- Installed dev dependencies:
  - `detox`
  - `expo-detox-config-plugin`
  - `jest`
  - `jest-circus`
- Added `expo-detox-config-plugin` in `app.json`.
- Added Detox config in `.detoxrc.js`.
- Added Jest config for E2E in `e2e/jest.config.js`.
- Added sample E2E test in `e2e/app.test.js`.
- Added UI test selector: `testID="home-screen"` in `src/screens/HomeScreen.jsx`.
- Added npm scripts in `package.json` for prebuild/build/test.
- Added `.npmrc` with `legacy-peer-deps=true` for npm peer resolution reliability.
- Added iOS workarounds in `ios/Podfile` for path-with-spaces script issues.

## 2) Required tools (machine prerequisites)

You need these installed and available in `PATH`:

- Node + npm
- Xcode + iOS Simulator
- Homebrew
- CocoaPods (`pod`)
- applesimutils (required by Detox for iOS simulator management)

Install iOS tooling:

```bash
brew install cocoapods
brew tap wix/brew
brew install applesimutils
```

Verify:

```bash
pod --version
applesimutils --version
```

## 3) One-time setup order (new machine / fresh clone)

From project root:

```bash
npm install
npm run e2e:prebuild
npx pod-install
npm run e2e:build:ios
```

What each step does:

1. `npm install`  
   Installs JS dependencies, Detox CLI, Jest, Expo plugin.
2. `npm run e2e:prebuild` (`expo prebuild`)  
   Generates native projects (`ios/`, `android/`) and applies config plugins.
3. `npx pod-install`  
   Installs iOS native dependencies (Pods).
4. `npm run e2e:build:ios`  
   Builds simulator app binary used by Detox tests.

## 4) Running tests (iOS)

Debug Detox builds expect Metro to be running.

Terminal A:

```bash
npm start
```

Terminal B:

```bash
npm run e2e:test:ios
```

If needed, rebuild first:

```bash
npm run e2e:build:ios
```

## 5) Running tests (Android)

Make sure Android SDK/emulator is installed and update `avdName` in `.detoxrc.js`.

```bash
npm run e2e:build:android
npm run e2e:test:android
```

## 6) Important config files

- `app.json`  
  Contains `expo-detox-config-plugin`.
- `.detoxrc.js`  
  App binaries, build commands, simulator/emulator device config, test configs.
- `e2e/jest.config.js`  
  Detox + Jest runner integration.
- `e2e/app.test.js`  
  Sample E2E test.
- `ios/Podfile`  
  Contains post-install workarounds for script phases in paths with spaces.

## 7) Why this works

Detox needs:

1. A native app binary (built by Xcode/Gradle).
2. A test runner (Jest).
3. A device manager (simulator/emulator).
4. A communication channel between test process and app.

In this project:

- Native app is built with:
  - iOS: `xcodebuild` via `.detoxrc.js`
  - Android: `gradlew assembleDebug assembleAndroidTest`
- Tests run through `jest` with Detox environment.
- iOS simulator control uses `applesimutils`.
- Expo prebuild + plugin inject Detox-compatible native setup.

## 8) Common issues and fixes

### A) `EACCES` during `npm install`

Cause: root-owned files in project or npm cache.

Fix:

```bash
sudo chown -R "$(whoami)" ~/.npm
sudo chown -R "$(whoami)" "/absolute/path/to/project"
```

Then reinstall:

```bash
rm -rf node_modules
npm install
```

### B) `pod-install` fails with Ruby/gem errors

Cause: system Ruby/CocoaPods path issues.

Fix: use Homebrew CocoaPods (`brew install cocoapods`) and ensure `pod` is in PATH.

### C) `applesimutils: command not found`

Fix:

```bash
brew tap wix/brew
brew install applesimutils
```

### D) `Failed to find a device by type`

Fix `.detoxrc.js` simulator type to one installed locally:

```bash
applesimutils --list
```

Then set `devices.simulator.device.type` accordingly (for this machine, `iPhone 16`).

### E) Build script fails in paths with spaces

Symptom:

- `.../SoftUni: is a directory`
- failing script phases in Xcode build.

Cause: unquoted script path execution in generated Xcode phases.

Fix: this repo already includes Podfile post-install patch for this.

## 9) Daily workflow

After initial setup:

1. `npm start` (Terminal A)
2. `npm run e2e:build:ios` (only when needed)
3. `npm run e2e:test:ios` (Terminal B)

## 10) Useful scripts

From `package.json`:

- `npm run e2e:prebuild`
- `npm run e2e:build:ios`
- `npm run e2e:test:ios`
- `npm run e2e:build:android`
- `npm run e2e:test:android`

---

If tests suddenly start failing after SDK/tool updates, rerun:

```bash
npm run e2e:prebuild
npx pod-install
npm run e2e:build:ios
```

