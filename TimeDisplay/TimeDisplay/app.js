// MSFS CODE CHANGE
// Change HTMLElement to BaseInstrument. BaseInstrument is a very complex class created by various other MSFS JS code
// Change AntsTutorialGauge to the name of your own gauge
// Change ants-tutorial-gauge to the name of your custom element. Must match the name in .html
//class AntsTutorialGaugeDiv extends BaseInstrument {
class AntsTutorialGaugeDiv extends HTMLElement {
	constructor() {
		super();
		// Setup any global variables

	}
	get templateID() { return "AntsTutorialGaugeDiv"; }
	connectedCallback() {
		// MSFS CODE CHANGE
		// remove comment from super.connectedCallback();
		//super.connectedCallback();

		// Read the Element IDs of the elements we created in the css file. 

		// In the browser version we get the IDs by using document.getElementById
		//this.basictextDiv = document.getElementById("basic-text");
		this.basicshapeDiv = document.getElementById("basic-shape").innerHTML = Time;
		//this.basichideDiv = document.getElementById("basic-hide");
		//this.basicoutlineDiv = document.getElementById("basic-outline");

		// MSFS CODE CHANGE
		// In MSFS we get the IDs by using this.getChildbyId
		//this.basictextDiv = this.getChildById("basic-text");
		//this.basicshapeDiv = this.getChildById("basic-shape");
		//this.basichideDiv = this.getChildById("basic-hide");
		//this.basicoutlineDiv = this.getChildById("basic-outline");

		// Insert your routines called to setup		

		// MSFS CODE CHANGE
		// Remove this.Update() the MSFS BaseInstrument class will call it automatically.
		this.Update();
	}
	disconnectedCallback() {
		super.disconnectedCallback();
	}
	onInteractionEvent(_args) {
		switch (_args[0]) {
			case "name_of_H_event":
				// Process input event
				// To interact with your gauge you add (>H:name_of_H_event) to your model behavior file. Usually this will be in a mouse interaction. 
				break;
		}
	}

	Update() {
		// MSFS CODE CHANGE
		// remove comment from super.Update(); We call this routine in connectedCallback() when in the browser but in MSFS it will be called automatically and is the main update procedure so you can put all your ongoing logic code here (or better, use functions to do your logic and put the function calls here). Honestly, I don't know why but I guess there is a good reason. 
		// BTW watch out for capitalisation. It's Update(), not update().
		//super.Update();

		// Select the appropriate update function. For development use browserUpdate as a simple checker as most of the msfs functions won't be available in the browser.
		this.browserUpdate();
		//this.msfsUpdate();

	}

	// Write your own functions to replace these
	browserUpdate() {
	}

	msfsUpdate() {
		// Change the text to show the throttle position

		// Getsimvarvalue let's you read any simulation variable and is the main way to interact with the sim. SimVar.GetGlobalVarValue should be used for global variables such as time. I have also seen SimVar.GetSimVarValue("E:ABSOLUTE TIME", "seconds"); and I think you can access L: vars in the same fashion.
		var Time = SimVar.GetGetGlobalVarValue("Local Time");
	}
}
// MSFS CODE CHANGE: Change customElements line to the MSFS registerInstrument line
customElements.define('ants-tutorial-gauge-div', AntsTutorialGaugeDiv);
//registerInstrument('ants-tutorial-gauge-div', AntsTutorialGaugeDiv);


