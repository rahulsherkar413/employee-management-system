package com.employee.com.employeemanagementsystem.Controller;

import com.employee.com.employeemanagementsystem.Entity.Employee;
import com.employee.com.employeemanagementsystem.Service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Employee")
public class EmployeeController {

    @Autowired
    private EmployeeService service;

    @GetMapping
    public List<Employee> getAllEmployee(){
        return service.getAllEmployees();
    }
    @PostMapping
    public Employee addEmployee(@RequestBody Employee employee){
        return service.saveEmployee(employee);
    }
    @DeleteMapping("/{id}")
    public String DeleteEmployee(@PathVariable Long id) {
        service.DeleteEmployee(id);
        return "Employee Deleted Successfully ! ";
    }

}
