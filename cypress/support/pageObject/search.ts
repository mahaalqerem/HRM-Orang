import keyVal from "../../e2e/interfaces/keyVal";
class search{
    elements  = {
        employeeName: () => cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input'),
        employeeId: () => cy.get(':nth-child(2) > .oxd-input'),
        supervisorName: () => cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input'),
        jobTitle: () => cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'),
        searchBTN: () => cy.get('.oxd-form-actions > .oxd-button--secondary')


    
    }
  

cheakSearch(arr:keyVal[])
  {
    for(var i=0 ; i<arr.length ; i++)
    {
        if(arr[i].key == "employeeId")
        {
            this.elements. employeeId().type(arr[i].value)
        }
    }

    this.elements.searchBTN().click({force: true});

  }
}

export default  search;