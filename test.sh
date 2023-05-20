#!/usr/bin/env bash

set -eu

echo  Installing dependencies...
npm install

echo Checking code style...
npm run lint

echo Running npm dependencies audit...
npm audit --audit-level=moderate

echo Running tests...
npm run test
