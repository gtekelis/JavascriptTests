var people = (function () {
    var name = 'George'

    var sayName = function() {
        alert(name);
    };
    
    return {
        sayName: sayName
    }

}());