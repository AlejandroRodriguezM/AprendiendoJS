class SayHiMixin {
    sayHi() {
        alert(`Hola ${this.name}`);
    }
    sayBye() {
        alert(`Adiós ${this.name}`);
    }
}

class User extends SayHiMixin {
    constructor(name) {
        super();
        this.name = name;
    }
}