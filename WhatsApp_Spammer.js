// OWNER OF THIS FILE IS DWIJOTTAM DUTTA
// If we get anything about copying and publishing by your own name, without the licence file, you can we in trouble

function BOOT() {
	// Import fonts for console design
	var font_main = document.createElement('link');
	font_main.setAttribute('rel', 'stylesheet');
	font_main.setAttribute('type', 'text/css');
	font_main.setAttribute('href', 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@200&display=swap');
	document.head.appendChild(font_main);
	
	// StartUp Trademark
	console.log("%cWhatsapp Spam Attack","color: #B33030; font-family:'JetBrains Mono', monospace; font-size: 20px");
	console.log("%c@ Dwijottam Dutta","color: #FF9F45; font-family:'JetBrains Mono', monospace; font-size: 12px");
	console.log("   ");
	
	// Checking that input box exists or not
	const CHECKING = setInterval(function () {
		if(document.getElementsByClassName("_13NKt copyable-text selectable-text")[1]){
			if(confirm("Are you ready by setting the Contact to whom you want to spam ? \r ✿ If it is, then click OK \r ✿ If it is not, then cancel for now, and set the contact to whom you want to spam, with that set then go to console and type Spam_Restart()") == true){
				START();
			}
			else{
				console.log("%cSpamming forcely stopped by User...","color: #FF9F45; font-family:'JetBrains Mono', monospace; font-size: 12px");
				console.log("%cType here 'Spam_Restart()' to start it again","color: #FF9F45; font-family:'JetBrains Mono', monospace; font-size: 12px");
				clearInterval(CHECKING);
			}
			
			clearInterval(CHECKING);
		}
		else{
			console.log("%cLoading...","color: #632626; font-family:'JetBrains Mono', monospace; font-size: 10px");
		}
		}, 2000);
}

function START() {
	console.log("%cPlease fill the setup...","color: #FF9F45; font-family:'JetBrains Mono', monospace; font-size: 12px");
	console.log(" ")
	try {
		var message = prompt("Enter the message you want to spam:", "Are you there ?").trim();
		var count = prompt("Enter the number of times to spam:").trim();
		while (message.length == 0 || count.lengh == 0) {
			alert("Please enter the value correctly!");
			message = prompt("Enter the message you want to spam:");
			count = prompt("Enter the number of times to spam:");
		}
		if(count>30){
			console.log("%cThis spamming process can be slow according to your CPU power and RAM, because the times of spamming is greater than 30, it's totally fine, its a matter of testing...","color: #FF9F45; font-family:'JetBrains Mono', monospace; font-size: 12px");
			console.log(" ")
			alert("This spamming process can be slow according to your CPU power and RAM, because you have gave the number of times of spamming more than 30")
		}
		if(count>100){
			console.log("%cThis spamming process can be so much critical if you are using lower end devices, its fine if you are running this for testing... Its super fun, but this can crash whatsapp in the middle, if chrome takes this as wrong!","color: #FF9F45; font-family:'JetBrains Mono', monospace; font-size: 12px");
			console.log(" ")
			alert("This spamming process can be so much critical if you are using lower end devices, its fine if you are running this for testing... Its super fun, but this can crash whatsapp in the middle, if chrome takes this as wrong!")
		}
	}
	catch(err) {
	  document.getElementById("demo").innerHTML = err.message;
	}
	
	var times = 0;
	window.InputEvent = window.Event || window.InputEvent;
	var event = new InputEvent('input', {bubbles: true});
	var INPUTAREA= document.getElementsByClassName("_13NKt copyable-text selectable-text")[1];
	for(times=0;times<count;times++)
	{		
		INPUTAREA.textContent = message;
		INPUTAREA.dispatchEvent(event);
		
		// Automating Click on send button
		var send_button = document.getElementsByClassName('_4sWnG')[0];
		send_button.click();
	}
	
	// Recognisation text
	INPUTAREA.textContent = "--spammed by DJ's Bot";
	INPUTAREA.dispatchEvent(event);
	var send_button = document.getElementsByClassName('_4sWnG')[0];
	send_button.click();
	
	alert("SPAMMING COMPLETED! \r Type 'Spam_Restart()' in the console to start fresh Spamming")
	console.log("%cSPAMMING COMPLETED!","color: #FF9F45; font-family:'JetBrains Mono', monospace; font-size: 12px");
	console.log("%cType here 'Spam_Restart()' to start it again","color: #FF9F45; font-family:'JetBrains Mono', monospace; font-size: 12px");
}

function Spam_Restart() {
	setTimeout(BOOT, 2000);
}

function Restart() {
	setTimeout(BOOT, 2000);
}

setTimeout(BOOT, 2000);