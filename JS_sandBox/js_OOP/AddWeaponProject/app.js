class ServiceMan {
    constructor(f_name, l_name, dodId, branch) {
        super(props);
        this.f_name = f_name;
        this.l_name = l_name;
        this.dodId = dodId;
        this.branch = branch;
    }
}

class Marine extends ServiceMan {
    constructor(props) {
        super(props);
    }
}

ServiceMan joeGage = new ServiceMan('Joe', 'Gage', 1212, 'Army');
ServiceMan jackNewman = new Marine('Jack', 'Newman', 1231, 'Marines');


console.log(joeGage);
console.log(jackNewman);