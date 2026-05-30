# Voting App

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)

A full-stack **Online Voting Application** built with **Java Spring Boot** and **Angular**.  
Users can create polls, cast votes, and view real-time results through a responsive and interactive UI.

---

## 🚀 Features

- 🗳️ Create and manage polls
- ✅ Cast votes on active polls
- 📊 View live voting results
- 🔗 RESTful API with Spring Boot backend
- 🗄️ MySQL database with Spring Data JPA & Hibernate
- 📱 Responsive Angular frontend

---

## 🛠️ Tech Stack

| Layer      | Technology                    |
|------------|-------------------------------|
| Frontend   | Angular 17, TypeScript, Bootstrap |
| Backend    | Java, Spring Boot, REST API   |
| Database   | MySQL, Spring Data JPA        |
| Build Tool | Maven, Node.js & npm          |

---

## ⚙️ Getting Started

### Prerequisites
- Java 17+
- Node.js & npm
- MySQL
- Angular CLI

### Backend Setup
```bash
git clone https://github.com/beherachinmay/voting-app.git
cd voting-app/backend

# Configure MySQL in application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/votingdb
spring.datasource.username=root
spring.datasource.password=yourpassword

mvn spring-boot:run
```

### Frontend Setup
```bash
cd voting-app/poll-app
npm install
ng serve
```

App runs at: `http://localhost:4200`

---

## 📁 Project Structure

<details>
<summary>Click to expand</summary>

```
voting-app/
├── backend/
│   ├── src/main/java/
│   │   ├── controller/
│   │   ├── service/
│   │   ├── repository/
│   │   └── model/
│   └── application.properties
└── poll-app/
    ├── src/
    │   ├── app/
    │   │   ├── components/
    │   │   └── services/
    └── package.json
```

</details>

---

## 📬 API Endpoints

| Method | Endpoint         | Description        |
|--------|------------------|--------------------|
| GET    | /api/polls       | Get all polls      |
| GET    | /api/polls/{id}  | Get poll by ID     |
| POST   | /api/polls       | Create new poll    |
| POST   | /api/vote        | Cast a vote        |
| DELETE | /api/polls/{id}  | Delete a poll      |

---

## 👨‍💻 Author

**Chinmay Kumar Behera**  
[GitHub](https://github.com/beherachinmay) | [LinkedIn](https://www.linkedin.com/in/chinmay-behera08/)
