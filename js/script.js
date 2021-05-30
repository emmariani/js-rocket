var doCoolStuff = function () {
	var currentClassName = document.getElementById('cool').className;


	if (currentClassName == 'cool'){
		document.getElementById('cool').className = 'cool blue';
	} else {
		document.getElementById('cool').className = 'cool';
	}
}

var car = {
		make: 'Fiat',
		type: 'Panda',
		color: 'pink',
		isTurnedOn: false,
		numberOfWheels: 4,
		seats: [
			'seat 1', 
			'seat 2', 
			'seat 3', 
			'seat 4'
		],
		TurnOn: function () {
			this.isTurnedOn = true;
		},
		fly: function () {
			alert('Cars can not fly you dummy');
		},
		switchCar: function (isOn) {
			console.log ('turn car' +isOn);
			if (isOn == true) {
				this.isTurnedOn = true;
			} else {
				this.isTurnedOn = false;
			}
		}
	};

	console.log('Final count down for lift off');