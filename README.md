# Universal Copy & Enable Right Click (Smart Mode) 🔓

![Version](https://img.shields.io/badge/version-2.2-blue?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)
![Platform](https://img.shields.io/badge/platform-Tampermonkey-orange?style=flat-square)

A robust Userscript that unlocks **copying**, **text selection**, and **right-click context menus** on websites that disable them. It features a unique **"Smart Mode"** designed specifically to prevent bugs on complex web apps like **Telegram Web**.

---

## 🧠 What is "Smart Mode"?

Some modern web applications (like **Telegram Web**) rely heavily on their own custom right-click menus. Forcing a browser default right-click on these sites often causes them to crash or throw `Syntax Errors`.

**This script creates a hybrid solution:**
1.  **On Telegram Web:** It forces **Text Selection** (CSS Injection) & **Copying** (Ctrl+C) but *leaves the Right-Click menu untouched* to ensure the app remains stable.
2.  **On Other Sites:** It aggressively removes right-click blocks, enables text selection, and allows copying.

---

## 🚀 Features

* **Force Text Selection:** Injects `user-select: text !important` via CSS to make unselectable text selectable everywhere.
* **Unlock Copying:** Intercepts and neutralizes `copy` and `selectstart` blocking events.
* **Right-Click Bypass:** Re-enables the context menu on restrictive websites.
* **ALT Key Override:** On stubborn sites, hold the `ALT` key while right-clicking to force the browser menu to appear.
* **Lightweight:** Runs at `document_start` for immediate effect.

---

## 📥 Installation

1.  **Install a Userscript Manager:**
    * [Tampermonkey](https://www.tampermonkey.net/) (Recommended)
    * Violentmonkey
2.  **Install the Script:**
    * [**Click Here to Install**](https://github.com/tanersb/absolute-enable-right-click/raw/main/enable-copy.user.js)
    * *Or manually copy the script content.*

---

## 🎮 How to Use

* **Just Install & Forget:** The script works automatically on all websites.
* **Select & Copy:** You can now select text and use `Ctrl+C` on sites that previously blocked it.
* **Telegram Web:** You can now select text in chat bubbles without crashing the app.
* **Force Menu:** If a site still blocks the right-click menu, hold the **`ALT`** key and Right-Click.

---

## 📝 License

Distributed under the MIT License.

---
*Developed by **TanerSB***
