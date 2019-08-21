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

//.6 if we want to retrieve the data from the collection
EX: db.collection_name.find()
    db.mycollection.find()

//.7 if we want to know the selected database 
EX: db   

//.8 if we want to insert the data into collection 
EX: db.collection_name.insert({"name": "gowrav rahul"})

//.9 if we want to update the data into the collection
EX: db.mycollection.update({name:"gowrav"},{$set:{name:"rahul"}})


