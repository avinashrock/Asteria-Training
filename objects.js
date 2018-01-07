var user = {

	name : "avinash",
	age  : 21,

};

//var admin = user;
//admin.name = "rocky";
//console.log(user.name);
var admin = {};
for(var prop in user){
	 admin[prop]=user[prop];

}
admin.name = "rocky";
console.log(user.name);
console.log(admin.name);
console.log(user.name);




