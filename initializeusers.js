/**
 * Created by jproulx on 5/10/16.
 */

var siteroot = {
        user: 'siteroot',
        pwd: 'password',
        roles: [
            {
                role: 'root',
                db: 'admin'
            }
        ]
    };

var versionAdmin = {
        role: 'versionAdmin',
        privileges: [
            {
                resource: {db:'admin', collection: 'system.version'},
                actions: ['insert', 'update', 'find']
            }
        ],
        roles: []
    };

// In the admin database
// use admin

// Create root level user
db.createUser(siteroot);
db.auth(siteroot.user, siteroot.pwd);

// Create versionAdmin role
db.createRole(versionAdmin);

siteroot.roles.push({role: 'versionAdmin', db: 'admin'});

// Give versionAdmin to siteroot user
db.updateUser(siteroot.user, {roles: siteroot.roles});

// Make sure authSchema is version 3 MongoDB-CR authentication schema, it might be 5
db.system.version.find();

// {“_id”: “authSchema”, “currentVersion”: 5}
db.system.version.update({_id: 'authSchema'}, {$set:  {currentVersion: 3}}, upsert=true);
db.system.version.find();

// Create userAdmin user
db.createUser({user: 'userAdmin', pwd: 'password', roles: [{role: 'userAdminAnyDatabase', db: 'admin'}]});

// Create author user
db.createUser({user: 'author', pwd: 'password', roles: [{role: 'readWrite', db: 'aem-author'}, {role: 'dbOwner', db: 'aem-author'}]});

// Shut down mongod instance
// mongo admin -p -u site root —eval “printjson(db.shutdownServer())”