docker build -t users_frontend ./front
docker run --rm -p 80:80 -d users_frontend