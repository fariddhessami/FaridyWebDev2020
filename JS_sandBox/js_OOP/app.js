//OPP

function ServiceMan(f_name, l_name, dob, doe) {
    this.f_name = f_name;
    this.l_name = l_name;
    this.dob = dob;
    this.doe = doe;
}

ServiceMan.prototype.getFullname = function() {
    return `${this.f_name} ${this.l_name}`;
};

const johnDoe = new ServiceMan('John', 'Doe', '1-1-1914', '1-1-1914');

console.log(johnDoe);
console.log(johnDoe.getFullname);
console.log(johnDoe.getFullname());