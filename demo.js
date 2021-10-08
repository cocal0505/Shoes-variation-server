// const  {MongoClient} = require('./python/repeat.py');

// async function main(){
//     const uri = "mongodb+srv://cocal0505:junho!1995@cluster0.gxo0t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

//     const client = new MongoClient(uri)

//     try{
//         await client.connect();
        
//         await findOneListingByName(client,"lovely loft")




//         // await createMultipleListings(client,[
//         //     {
//         //         name:"lovely loft",
//         //         gender: [1,2,3,4,5],
//         //         summary:'A charming loft in paris',
//         //         bedroom : 4,
//         //         bathroom: 1
//         //     },
//         //     {
//         //         name:"jungo",
//         //         gender: [1,2,3,4,5],
//         //         summary:'A charming loft in paris',
//         //         bedroom : 15,
//         //         bathroom: 1
//         //     },
//         //     {
//         //         name:"yes",
//         //         gender: [1,2,3,4,5],
//         //         summary:'A charming loft in paris',
//         //         bedroom : 2,
//         //         bathroom: 1
//         //     },

//         // ]);




//     }catch(err){
//         console.log(err)
//     }finally{
//         await client.close()

//     }

// }


// main().catch(console.error)


// let genderarray = []
// async function findOneListingByName(client,nameOfListing){
//     const result = await client.db("sample_airbnb").collection("listingAndReviews").findOne({name:nameOfListing})
//     if(result){
//         console.log(`found a listing in the collection with the name ${nameOfListing}`)
//         // console.log(result.gender)
        
//         genderarray = result.gender
//         console.log("from node",genderarray)
//     }else{
//         console.log(`no listing found with the name ${nameOfListing}`)
//     }
// }











// async function createMultipleListings(client,newListing){
//     const result = await client.db("sample_airbnb").collection("listingAndReviews").insertMany(newListing);
//     console.log(`${result.insertedCount} new listing created with the following id (s):`)
//     console.log(result.insertedIds)
// }







// async function createListing(client,newListing){
//   const result =  await client.db("sample_airbnb").collection("listingAndReviews").insertOne(newListing);
//   console.log(`new listing created with the following  id:${result.insertedId }`);

// }





// async function listDatabases(client){
//     const databaseList = await client.db().admin().listDatabases();

//     console.log("Databases:");
//     databaseList.databases.forEach(db=>{
//         console.log(`- ${db.name}`);
//     })
// }

