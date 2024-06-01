
  (function main() {
  var hashedNames = [
  "runtime.0b407b6e491f76ce3813.js",
  "vendor.e50d6f2958b549874d2c.chunk.js",
  "main.a939a86ee26c77766c4a.chunk.js",
  "wfui.77e559b79db575fffbe9.chunk.js",
  "main.6f78b5133f378c92c1b9.chunk.css",
  "wfui.df910294345cedd2922e.chunk.css"
]
  function miniGET(src) {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', src)
  xhr.send()
}
  function getSelfScriptSrc() {
  var allScripts = document.getElementsByTagName('script')
  var scriptCount
  for (scriptCount = 0; scriptCount < allScripts.length; ++scriptCount) {
    if (
      allScripts[scriptCount].src &&
      allScripts[scriptCount].getAttribute('src').indexOf('accounts-cache') !== -1
    ) {
      return allScripts[scriptCount].getAttribute('src').replace('short/accounts-cache.js', '')
    }
  }
  return ''
}
  (function cacheAccountsAssetsInJs() {
  var commonPath = getSelfScriptSrc()
  hashedNames.forEach(function nameHandler(name) {
    if (name.indexOf('.js') !== -1) {
      miniGET(commonPath.concat('public/js/', name))
    }
    if (name.indexOf('.css') !== -1) {
      miniGET(commonPath.concat('public/stylesheets/', name))
    }
  })
}())
  }())
  