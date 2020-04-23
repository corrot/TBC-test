var faker = require("faker");

// faker.setLocale("ge");

var db = { clients: [], accounts: [] };

for (var i = 1; i <= 1000; i++) {
  db.clients.push({
    id: i,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    sex: faker.random.word("Male", "Female"),
    nationalId: faker.random.number(),
    mobile: faker.phone.phoneNumber(),
    address: faker.address.streetAddress(),
    billingAddress: faker.address.streetAddress(),
    image: faker.image.avatar(),
  });
}

for (var i = 1; i <= 10000; i++) {
  db.accounts.push({
    id: i,
    accountNumber: faker.finance.account(),
    clientNumber: faker.finance.account(),
    accountType: faker.finance.accountName(),
    currency: faker.finance.currencyCode(),
    status: faker.random.boolean(),
    clientId: Math.floor(Math.random() * 1000) + 1,
  });
}

console.log(JSON.stringify(db));
