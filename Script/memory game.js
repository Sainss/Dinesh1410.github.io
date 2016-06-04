var clicked_id;
var clicked_id1=null;
var clicked_id2=null;
var tile_ids = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var tile_chars = ["A","B","C","D","E","F","G","H"];
var char_at_id = [];
var filled_ids = [];
var l;
var tries=0,found_chars=0;
var id=0;

for(var i=0;i<4;i++){
	
	var table = document.getElementById("table");
	var row = table.insertRow(i);	
	for(var j=0;j<4;j++){
		
		var cell = row.insertCell(j);
		cell.id = id;
		id++;
	}
}


for(var i=0;i<8;i++)
{
	var a=0;
	while(a<2)
	{
		rand = Math.floor(Math.random() * 16);
		var res = check_presence(rand);
		if(res == 0)
		{
			char_at_id[rand] = tile_chars[i];
			filled_ids.push(rand);
			a++;
		}
	}
}

function check_presence(l)
{
	var len = filled_ids.length;
	var k=0;
	while(k < len)
	{
		if(filled_ids[k] == l)
		{
			return 1;
		}
		k++;
	}
	return 0;	
}

for (var i = 0; i <16; i++) 
{
	(function (i) {

   		 document.getElementById(i).onclick = function () {

       		 	click(i);
    		};
	}) (i);
}

function click(clicked_id)
{
	if(found_chars < 8){
		if(clicked_id1 == null  && clicked_id2 == null)
		{
			
			clicked_id1 = clicked_id;
			document.getElementById(clicked_id1).style.background = "#E5E8E8";
			document.getElementById(clicked_id1).innerHTML = char_at_id[clicked_id1];
			document.getElementById(clicked_id1).style.pointerEvents = "none";

		}
		else if(clicked_id1 != null && clicked_id2 == null)
		{
			clicked_id2 = clicked_id;
			document.getElementById(clicked_id2).style.background = "#E5E8E8";
			document.getElementById(clicked_id2).innerHTML = char_at_id[clicked_id2];
			tries++;
			document.getElementById("tries").innerHTML = "Tries - "+tries;
			if(char_at_id[clicked_id1] == char_at_id[clicked_id2])
			{
				document.getElementById(clicked_id1).style.background = "#E5E8E8";
				document.getElementById(clicked_id1).style.border = "3px solid black"
				document.getElementById(clicked_id1).style.pointerEvents = "none";
				document.getElementById(clicked_id2).style.background = "#E5E8E8";
				document.getElementById(clicked_id2).style.border = "3px solid black"
				document.getElementById(clicked_id2).style.pointerEvents = "none";
				clicked_id1 = null;
				clicked_id2 = null;
				found_chars++;
				document.getElementById("score").innerHTML = "Score - "+found_chars;
				
			}
			else
			{
				setTimeout(delay,200);	
			}
		}
	}
	if(found_chars == 8){
		game_finished();
	}
}

function game_finished(){
	document.getElementById("game_over").innerHTML = "Game Over";
	var eff = Math.floor((8/tries)*100);
	document.getElementById("message").innerHTML = "You've found all matches in "+tries+" tries with "+eff+"% efficiency";
}

function delay()
{
	document.getElementById(clicked_id1).style.pointerEvents = "";
	document.getElementById(clicked_id1).innerHTML = "";
	document.getElementById(clicked_id1).style.background = "url(Images/bg.jpg)";
	document.getElementById(clicked_id2).innerHTML = "";
	document.getElementById(clicked_id2).style.background = "url(Images/bg.jpg)";
	clicked_id1 = null;
	clicked_id2 = null;
}

