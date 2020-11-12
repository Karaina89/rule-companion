module.exports = {
	name: 'fibonacci',
	description: 'fibonacci!',
	execute(message, args, client) {
    // fibonacci = 1 2 3 5 8 13 21 34 55 89....
    na = parseInt(args[0]);
    nb = parseInt(args[1]);
    seconds = parseInt(args[2]);
    //message.channel.send(na);
    function F(na, nb, seconds){
      setTimeout(function() {
        val = na + nb; //first value + second value = next number in fibonacci sequence
        na = nb; //set first value to second value
        nb = val; //set second value to current number in fibonacci sequence
        message.channel.send(val); //logs the current number in the fibonacci sequence
        F(na, nb, seconds); //do the function again with the new values
      }, seconds * 1000); //1000 milliseconds is 1 second, the delay function interprets the value as milliseconds so you need to multiply the value by 1000 
    }

    F(na, nb, seconds); //starts out at values 0 and 1 at a delay of 1 second per turn
	},
};