#!/usr/bin/env bash

set -eu

echo Running app...
docker-compose up --build web-app
