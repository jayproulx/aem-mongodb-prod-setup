#!/usr/bin/env bash
mongod -f 2.conf
mongod -f 3.conf
siteroot.sh replication.js
