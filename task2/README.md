# Todo List API

REST API sederhana untuk aplikasi **Todo List** menggunakan **Node.js, Express, MongoDB, dan Mongoose**. API ini mendukung operasi CRUD dasar dan siap dikembangkan untuk kebutuhan production.

---

## Teknologi yang Digunakan

* Node.js
* Express.js
* MongoDB
* Mongoose ODM

---

## Fitur

* Create Todo
* Read All Todos
* Read Todo by ID
* Delete Todo
* Validasi schema dengan Mongoose
* Timestamp otomatis (`createdAt`, `updatedAt`)

---

## Struktur Folder

```
project-root
├── controllers
│   └── todo.controller.js
├── models
│   └── todo.js
├── routes
│   └── todo.routes.js
├── app.js
├── server.js
├── .env
└── README.md
```

---

## Instalasi


1. Install dependency

```bash
npm install
```

2. Setup environment variable

Buat file `.env`

```env
PORT=3000
MONGO_URI=mongodb://appuser:password@127.0.0.1:27017/appdb
```

3. Jalankan aplikasi

```bash
npm run dev
```

atau

```bash
npm start
```

---

## Model Todo

```js
{
  title: String,
  description: String,
  priority: "low" | "medium" | "high",
  isCompleted: Boolean,
  dueDate: Date,
  createdAt: Date,
  updatedAt: Date
}
```

---

## Endpoint API

### Create Todo

**POST** `/todos`

Request Body:

```json
{
  "title": "Belajar MongoDB",
  "description": "Mongoose Schema",
  "priority": "high"
}
```

Response:

```json
{
  "success": true,
  "data": { }
}
```

---

### Get All Todos

**GET** `/todos`

Response:

```json
{
  "success": true,
  "data": []
}
```

---

### Get Todo by ID

**GET** `/todos/:id`

Response:

```json
{
  "success": true,
  "data": { }
}
```

Jika ID tidak ditemukan:

```json
{
  "success": false,
  "message": "Todo tidak ditemukan"
}
```

---

### Delete Todo

**DELETE** `/todos/:id`

Response:

```json
{
  "success": true,
  "message": "Todo berhasil dihapus"
}
```

---

## Status Code

| Code | Deskripsi             |
| ---- | --------------------- |
| 200  | OK                    |
| 201  | Created               |
| 400  | Bad Request           |
| 404  | Not Found             |
| 500  | Internal Server Error |

---
