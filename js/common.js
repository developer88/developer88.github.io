// Prints messages in browser's console
function d(message, type) {
	type = type != undefined ? type : 'debug';
	console.log(capitaliseFirstLetter(type) + ': '  + message);
}

// Makes first letter capital
function capitaliseFirstLetter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}