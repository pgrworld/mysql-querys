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

//.10 if we want to remove the documents from the collection
EX: db.mycollection.remove({}) --> it equal to truncate in mysql that means all documents will be deleted
EX: db.mycollection.remove({name:"rahul"})  --> it will delete all named matched conditions
EX: db.mycollection.remove({name:"rahul},1)  --> it will delete only first document at mateched condition
                            
//.11 if we want to retrieve only required documents from the collections
EX: db.mycollection.find({},{required_dodument name:1})
EX: db.mycollection.find({rahul:1})

//.12 if we want to retrieve only limited documents
EX: db.mycollection.find().limit(4)   ==> we can retrieve only 4 documents


   



                             
                            
