#!/bin/bash

echo "Configuring dracarys"

dropdb -U node_user dracarysdb
createdb -U node_user dracarysdb

psql -U node_user dracarysdb <./bin/sql/generation.sql
psql -U node_user dracarysdb <./bin/sql/dragon.sql
psql -U node_user dracarysdb <./bin/sql/trait.sql
psql -U node_user dracarysdb <./bin/sql/dragonTrait.sql

node ./bin/insertTraits.js

echo "dracarys configured"