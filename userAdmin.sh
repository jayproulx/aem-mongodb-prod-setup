#!/usr/bin/env bash
mongo --port 50000 -p password -u userAdmin admin --authenticationMechanism MONGODB-CR --authenticationDatabase admin $@
