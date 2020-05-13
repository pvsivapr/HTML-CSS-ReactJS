var storage = {
    set: function(item, value)
    {
        sessionStorage.setItem(item, value);
    },
    get: function(item)
    {
        var value = sessionStorage.getItem(item);
        return value;
    },
};
var set = document.getElementById('set');
var get = document.getElementById('get');
var output = document.getElementById('output');
set.onClick() = function(){
    storage.set('test', 'value');
};
get.onClick() = function()
{
    var value = storage.get('test');
    output.innerHTML = value;
};

var eee = document.readyState;