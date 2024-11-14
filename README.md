# Readme

## Create an application on Scalingo

Link to the Github repository, automatic deploy on `master` branch.
Add a Postgresql database.

## Deploy

Trigger a manual deploy from GUI.

## Connect to database

Install [CLI](https://doc.scalingo.com/platform/cli/start).

Connect to database.
```shell
scalingo login
scalingo --region=$REGION --app $APPLICATION_NAME psql-console
```