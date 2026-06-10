# Pokemon Dashboard

## How to Run

### Requirements
- Docker
- Docker Compose

### Steps
```bash
docker-compose up --build
```

- Frontend: http://localhost:80
- Backend: http://localhost:3000

### Environment Variables

| Variable | Default | Description |
|---|---|---|
| DB_HOST | postgres | PostgreSQL host |
| DB_PORT | 5432 | PostgreSQL port |
| DB_USER | postgres | PostgreSQL user |
| DB_PASS | postgres | PostgreSQL password |
| DB_NAME | pokemon | Database name |
| JWT_SECRET | supersecretkey | JWT secret key |
| VITE_API_URL | http://localhost:3000 | Backend URL |
