class ServiceMan {
    constructor(f_name, l_name, dodId, branch) {
        this.f_name = f_name;
        this.l_name = l_name;
        this.dodId = dodId;
        this.branch = branch;
    }
}

class Marine extends ServiceMan {
    constructor(f_name, l_name, dodId) {
        super(f_name, l_name, dodId, 'Marines');
    }
}

var joeGage = new ServiceMan('Joe', 'Gage', 1212, 'Army');
var jackNewman = new Marine('Jack', 'Newman', 1231);

console.log(joeGage);
console.log(jackNewman);