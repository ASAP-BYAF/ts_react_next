type Identity = {
  id: number | string;
  name: string;
};

type Contact = {
  name: string;
  email: string;
  phone: string;
};

type Employee = Identity & Contact;

const emploee: Employee = {
  id: 111,
  name: "Takuya",
  email: "test@example.com",
  phone: "01234",
};

console.log(emploee.id);
console.log(emploee.phone);
