// // this is the part two of assignment search for the new employee added by id && assertion for the table's data if it matched
import search from "../../support/pageObject/search";
import loginpage from "../../support/pageObject/login";
import PIMPage from "../../support/pageObject/PIMPage";
import table from "../../support/pageObject/table";
import addEmployee from "../../support/pageObject/addEmployee";

const searchobj :search= new search();
const loginobj :loginpage = new loginpage();
const pimobj:PIMPage=new PIMPage();
const tableobj:table=new table();
const addobj:addEmployee=new addEmployee();




describe('Assignment 4' , ()=>{
    beforeEach(() => {
               // visiting orangeHRM website
          cy.visit('https://opensource-demo.orangehrmlive.com/'),
               // login
           loginobj.login("Admin" , "admin123"),
               //   // declaring a fixture
           cy.fixture('employeeInfo').as('EmpInfo');
           
        

    })



        // this test case to search the employee by id
       it('search by key value' , ()=>{
        cy.get('@EmpInfo').then((infoData:any)=>{
 
       cy.get('.oxd-main-menu-item').contains('PIM').click(),
        cy.wait(4000)
    
     // search for employee by id
      searchobj.cheakSearch([ {key:'employeeId', value:infoData.employeeId}]);


     // check that values shown in table is correct
     tableobj.create(['Check', 'Id', 'First (& Middle) Name', 'Last Name', 'Job Title', 'Employment Status', 'Sub Unit', 'Supervisor', 'Actions']);
     tableobj.checkValue(1, 'Id', infoData.employeeId);
      tableobj.checkValue(1, 'First (& Middle) Name', `${infoData.firstName} ${infoData.middleName}`);
     tableobj.checkValue(1, 'Last Name', infoData.lastName);
     tableobj.checkValue(1, 'Job Title', infoData.jobTitle);
     tableobj.checkValue(1, 'Employment Status', infoData.employmentStatus);
      tableobj.checkValue(1, 'Sub Unit', infoData.subUnit);
      //  tableobj.checkValue(1, 'Supervisor', infoData.supervisor.split(' ')[0] + ' ' + infoData.supervisor.split(' ')[2]);  
 
        })
       })

  /*      
      // adding new employee using api
         it('addEmployee with api' , ()=>{
         cy.get("@EmpInfo").then((infoData: any) => {
    
           pimobj.elements.addBTN();
         addobj.elements.AddEMP().eq(1).click();
     
          addobj.elements.employeeId().then($element => {
           infoData.employeeId = $element.val();
           cy.request({
          method: "POST",
          url: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees",
          body: {
            employeeId: infoData.employeeId,
            firstName: infoData.firstName,
            middleName: infoData.middleName,
            lastName: infoData.lastName,
             },
            }).then(res => {
          infoData.empNumber = res.body.data.empNumber;
          // updating empInfo to have empNumber
          cy.writeFile('../../fixtures/employeeInfo.json', JSON.stringify(infoData));
           });
          });
           });// end test api
  
      });
      


*/

 //   });

 // });// end of test 1

  




    });

