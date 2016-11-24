function getRestaurantsByBorough(db, req, res) {

	const { skip, limit, projection } = req
	const borough = req.params.borough;

	db.collection("restaurants")
		.find( { borough: borough } , projection )
		.sort( { title:1 } )
		.limit( limit )
		.skip( skip )
		.toArray()
		//.then( movies => movies.map( m => m.title )  )
		.then( data => res.json(data) )
		//.then( () => db.close() )
		.catch( err => console.log(err) )

}

module.exports = getRestaurantsByBorough;