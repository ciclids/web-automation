import { After, Before } from '@cucumber/cucumber';
import { Capabilities } from "@wdio/types";
import { addObject, addScreenshot } from "../support/lib/context";

const cap = browser.capabilities as Capabilities.Capabilities;

Before({ tags: '@OnlyChrome' }, () => {
  if (cap.browserName !== 'chrome') {
    return 'skipped';
  }

  return undefined;
});

Before({ tags: '@OnlyFirefox' }, () => {
  if (cap !== 'firefox') {
    return 'skipped';
  }

  return undefined;
});

After({ tags: '@Verbose' }, (scenario: any) => {
  addObject({
    browser: {
      url: browser.getUrl(),
      title: browser.getTitle(),
    },
    duration: scenario.result.duration,
    status: scenario.result.status,
    error: scenario.result.exception,
  });

  addScreenshot();
});
