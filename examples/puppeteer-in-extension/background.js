/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import {puppeteer, connect} from './main.js';

chrome.tabs
  .create({
    url: 'https://example.com',
  })
  .then(async tab => {
    const tabId = tab.id;
    console.log(puppeteer);
    const browser = await connect(tabId);
    console.log(browser);

    const [page] = await browser.pages();
    console.log(await page.evaluate('document.title'));
  });
