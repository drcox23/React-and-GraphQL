// connecting to Prisma using Prisma bindings
// this file connects to the remote prisma DB and gives us the ability to query it.

const { Prisma } = require('prisma-binding'); // no import in Node JS, use import on Front end

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: false, // turn it on when you need it.
});

module.exports = db;
