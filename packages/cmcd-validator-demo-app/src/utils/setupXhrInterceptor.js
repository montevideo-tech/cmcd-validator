
export function setupXhrInterceptor(dispatchReqList) {
  var origOpen = XMLHttpRequest.prototype.open;
  var origSend = XMLHttpRequest.prototype.send;
  
  function newXhr() {
    var xhr = new XMLHttpRequest();
    
    xhr.open = function(method, url) {
      console.log(url);
      dispatchReqList({type: 'saveQuery' , payload: { url: url, result: CMCDQueryValidator(url) }});
      origOpen.apply(xhr, arguments);
    };
    
    xhr.send = function() {
      console.log(arguments)
      origSend.apply(xhr, arguments);
    };
    
    return xhr;
  }

  window.XMLHttpRequest = newXhr;
}