onmessage = 
function(e)
{
    var one = parseInt(e.data.one);
    var two = parseInt(e.data.two);
    this.postMessage(one*two);
};