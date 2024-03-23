./db/setup.sh

docker inspect  -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' people > api/db_ip_addr

./api/start_api.sh
./front/start_frontend.sh