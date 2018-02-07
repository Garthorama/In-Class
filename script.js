let user = {
    firstName: "Coder",
    lastName: "Bill",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  };