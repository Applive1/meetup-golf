module.exports = function(mongoose) {

	var profileSchema = new mongoose.Schema({
		userId: string,
		firstName: string,
		lastName: string,
		age: number,
		profession: string,
		city: string,
		state: string,
		monday: boolean,
		tuesday: boolean,
		wednesday: boolean,
		thursday: boolean,
		friday: boolean,
		saturday: boolean,
		sunday: boolean
	});
};