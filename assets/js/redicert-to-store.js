let OS = getOS()
if (OS === "ios") {
    window.location.replace(window.state.downloadLinks.ios)
} else if (OS === "android") {
    window.location.replace(window.state.downloadLinks.android)
} else {
    
}