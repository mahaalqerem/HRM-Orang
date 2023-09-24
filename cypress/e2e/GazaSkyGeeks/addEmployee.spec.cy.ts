// this is the first part (+Add new employee && - Fill the Personal Details)

import loginpage from "../../support/pageObject/login";
import addEmployee from "../../support/pageObject/addEmployee";
import search from "../../support/pageObject/search";


const searchobj :search= new search();
const loginobj :loginpage = new loginpage();
const addEmp :addEmployee =new addEmployee();




describe('part one of Assignment 4' , ()=>{
    beforeEach(() => {
            // visiting orange website
          cy.visit('https://opensource-demo.orangehrmlive.com/');
           // login
        loginobj.login("Admin" , "admin123");
         // declaring a fixture
        cy.fixture('employeeInfo').as('EmpInfo');
        cy.fixture('login').as('login');

    })

    it('Add New Employee via UI', () => {
       // adding new employee
       addEmp .addNewEmployee('Tamara','Mohammad','Noierat','jjjjjuuss6','Tam#123','Tam#123');
       // adding new details
        addEmp.personalDetails('tammm','1234 ', '2023-6-1', 'Single' ,'2023-6-9',' ');
     
         
    
      });

   })
      
      
      