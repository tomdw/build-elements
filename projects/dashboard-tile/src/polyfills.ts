
// in extenals mode, polyfills are directly loaded into index.html
// to make sure everything is loaded in the right order
// the original contents of this file has been moved to polyfills.ts.bak
  


// This polyfill for web components has to be loaded 
// after the other polyfills (esp. the core-js ones) 
// using a script tag
if (!window['customElements']) {
    document.write('<script src="/assets/webcomponentsjs/webcomponents-loader.js"></script>');
}
