# DOT Simple API
DOT Intern challenge

## Technology
- Node.js
- Javascript
- ExpressJs untuk endpoint API
- JWT untuk token encryption
- Sequelize untuk database ORM
- Postgres 

## Cara Install
- Clone projek ini
- Install dependency yang dibutuhkan menggunakan `npm ..`
  - Sequelize CLI
  - Sequuelize menggunakan Postgres
  - ExpressJs
  - JWebToken

## Struktur Projek
Projek ini menggunakan `Repository Service Pattern` yang dimana merupakan pattern yang umum untuk sebuah projek NodeJs. 
Projek ini menggunakan beberapa layer seperti,

- Repository Layer: digunakan untuk menghandle data dari database.
- Service Layer: berisi logika untuk melakukan validasi seperti cek email atau cek password.
- Handler layer: Menglola HTTP request.
- Middleware: seperti namanya, middleware merupakan penengah atau jembatan untuk melakukan validasi token.
- Router: mengatur dan mengelompokkan endpoint

#### Dokumentasi API
lihat di folder collection

## Video Demo
https://www.loom.com/share/1800a2b2d6884ef283ffd8325a1ad412?sid=cfbf3fb3-d85a-4780-87b8-348162c8c666