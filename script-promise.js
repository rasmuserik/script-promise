// # Script promis
//
// Small utility function for loading code through a script tag,
// and returning a promise that will be fulfilled when the
// code is loaded.
//
export default (src) => new Promise((resolve, reject) => {
  let elem = document.createElement('script');
  elem.src = src;
  elem.onload = resolve;
  elem.onerror = reject;
  document.head.appendChild(elem);
});
