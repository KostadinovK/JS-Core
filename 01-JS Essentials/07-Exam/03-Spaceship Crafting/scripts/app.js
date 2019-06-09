function spaceshipCrafting() {
	let titaniumCoreFound = Math.round(document.getElementById('titaniumCoreFound').value);
	let aluminiumCoreFound = Math.round(document.getElementById('aluminiumCoreFound').value);
	let magnesiumCoreFound = Math.round(document.getElementById('magnesiumCoreFound').value);
	let carbonCoreFound = Math.round(document.getElementById('carbonCoreFound').value);
	let lossesPercentByCore = document.getElementById('lossesPercent').value / 4;
	
	let barsElement = document.querySelector('#availableBars p');
	let spaceshipsElement = document.querySelector('#builtSpaceships p');

	titaniumCoreFound -= parseInt(titaniumCoreFound * lossesPercentByCore / 100);
	aluminiumCoreFound -= parseInt(aluminiumCoreFound * lossesPercentByCore / 100);
	magnesiumCoreFound -= parseInt(magnesiumCoreFound * lossesPercentByCore / 100);
	carbonCoreFound -= parseInt(carbonCoreFound * lossesPercentByCore / 100);


	let coresPerBar = {
		titanium: 25,
		aluminum: 50,
		magnesium: 75,
		carbon: 100
	};

	let bars = {
		titanium: Math.round(titaniumCoreFound / coresPerBar.titanium),
		aluminum: Math.round(aluminiumCoreFound / coresPerBar.aluminum),
		magnesium: Math.round(magnesiumCoreFound / coresPerBar.magnesium),
		carbon: Math.round(carbonCoreFound / coresPerBar.carbon)
	};

	let ships = {
		undefinedShip: {
			titaniumBarsNeeded: 7,
			aluminumBarsNeeded: 9,
			magnesiumBarsNeeded: 7,
			carbonBarsNeeded: 7,
			timesBuilt: 0
		},
		nullMaster: {
			titaniumBarsNeeded: 5,
			aluminumBarsNeeded: 7,
			magnesiumBarsNeeded: 7,
			carbonBarsNeeded: 5,
			timesBuilt: 0
		},
		jsonCrew: {
			titaniumBarsNeeded: 3,
			aluminumBarsNeeded: 5,
			magnesiumBarsNeeded: 5,
			carbonBarsNeeded: 2,
			timesBuilt: 0
		},
		falseFleet: {
			titaniumBarsNeeded: 2,
			aluminumBarsNeeded: 2,
			magnesiumBarsNeeded: 3,
			carbonBarsNeeded: 1,
			timesBuilt: 0
		},
	};

	while(hasEnoughtResourcesForShip()){
		for (let ship in ships) {
			if(shipCanBeBuilt(ships[ship])){
				ships[ship].timesBuilt++;

				let {titaniumBarsNeeded, aluminumBarsNeeded, magnesiumBarsNeeded, carbonBarsNeeded} = ships[ship];
				bars.titanium -= titaniumBarsNeeded;
				bars.aluminum -= aluminumBarsNeeded;
				bars.magnesium -= magnesiumBarsNeeded;
				bars.carbon -= carbonBarsNeeded;
			}
		}
	}

	let buildedShips = '';
	if(ships.undefinedShip.timesBuilt > 0){
		buildedShips += `${ships.undefinedShip.timesBuilt} THE-UNDEFINED-SHIP`; 
	}

	if(ships.nullMaster.timesBuilt > 0){
		if(buildedShips !== ''){
			buildedShips += `, ${ships.nullMaster.timesBuilt} NULL-MASTER`; 
		}else{
			buildedShips += `${ships.nullMaster.timesBuilt} NULL-MASTER`; 
		}
	}

	if(ships.jsonCrew.timesBuilt > 0){
		if(buildedShips !== ''){
			buildedShips += `, ${ships.jsonCrew.timesBuilt} JSON-CREW`; 
		}else{
			buildedShips += `${ships.jsonCrew.timesBuilt} JSON-CREW`; 
		}
	}

	if(ships.falseFleet.timesBuilt > 0){
		if(buildedShips !== ''){
			buildedShips += `, ${ships.falseFleet.timesBuilt} FALSE-FLEET`; 
		}else{
			buildedShips += `${ships.falseFleet.timesBuilt} FALSE-FLEET`; 
		}
	}

	barsElement.textContent = `${bars.titanium} titanium bars, ${bars.aluminum} aluminum bars, ${bars.magnesium} magnesium bars, ${bars.carbon} carbon bars`;
	spaceshipsElement.textContent = buildedShips;

	function hasEnoughtResourcesForShip(){
		return bars.titanium >= ships.falseFleet.titaniumBarsNeeded &&
		bars.aluminum >= ships.falseFleet.aluminumBarsNeeded &&
		bars.magnesium >= ships.falseFleet.magnesiumBarsNeeded &&
		bars.carbon >= ships.falseFleet.carbonBarsNeeded;
	}

	function shipCanBeBuilt(ship){
		let {titaniumBarsNeeded, aluminumBarsNeeded, magnesiumBarsNeeded, carbonBarsNeeded} = ship;
		
		return bars.titanium >= titaniumBarsNeeded &&
		bars.aluminum >= aluminumBarsNeeded &&
		bars.magnesium >= magnesiumBarsNeeded &&
		bars.carbon >= carbonBarsNeeded;
	}
}