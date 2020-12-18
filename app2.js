var Dog = /** @class */ (function () {
    function Dog() {
    }
    Object.defineProperty(Dog.prototype, "name", {
        get: function () {
            return "El nombre es " + this.name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    return Dog;
}());
var userDto;
userDto = {
    username: 'jhon',
    password: 'doe',
    isActive: true,
    dog: new Dog()
};
// componentA ---> interface --> componentB
