const admin = {
      name: "Asif"
}
console.log(admin.name);
function Person(name, dob) {
      this.name = name;
      this.birthDay = new Date(dob);
      this.calCulateAgeDate = () => {
            const diff = Date.now()  - this.birthDay.getTime();
            const ageDate = new Date(diff);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
      }

}

let user1 = new Person("Asif1", '01-20-1960');
console.log("Calculate Age is ", user1.calCulateAgeDate());
