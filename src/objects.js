/**
* Create an object literal with the following key value pairs:
* type: {string} 'Goldfish'
* brand: {string} 'Pepperidge Farm'
* flavor: {string} 'Cheddar'
* count: {number} 2000
* It should be returned directly by the following function
* @return {object} - the object literal
*/

function returnObjectLiteral() {
    //your code here
    return { type: 'Goldfish', 
	     brand: 'Pepperidge Farm',
	     flavor: 'Cheddar',
	     count: 2000
	   }; //Modify ONLY this line
    //end your code
}

/**
* Create a constructor function for a `MessageLog` object.
* @constructor
* @param {string} user - The user associated to the message log
* The string indicating the user should be stored in the user property of the
* object instances.
*
* In addition, the following methods should be
* callable on a MessageLog object:
* logMessage( {string} messageText, {number} direction) - This should log a
* message
* as either being sent or received. A direction of 0 indicates it is a message
* the user sent. A direction of 1 indicates it is a message the user received.
* Behavior for other numbers is undefined.

* getSentMessage({number} n) - returns as a string, the content of the nth most
* recently sent message. To conserve memory, the object should only keep the
* last 5 message. n=0 retrieves the most recent n=4 retrieves the least recent
* of the 5.

* totalSent() - returns an integer indicating the total number of messages sent
* totalReceived() - returns an integer indicating the total number of messages
* received
*/

// //your code here

var globalReceived = 0;
var MessageLog = function(user){
    this.user = user;  // assuming "user" is a username (string)
    this.sentMessages = []; // empty array
    this.receivedMessages = []; // empty array
    this.sentMessageCount = 0;
    this.logMessage =  function (messageText, direction){
	if (direction == 0){
    	    // push messageText as sent (to front of array)
    	    this.sentMessages.unshift(messageText);
	    this.sentMessageCount++;  // keep track of count, not array size
	    // limit array length to 5
	    if (this.sentMessages.length > 5)
		 this.sentMessages.splice(5,1) // remove index 4
	}
	else if (direction == 1){
	    // log messageText as received (to front of array)
	    this.receivedMessages.unshift(messageText);
	    globalReceived++;
	    // if (this.receivedMessages.length > 5)
	    // 	this.receivedMessages.splice(4,1) // remove index 4
	}
    } // end logMessage
    this.getSentMessage = function(n){
	return this.sentMessages[n];
	}
    this.totalSent = function(){
	//return this.sentMessages.length;
	return this.sentMessageCount; // use count, not length, because length is limited to 5
    }
    this.totalReceived = function(){
	return this.receivedMessages.length;
    }
}


//end your code

/**
* Add a method to the MessageLog prototype:
* lastReceivedMessage() - returns the message text of the last message the user
* received.
*/
//your code here
MessageLog.prototype.lastReceivedMessage = function(){
    return this.receivedMessages[this.receivedMessages.length-1];
};

/**
* Add a method to the MessageLog prototype called systemReceived().
* This method should return the total number of messages received for all
* instances of message logs. So if you have logs A and B, A has received
* 3 messages, B has received 8. systemReceived() should return 11. You
* may need to do more than simply add a method to make this functionality
* work.
*/


// MessageLog.systemReceivedMessagesCount = 0; // for system received
MessageLog.prototype.systemReceived = function(){
    return globalReceived;
}

//end your code

/**
* Create an instance of a `MessageLog` for the user "BlackHatGuy". Have the
* instance receive 3 messages: "foo", "bar" and "baz", received in that order.
* Assign it to the variable myLog.
*/

//your code here
var myLog = new MessageLog('BlackHatGuy');
myLog.logMessage('foo',1);
myLog.logMessage('bar',1);
myLog.logMessage('baz',1);
//end your code

// try to access total messages received
var anotherLog = new MessageLog('trying');
anotherLog.logMessage('alpha',1);

// 
console.log(" myLog.systemReceived() " + myLog.systemReceived());
console.log(" anotherLog.totalReceived() " + anotherLog.systemReceived());
console.log("MessageLog.prototype.systemReceived()  " + MessageLog.prototype.systemReceived());
