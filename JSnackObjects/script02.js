var browser = {
    tab: ["Gmail", "GitHub", "Facebook",],
    activeTab: 1,
}

for (i = 0; i < browser.tab.length; i++) {
    
    if (browser.tab[i] === "Facebook") {
        browser.tab.splice(i, 1)
    }

    if (browser.tab >= browser.tab.length) {
        browser.activeTab = browser.tab.length--
    }
}

console.log(browser)