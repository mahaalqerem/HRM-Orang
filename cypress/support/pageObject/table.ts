class table{
    private columns: Array<string> = new Array;

    create(table:Array<string>){
        this.columns = table;
    }
    getcell(row:number,attr:string){
        let ind = this.columns.indexOf(attr);
        return cy.get(`div.oxd-table-body > div:nth-child(${row}) > div > div:nth-child(${ind+1})`);
    }

    checkValue(row:number,attr:string,expected:string){
        this.getcell(row,attr).should('have.text',expected);
    }

  
}

export default table;