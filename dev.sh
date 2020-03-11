#!/bin/bash
docker-compose -f docker-compose.dev.yaml up -d --build --force-recreate

echo "http://localhost:48444"