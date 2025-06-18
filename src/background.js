chrome.webRequest.onBeforeRequest.addListener(
  details => {
    const newUrl = details.url.replace(
      /^https?:\/\/([^\/]+\.)?scpfoundation\.net/,
      `https://mirr.scip.su`
    )
    return { redirectUrl: newUrl }
  },
  { urls: ["*://*.scpfoundation.net/*"] },
  ["blocking"]
)