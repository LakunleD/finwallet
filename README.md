# FINWALLET

# Overview

This is a simple wallet api that credits and debits a wallet. 

Testing, Error handling and a lot of other standard measures weren't taken into consideration while building this API

# Tech Stack

- NestJS
- MySQL

# Getting Started

To run this API locally simply follow the instructions below:

### Prerequisites

You need to have or install the following:

1. Git
2. Node
3. NestJS
4. MySQL

### Installation

- clone repo
  ```
  git clone https://github.com/LakunleD/finwallet.git
  ```
- run installation
  ```
  npm install
  ```
- rename the file `.env.sample` to `.env` and fill in the appropriate details

- Run the migrations in the db/migrations folder

- start app
  ```
  npm run start:dev
  ```
- you can now make requests using postman

# Running Tests

simply run the following command in your git bash or command line

```
npm run test
```

# API Documentation

- POST /user: create a new user wallet.
- GET /user/:email: Fetches User wallet balance.
- POST /wallet/credit: Credit funds to the user wallet.
- POST /wallet/debit: Debits funds from the user wallet.


## Author

Olakunle Dosunmu
[@LakunleD](https://github.com/LakunleD)