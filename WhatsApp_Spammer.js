/****************************** LICENSE OF THIS SCRIPT ***************************
 * 
 * MIT License
 * 
 * Copyright (c) 2021 Dwijottam Dutta
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
**********************************************************************************/

/******************************** ABOUT THIS SCRIPT *******************************
 * 
 * FILE NAME: Whatsapp_Spammer.js
 * 
 * DESCRIPTION: A simple bot like JS script which spams on Whatsapp
 * 
 * OWNER: 
 * * DWIJOTTAM DUTTA
 * 
 * CONTRIBUTORS:
 * * DWIJOTTAM DUTTA
 * * DHARMESH KUMAR
 * 
 *********************************************************************************/

let SPAMMING_TYPE;
let SPAMMING_INTERVAL = 500;

function BOOT() {
	// Import fonts for console design
	var font_main = document.createElement('link');
	font_main.setAttribute('rel', 'stylesheet');
	font_main.setAttribute('type', 'text/css');
	font_main.setAttribute('href', 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@200&display=swap');
	document.head.appendChild(font_main);

	// StartUp Trademark
	console.log("%cWhatsapp Spammer.js", "color: #B33030; font-family:'JetBrains Mono', monospace; font-size: 20px");
	console.log("%c@ Dwijottam Dutta\n@ Dharmesh Kumar", "color: #FF9F45; font-family:'JetBrains Mono', monospace; font-size: 12px");
	console.log("   ");

	// Checking that input box exists or not
	const CHECKING = setInterval(function () {
		if (document.getElementsByClassName("_13NKt copyable-text selectable-text")[1]) {
			clearInterval(CHECKING); // CLEAR THE INTERVAL WHICH WAS CHECKING 

			if (confirm("Are you ready by setting the Contact to whom you want to spam ? \r ✿ If it is, then click OK \r ✿ If it is not, then cancel for now, and set the contact to whom you want to spam, with that set then go to console and type Spam_Restart()") == true) {
				START();
			} else {
				console.log("%cSPAMMING SETUP STOPPED!", "color: #FF9F45; font-family:'JetBrains Mono', monospace; font-size: 12px");
				console.log("%cType here 'Spam_Restart()' to start it again", "color: #FF9F45; font-family:'JetBrains Mono', monospace; font-size: 12px");
			}

		} else {
			console.log("%cLoading...", "color: #632626; font-family:'JetBrains Mono', monospace; font-size: 10px");
		}
	}, 2000);
}

function START() {
	console.log("%cPlease fill the setup...", "color: #FF9F45; font-family:'JetBrains Mono', monospace; font-size: 12px");
	console.log(" ")
	try {

		// SPAMMING SETUP
		var MESSAGE = prompt("Enter the message you want to spam:", "Are you there ?");
		var COUNT = prompt(`Enter the number of times to spam:\r✿ If you want Limited spamming, type times of spamming'~'\r✿ If you want unstoppable spamming, type '~'\r✿ When you want to stop the process, type "Spam_Stop()" in console`);

		// GIVING SOME WARNINGS/INFO TO USER
		if (COUNT > 30) {
			// GIVING WARNING TO CONSOLE
			console.log("%cThis spamming process can be slow according to your CPU power and RAM, because you have gave the number of times of spamming more than 30 times", "color: #FF9F45; font-family:'JetBrains Mono', monospace; font-size: 12px");
			console.log(" ")

			// GIVING WARNING TO ALERT BOX
			alert("This spamming process can be slow according to your CPU power and RAM, because you have gave the number of times of spamming more than 30 times")
		}
		if (COUNT > 110) {
			// GIVING WARNING TO CONSOLE
			console.log("%cThis spamming process can be so much critical if you are using lower end devices, its fine if you are running this for testing... Its super fun, but this can crash whatsapp in the middle, if chrome takes this as wrong!", "color: #FF9F45; font-family:'JetBrains Mono', monospace; font-size: 12px");
			console.log(" ")

			// GIVING WARNING TO ALERT BOX
			alert("This spamming process can be so much critical if you are using lower end devices, its fine if you are running this for testing... Its super fun, but this can crash whatsapp in the middle, if chrome takes this as wrong!")
		}
		if (COUNT == "~") {
			// GIVING WARNING TO CONSOLE
			console.log("%cThis spamming process which you are going to do now would be so crazy and fun, you just can't believe it\nAGAIN A REMINDER:\n✿ When you will need to stop this process you need to type 'Spam_Stop()' in console...", "color: #FF9F45; font-family:'JetBrains Mono', monospace; font-size: 12px");
			console.log(" ")

			// GIVING WARNING TO ALERT BOX
			alert("This spamming process which you are going to do now would be so crazy and fun, you just can't believe it\rAGAIN A REMINDER:\r✿ When you will need to stop this process you need to type 'Spam_Stop()' in console...")
		}


	} catch (err) {
		// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	}


	SPAMMING(MESSAGE,COUNT);
}

var INTERVAL_LOOP_UNSTOPPABLE_SPAMMING;
function SPAMMING(MESSAGE,COUNT) {
	// SPAMMING THINGS START FROM HERE !

	var COUNT_TIMES = 0;
	window.InputEvent = window.Event || window.InputEvent;
	var event = new InputEvent('input', {
		bubbles: true
	});

	// FILTER COUNT PROMPT VALUE GOT FROM USER

	// IF VALUE OF COUNT PROMPT IS '~' THEN UNSTOPPABLE SPAMMING
	if (COUNT == "~") {
		SPAMMING_TYPE = "UNSTOPPABLE";

		INTERVAL_LOOP_UNSTOPPABLE_SPAMMING = setInterval(function () {
			let WHATSAPP_CHAT_INPUT = document.getElementsByClassName("_13NKt copyable-text selectable-text")[1];

			WHATSAPP_CHAT_INPUT.textContent = MESSAGE;
			WHATSAPP_CHAT_INPUT.dispatchEvent(event);

			let WHATSAPP_SEND_BUTTON = document.getElementsByClassName('_4sWnG')[0];
			WHATSAPP_SEND_BUTTON.click();
		}, SPAMMING_INTERVAL)

	}

	// IF VALUE OF COUNT PROMPT IS IN INTEGER THEN SPAMMING IN A LIMIT
	else if (!isNaN(COUNT)) {
		SPAMMING_TYPE = "LIMITATION";

		function FOR_LOOP() {
			setTimeout(function () {
				let WHATSAPP_CHAT_INPUT = document.getElementsByClassName("_13NKt copyable-text selectable-text")[1];

				WHATSAPP_CHAT_INPUT.textContent = MESSAGE;
				WHATSAPP_CHAT_INPUT.dispatchEvent(event);

				let WHATSAPP_SEND_BUTTON = document.getElementsByClassName('_4sWnG')[0];
				WHATSAPP_SEND_BUTTON.click();

				COUNT_TIMES++
				if (COUNT_TIMES < COUNT) {
					FOR_LOOP();
				} else {
					setTimeout(AFTER_FOR_LOOP, 2000);
				}
			}, SPAMMING_INTERVAL)
		}
		FOR_LOOP();

		function AFTER_FOR_LOOP() {

			WATERMARK();

			// SUCCESSFUL INFO TO ALERT BOX
			alert("SPAMMING COMPLETED ! \r Type 'Spam_Restart()' in the console to start fresh Spamming");

			// SUCCESSFUL INFO TO CONSOLE
			console.log("%cSPAMMING COMPLETED!", "color: #FF9F45; font-family:'JetBrains Mono', monospace; font-size: 12px");
			console.log("%cType here 'Spam_Restart()' to start it again", "color: #FF9F45; font-family:'JetBrains Mono', monospace; font-size: 12px");

		}
	}

	// IF VALUE OF COUNT PROMPT IS IN WRONG FORMAT
	else {

	}
}

function WATERMARK() {
	window.InputEvent = window.Event || window.InputEvent;
	var event = new InputEvent('input', {
		bubbles: true
	});

	let WHATSAPP_CHAT_INPUT = document.getElementsByClassName("_13NKt copyable-text selectable-text")[1];

	WHATSAPP_CHAT_INPUT.textContent = "--spammed by DJ & DK's BOT";
	WHATSAPP_CHAT_INPUT.dispatchEvent(event);

	let WHATSAPP_SEND_BUTTON = document.getElementsByClassName('_4sWnG')[0];
	WHATSAPP_SEND_BUTTON.click();
}

function Spam_Restart() {
	setTimeout(BOOT, 2000);
}
function Spam_Stop() {
	if (SPAMMING_TYPE == "LIMITATION") {
		// GIVING WARNING TO ALERT BOX
		alert("You are spamming in LIMITED MODE, you can't stop the process. But if its totally urgent to stop then close the tab!");

		// GIVING WARNING TO CONSOLE
		console.log("%cYou are spamming in LIMITED MODE, you can't stop the process. But if its totally urgent to stop then close the tab!", "color: #FF9F45; font-family:'JetBrains Mono', monospace; font-size: 12px");
	} 
	else if (SPAMMING_TYPE == "UNSTOPPABLE"){
		clearInterval(INTERVAL_LOOP_UNSTOPPABLE_SPAMMING);
		WATERMARK();

		// SUCCESSFUL INFO TO ALERT BOX
		alert("SPAMMING COMPLETED ! \r Type 'Spam_Restart()' in the console to start fresh Spamming");

		// SUCCESSFUL INFO TO CONSOLE
		console.log("%cSPAMMING COMPLETED!", "color: #FF9F45; font-family:'JetBrains Mono', monospace; font-size: 12px");
		console.log("%cType here 'Spam_Restart()' to start it again", "color: #FF9F45; font-family:'JetBrains Mono', monospace; font-size: 12px");
	}
}

setTimeout(BOOT, 1500);