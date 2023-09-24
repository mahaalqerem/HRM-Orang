class addEmployee{

    elements={

      PIMbtn: () => cy.get('.oxd-main-menu-item') ,
      AddEMP: () => cy.get('.oxd-button--secondary'),
      // select the fistname + middle +last
      EmployeeInputName: () => cy.get('.--name-grouped-field'),
      saveNeeEmp: () => cy.get('button[type="submit"]'),
      switch:()=>cy.get('input[type="checkbox"]'),
   
      userName: () => cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'),
    // userName: ()=> cy.get('.oxd-input'),
      password:()=>  cy.get('input[type="password"]'),
   
 //    result: () => cy.get('.oxd-toast'),
     employeeId: () => cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input'),

      nickName: () =>  cy.get('.oxd-input'),
      driverLicenseNumber : () => cy.get('.oxd-input'),
      licenseExpiryDate:()=> cy.get('[placeholder="yyyy-mm-dd"]'),
      maritalStatus: ()=>cy.get('.oxd-select-text-input'),
      dateofBirth:()=>cy.get(' [placeholder="yyyy-mm-dd"]'),
      savebtndetails: ()=> cy.get('button[type="submit"]'),
      assertionName:()=> cy.get('.orangehrm-edit-employee-name'),
     




    ///   loading: () => cy.get('.oxd-loading-spinner-container'),

    //   employeeInputNickName: () => cy.get('.oxd-input').eq(4),
  
    //   searchBtn: () => cy.get('.orangehrm-left-space'),
 }

 // adding new employee
addNewEmployee(firstName:string,  MiddleName:string,  LastName:string, userName:string,password:string , conpassword:string)
       {
    this.elements.PIMbtn().contains('PIM').click();
    this.elements.AddEMP().eq(1).click();
    this.elements.EmployeeInputName().children().eq(0).type(firstName);
    this.elements.EmployeeInputName().children().eq(1).type(MiddleName);
    this.elements.EmployeeInputName().children().eq(2).type(LastName);

    this.elements.switch().click({force: true}),
    this.elements.userName().type(userName);
    this.elements.password().eq(0).type(password),

    this.elements.password().eq(1).type(conpassword),

    this.elements.saveNeeEmp().click(),
    cy.wait(5000),

    
   // assertion for the Employee name text shown in the header
    this.elements. assertionName().contains(firstName+' '+LastName).as('sucssssssssssssssssssssss');

  // cy.pause();
   // cy.pause(),

 //this.elements.result().contains('Successfully Saved').as('Successfully Added Employee');
}


personalDetails(nickName: string, driversLicenseNumber: string, licenseExpiryDate:string, maritalStatus: string, dateOfBirth: string, gender: string) {
  cy.wait(5000),

  this.elements.nickName().eq(4).type(nickName),
  this.elements.driverLicenseNumber().eq(7).type(driversLicenseNumber),
  this.elements.licenseExpiryDate().eq(0).type(licenseExpiryDate),
  this.elements.maritalStatus().eq(1).click({force: true}),
  this.elements.dateofBirth().eq(1).type(dateOfBirth),
  this.elements.savebtndetails().eq(1).click();

}

}

export default addEmployee;