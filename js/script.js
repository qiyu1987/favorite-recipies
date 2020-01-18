const recipieCount = new CountUp("recipies-count", 0, 23456, 0, 5)
var waypoints = $("#recipies-count").waypoint(
	function(direction) {
		console.log(this.element.id + " hit 80% from top of window")
		recipieCount.start()
	},
	{
		offset: "80%"
	}
)
const usersCount = new CountUp("users-count", 0, 431729, 0, 5)
var waypoints = $("#users-count").waypoint(
	function(direction) {
		console.log(this.element.id + " hit 80% from top of window")
		usersCount.start()
	},
	{
		offset: "80%"
	}
)
const reviewsCount = new CountUp("reviews-count", 0, 892173, 0, 5)
var waypoints = $("#reviews-count").waypoint(
	function(direction) {
		console.log(this.element.id + " hit 80% from top of window")
		reviewsCount.start()
	},
	{
		offset: "80%"
	}
)
const photosCount = new CountUp("photos-count", 0, 56581, 0, 5)
var waypoints = $("#photos-count").waypoint(
	function(direction) {
		console.log(this.element.id + " hit 80% from top of window")
		photosCount.start()
	},
	{
		offset: "80%"
	}
)
const speciesCount = new CountUp("species-count", 0, 3182, 0, 5)
var waypoints = $("#species-count").waypoint(
	function(direction) {
		console.log(this.element.id + " hit 80% from top of window")
		speciesCount.start()
	},
	{
		offset: "80%"
	}
)
