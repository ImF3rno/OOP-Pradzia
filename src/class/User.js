class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    setRole(role){
        this.role=role;
    }
    setDepartment(department){
        this.department=department;
    }
    getFullUserData(){
        return `${this.name}-${this.email}-${this.role}-${this.department}`;
    }
    displayUI(){
        document.querySelector('ul').innerHTML=`
            <li>${this.name}</li>
            <li>${this.email}</li>
            <li>${this.role || 'There is none'}</li>
            <li>${this.department || 'There is none'}</li>
        `;
    }
}

module.exports={
    User
};
