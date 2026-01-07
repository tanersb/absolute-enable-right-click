// ==UserScript==
// @name         Universal Copy & Enable Right Click (Smart Mode)
// @namespace    https://github.com/tanersb/absolute-enable-right-click
// @version      2.2
// @description  Telegram'da metin seçimi ve kopyalamayı açar, diğer sitelerde sağ tık engelini kaldırır.
// @author       tanersb
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @updateURL    https://github.com/tanersb/absolute-enable-right-click/raw/main/enable-copy.user.js
// @downloadURL  https://github.com/tanersb/absolute-enable-right-click/raw/main/enable-copy.user.js
// @run-at       document_start
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // Telegram algılama
    const isTelegram = window.location.hostname.includes('telegram.org');

    // 1. CSS İLE METİN SEÇİMİNİ ZORLA AÇMA
    // Telegram dahil her yerde çalışır.
    const css = `
        *, *::before, *::after {
            -webkit-user-select: text !important;
            -moz-user-select: text !important;
            user-select: text !important;
        }
    `;

    try {
        const head = document.head || document.documentElement;
        const style = document.createElement('style');
        style.type = 'text/css';
        style.appendChild(document.createTextNode(css));
        head.appendChild(style);
    } catch (e) {}

    // 2. AKILLI SAĞ TIK YÖNETİMİ
    function smartHandler(e) {
        // Eğer Telegram'daysak sağ tıka MÜDAHALE ETME.
        // Çünkü müdahale edince Telegram "Syntax Error" verip çöküyor.
        if (isTelegram) return;

        // Diğer sitelerde ALT tuşuna basılı tutulursa engeli aş
        if (e.altKey) {
            e.stopPropagation();
            e.stopImmediatePropagation();
            return true;
        }
    }

    // Olay dinleyicileri
    window.addEventListener('contextmenu', smartHandler, true);
    document.addEventListener('contextmenu', smartHandler, true);

    // 3. KOPYALAMA KISITLAMALARINI KALDIR
    // Ctrl+C yapıldığında araya giren engelleri kaldırır.
    function allowCopy(e) {
        e.stopPropagation();
    }

    // Telegram'da kopyalama olayını (Ctrl+C) serbest bırak ama "selectstart"a dokunma
    window.addEventListener('copy', allowCopy, true);

    if (!isTelegram) {
        window.addEventListener('selectstart', allowCopy, true);
    }

})();
