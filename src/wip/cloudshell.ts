const getCloudShell = () =>
  document.querySelector(
    "cfc-panel[aria-label='Cloud Shell']"
  ) as HTMLElement | null;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.command == "cloudshell") {
    const currentWindowHeight = window.innerHeight;
    const currentCloudShellHeight = parseInt(
      getCloudShell()!.style.height.replace("px", "")
    );
    if (currentWindowHeight / 2 <= currentCloudShellHeight) {
      getCloudShell()!.style.height = "0px";
    } else {
      getCloudShell()!.style.height = `${currentWindowHeight}px`;
    }
  }
  // https://qiita.com/noenture/items/3978f638f2ffb8ff0995
  sendResponse();
  return;
});

export {};
