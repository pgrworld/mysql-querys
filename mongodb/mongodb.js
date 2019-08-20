//monogdb concepts

//.1 if we want to create a database 
EX: USE database_name
    use mydb
    
//.2 if we want to watch existing databases
EX: show dbs

//.3 if we want to drop existing database
EX: show dbs
    use required db_name
    db.dropDatabase()
    
//.4 if we want to show collections in the database
EX: show collections

//.5 if we want to drop collections in the database
EX: db.collection_name.drop()
    db.mycollection.mydb()
