#!/bin/bash

echo "Configuring dracarys"

dropdb -U node_user dracarysdb
createdb -U node_user dracarysdb

psql -U node_user dracarysdb <./bin/sql/generation.sql
psql -U node_user dracarysdb <./bin/sql/dragon.sql

echo "dracarys configured"