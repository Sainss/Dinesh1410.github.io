var str;

function typed(str)
{
	var arr = str.split("");
	var i=0;
	print();
	
	function print()
	{
		if(i<str.length)
		{
			document.getElementById("typed").innerHTML += arr.shift();
			i++;
			setTimeout(print,100);
		}
	}
	
}

