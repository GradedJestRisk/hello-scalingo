set dotenv-load

database-start:
  docker compose --file ./database/docker-compose.yml up --remove-orphans --force-recreate --renew-anon-volumes --detach

database-start-show-queries:
  docker compose --file ./database/docker-compose.yml up --remove-orphans --force-recreate --renew-anon-volumes

database-stop:
  docker compose --file ./database/docker-compose.yml down

database-console:
  psql --dbname "host=$DB_HOST port=$DB_PORT dbname=$DB_NAME user=$DB_USER password=$DB_PASSWORD"