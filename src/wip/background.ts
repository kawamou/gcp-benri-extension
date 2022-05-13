chrome.commands.onCommand.addListener((command) => {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tab) => {
    const tabUrl = tab[0].url;
    const tabId = tab[0].id;
    if (!tabUrl || !tabId) {
      return;
    }
    if (tabUrl.includes("console.cloud.google.com")) {
      if (command === "cloudshell") {
        chrome.tabs.sendMessage(tabId, { command: "cloudshell" }, () => {
          console.log("cloudshell command");
          return;
        });
      }
      return;
    }
  });
});

export {};
