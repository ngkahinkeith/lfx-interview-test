export const listData = (name?: string) => {
    return new Promise<Contact[]>((resolve, reject) => {
      if (name && name.length > 0) {
        // simple filtering
      const contact = data().filter((contact) => contact.name.toLowerCase().includes(name.toLowerCase()));
      return resolve(contact);
    }
    return resolve(data());
  });
}

export const detailData = (id: number) => {
  return new Promise<Contact>((resolve, reject) => {
    const detail = data().find((contact) => contact.id === id);
    if (detail) resolve(detail);
    reject("Contact not found");
  });
}

export interface Contact {
  id: number;
  name: string;
  age: number;
  gender: "male" | "female";
  role: string;
  phone: string;
  email: string;
  address: string;
}

const data = (): Contact[] => {
  return [
    {
      id: 1,
      name: "Peter Chan",
      age: 25,
      role: "Programmer",
      gender: "male",
      phone: "12345678",
      email: "peter.chan@testing.com",
      address: "Yau Ma Tei"
    },
    {
      id: 2,
      name: "Mary Lee",
      age: 24,
      role: "Human resources manager",
      gender: "female",
      phone: "23456789",
      email: "mary.lee@testing.com",
      address: "Tsuen Wan"
    },
    {
      id: 3,
      name: "Alan Lau",
      age: 32,
      role: "Project manager",
      gender: "male",
      phone: "34567890",
      email: "alan.lau@testing.com",
      address: "Kowloon City District"
    },
    {
      id: 4,
      name: "Jason Lam",
      age: 29,
      role: "Accountant",
      gender: "male",
      phone: "45678901",
      email: "peter.chan@testing.com",
      address: "Chai Wan"
    },
    {
      id: 5,
      name: "Daisy Chan",
      age: 29,
      role: "Designer",
      gender: "female",
      phone: "98765432",
      email: "daisy.chan@testing.com",
      address: "Mong Kok"
    },
    {
      id: 6,
      name: "Michael Wong",
      age: 20,
      role: "Part-time Quality Assurance Engineer",
      gender: "male",
      phone: "96385274",
      email: "michael.wong@testing.com",
      address: "Sha Tin"
    },
    {
      id: 7,
      name: "Robert Cheung",
      age: 40,
      role: "Project Manager",
      gender: "male",
      phone: "95135782",
      email: "robert.cheung@testing.com",
      address: "Kuwn Tong"
    }
  ];
};