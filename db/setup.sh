docker build -t people_db ./db
docker run --name people --rm -e POSTGRES_PASSWORD=password -d people_db