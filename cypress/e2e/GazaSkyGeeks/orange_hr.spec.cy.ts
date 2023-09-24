import loginpage from "../../support/pageObject/login";

const loginobj :loginpage = new loginpage();
describe('Login Home Page',()=>{
   
   
        beforeEach(function(){
            cy.visit('https://opensource-demo.orangehrmlive.com/')
           // cy.intercept('https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/shortcuts')


        })
      
    it('valid log in', ()=> {
       
        loginobj.login("Admin" , "admin123")


    })
//    it('verify login response ',()=>{
//         cy.request({
//             method:'POST',
//             url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users'  ,
//             body:
//             {username: "tammm", 
//             password: "123456a", 
//             status: true, 
//             userRoleId: 1, 
//             empNumber: 5
//         }
//                }).then((response) => {
//               expect(response).property('status').to.equal(200)
//             })
//         })
 
    })



  
 
   
    
  
      