docker build -t people_api ./api
docker run --rm -p 8000:8000 people_api