$(document).ready(function () {
    $.getJSON("getdata.json",function(emp){
    var employeeData='';
    $.each(emp.data,function(key,value){
        employeeData+='<tr>'
        employeeData+='<td>'+value.id+'</td>';
        employeeData+='<td>'+value.employee_name+'</td>';
        employeeData+='<td>'+value.employee_salary+'</td>';
        employeeData+='<td>'+value.employee_age+'</td>';
        employeeData+='</tr>'
    });
    $('.employee-table').append(employeeData);
    });

});