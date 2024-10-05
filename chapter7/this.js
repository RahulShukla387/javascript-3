const student = {
    name: 'Rahul shukla',
    age: 20,
    eng: 89,
    phy: 98,
    chem: 94,
    math: 99,
    hindi: 96,
    // creating a method inside the object student
    avg(){
        avg = (this.phy + this.chem+this.hindi +this.math+this.eng)/5;
        console.log(avg);
    }
}
console.log(student.avg());