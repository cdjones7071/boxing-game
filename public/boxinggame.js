
var punches = 0;

var swarmers = 0;
var swarmersps = 0.1;

var outboxers = 0;
var outboxersps = 0.5;

var boxerpunchers = 0;
var boxerpunchersps = 1.0;

var sluggers = 0;
var sluggersps = 2.0;



// punch functions to increase value

function boxerClick(number){
    punches = punches + number;
    document.getElementById("punches").innerHTML = prettify(punches); 
}


function userClick(number){
	punches = punches + number;
	document.getElementById("punches").innerHTML = prettify(punches);
}




//Buy functions

function buySwarmer(){
    var swarmerCost = Math.floor(10 * Math.pow(1.15,swarmer));     //works out the cost of this cursor
    if(punches >= swarmerCost){                                   //checks that the player can afford the cursor
        swarmers = swarmers + 1;                                   //increases number of cursors
        punches = punches - swarmerCost;                          //removes the cookies spent
        document.getElementById('swarmers').innerHTML = swarmers;  //updates the number of cursors for the user
        document.getElementById('punches').innerHTML = punches;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(20 * Math.pow(1.15,swarmers));       //works out the cost of the next cursor
    document.getElementById('swarmerCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

function buyslugger(){
	var sluggerCost = Math.floor(200 * Math.pow(1.15,sluggers));     //works out the cost of this cursor
    if(punches >= sluggerCost){                                   //checks that the player can afford the cursor
        sluggers = sluggers + 1;                                   //increases number of cursors
    	punches = punches - sluggerCost;                          //removes the cookies spent
        document.getElementById('sluggers').innerHTML = sluggers;  //updates the number of cursors for the user
        document.getElementById('punches').innerHTML = punches;  //updates the number of cookies for the user
    };
    var nextsluggerCost = Math.floor(200 * Math.pow(1.15,sluggers));       //works out the cost of the next cursor
    document.getElementById('sluggerCost').innerHTML = nextsluggerCost;  //updates the cursor cost for the user
};

function buyoutboxer(){
    var outboxerCost = Math.floor(50 * Math.pow(1.15,outboxers));     //works out the cost of this cursor
    if(punches >= outboxerCost){                                   //checks that the player can afford the cursor
        outboxers = outboxers + 1;                                   //increases number of cursors
        punches = punches - outboxerCost;                          //removes the cookies spent
        document.getElementById('swarmers').innerHTML = swarmers;  //updates the number of cursors for the user
        document.getElementById('punches').innerHTML = punches;  //updates the number of cookies for the user
        document.getElementById('outboxers').innerHTML = outboxers;
    };
    var nextoutboxerCost = Math.floor(50 * Math.pow(1.15,outboxers));       //works out the cost of the next cursor
    document.getElementById('outboxerCost').innerHTML = nextoutboxerCost;  //updates the cursor cost for the user
};

function buyboxerpuncher(){
    var boxerpuncherCost = Math.floor(100 * Math.pow(1.15,boxerpunchers));     //works out the cost of this cursor
    if(punches >= boxerpuncherCost){                                   //checks that the player can afford the cursor
        boxerpunchers = boxerpunchers + 1;                                   //increases number of cursors
        punches = punches - boxerpuncherCost;                          //removes the cookies spent
        document.getElementById('boxerpunchers').innerHTML = boxerpunchers;  //updates the number of cursors for the user
        document.getElementById('punches').innerHTML = punches;  //updates the number of cookies for the user
    };
    var nextboxerpuncherCost = Math.floor(100 * Math.pow(1.15,boxerpunchers));       //works out the cost of the next cursor
    document.getElementById('boxerpuncherCost').innerHTML = nextboxerpuncherCost;  //updates the cursor cost for the user
};












//makes a number neater
function prettify(input){
    var output = Math.round(input * 1000000)/1000000;
	return output;
}


$(document).on("ready", function(){

//Save Load and Delete Functions

function save(){
    var save = {
        punches: punches,
        swarmers: swarmers,
        outboxers: outboxers,
        boxerpunchers:boxerpunchers,
        sluggers:sluggers
    }
    localStorage.setItem("save",JSON.stringify(save));
};

function load(){
    var savegame = JSON.parse(localStorage.getItem("save"));
    if (typeof savegame.punches !== "undefined") punches = savegame.punches;
    if (typeof savegame.swarmers !== "undefined") swarmers = savegame.swarmers;
    if (typeof savegame.boxerpunchers !== "undefined") boxerpunchers = savegame.boxerpunchers;
    if (typeof savegame.sluggers !== "undefined") sluggers = savegame.sluggers;
    if (typeof savegame.outboxers !== "undefined") outboxers = savegame.outboxers;
    document.getElementById('swarmers').innerHTML = swarmers;
    document.getElementById('punches').innerHTML = punches;
    document.getElementById('boxerpunchers').innerHTML = boxerpunchers;
    document.getElementById('sluggers').innerHTML = sluggers;
    document.getElementById('outboxers').innerHTML = outboxers;

};

function deleteSave(){
	localStorage.removeItem("save")
    punches = 0;
    swarmers = 0;
    boxerpunchers = 0;
    outboxers = 0;
    sluggers = 0;
    document.getElementById('swarmers').innerHTML = swarmers;
    document.getElementById('punches').innerHTML = punches;
    document.getElementById('boxerpunchers').innerHTML = boxerpunchers;
    document.getElementById('sluggers').innerHTML = sluggers;
    document.getElementById('outboxers').innerHTML = outboxers;
}






function updateSPS(){
    var sps = (swarmers * swarmersps) + (sluggers * sluggersps) + (boxerpunchers * boxerpunchersps) + (outboxers * outboxersps);
    document.getElementById('SPS').innerHTML = prettify(sps);

}





function devGive(){
	punches = punches + 100
	document.getElementById("punches").innerHTML = prettify(punches);
}




window.setInterval(function(){
	
	boxerClick(swarmers * swarmersps);
    boxerClick(sluggers * sluggers);
    boxerClick(outboxers * outboxersps);
    boxerClick(boxerpunchers * boxerpunchersps);
	save();
		
}, 1000);

window.setInterval(function(){
    updateSPS();
  })

})   
