mongod -f 1.conf
mongo --port 50000 admin initializeusers.js
mongo --port 50000 -p password -u siteroot admin shutdown.js
echo Now go and uncomment replication in 1.conf
