export class Usuario{

    constructor(
        public id : number,
        public name : string,
        public lastName : string,
        public email : string,
        public phoneNumber : number,
        public type : number
    ){ }//constructor
    
    toString(){
        return `
        ${this.id},
        ${this.name},
        ${this.email},
        ${this.phoneNumber},
        ${this.type}
         `
    }//toString

}//class
