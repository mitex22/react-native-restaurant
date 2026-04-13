import axios from "axios";
import Constants from "expo-constants";
import { NativeModules, Platform } from "react-native";

/** json-server port — run: npm run server (listens on 0.0.0.0 so phones/emulators can connect) */
const JSON_SERVER_PORT = 3001;

function hostFromExpoDebugger() {
    const raw =
        Constants.expoGoConfig?.debuggerHost ??
        Constants.manifest?.debuggerHost ??
        null;
    if (!raw) return null;
    const host = String(raw).split(":")[0]?.trim();
    return host || null;
}

function hostFromScriptURL() {
    const scriptURL = NativeModules.SourceCode?.scriptURL;
    if (typeof scriptURL !== "string") return null;
    const match = scriptURL.match(/:\/\/([^/:]+)/);
    return match?.[1] ?? null;
}

/**
 * Prefer Expo’s debugger host (matches “Metro waiting on exp://192.168.x.x:8081”).
 * scriptURL often points at localhost, which on a real device is the phone itself — requests then fail.
 */
function resolveDevApiHost() {
    if (Platform.OS === "android") {
        const scriptURL = NativeModules.SourceCode?.scriptURL;
        if (typeof scriptURL === "string" && scriptURL.includes("10.0.2.2")) {
            return "10.0.2.2";
        }
    }

    const fromExpo = hostFromExpoDebugger();
    if (fromExpo) return fromExpo;

    const fromScript = hostFromScriptURL();
    if (fromScript && fromScript !== "localhost" && fromScript !== "127.0.0.1") {
        return fromScript;
    }

    return "127.0.0.1";
}

const api = axios.create({
    baseURL: `http://${resolveDevApiHost()}:${JSON_SERVER_PORT}`,
    timeout: 20000,
    headers: {
        "Content-Type": "application/json",
    },
});

if (__DEV__) {
    console.log(`[api] baseURL: ${api.defaults.baseURL}`);
}

export default api;
