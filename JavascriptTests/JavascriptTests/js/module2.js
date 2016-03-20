var employee = (function () {

    var employee = 'Maria Zarokosta';

    var getEmployee = function () {
        alert(employee);
    };

    var setEmployee = function (name) {
        employee = name;
        alert(employee);
    };

    return {
        getEmployee: getEmployee,
        setEmployee: setEmployee
    };

})();