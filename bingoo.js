chrome.tabs.onUpdated.addListener(
    function(tabId, changeInfo, tab) {
        var url = tab.url;
        if (url.indexOf('://www.bing.com/maps/default.aspx') > 0 && changeInfo.status == 'loading') {
            var rtpIndex = url.indexOf("rtp=");
            if (rtpIndex >= 0) {
                var rtp = url.substr(rtpIndex + 4);
                rtp = rtp.substr(0, rtp.indexOf('&'));
                var address = rtp.substr(rtp.lastIndexOf('_') + 1);
                chrome.tabs.update(tabId, {url: 'https://www.google.com/maps/preview/place/' + address});
            }
        }
    }
)
