package com.employee.com.employeemanagementsystem.Service;

import com.employee.com.employeemanagementsystem.Entity.Employee;
import com.employee.com.employeemanagementsystem.Repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository repository;

    public List<Employee> getAllEmployees(){
        return repository.findAll();
    }
    public Employee saveEmployee(Employee employee){
        return repository.save(employee);
    }
    public void DeleteEmployee(Long id){
        repository.deleteById(id);
    }

}
