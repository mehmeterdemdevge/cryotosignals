require('dotenv').config()

module.exports = {
  DATABASE_URL: process.env.DATABASE_URL,
  PORT: process.env.http_port|| 8080,
}

console.log(process.env.http_port)