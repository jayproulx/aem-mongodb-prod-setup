rs.initiate( {_id: 'AEM-PROD', members: [ {_id: 0, host:'localhost:50000'} ] } );
rs.status();
rs.add('localhost:50001');
rs.add('localhost:50002');
