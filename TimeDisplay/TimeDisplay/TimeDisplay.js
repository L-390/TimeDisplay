class TimeDisplay extends BaseInstrument
{
	constructor()
	{
		super();
	}
	get templateID() { return "TimeDisplayDiv"; }
	connectedCallback()
	{
		super.connectedCallback();

		this.DisplayDiv = document.getChildbyId("Display");
		this.ClockDiv = document.getChildbyId("Clock");
		this.StopwatchDiv = document.getChildbyId("Stopwatch");
		this.StartStopDiv = document.getChildbyId("StartStop");
		this.ResetDiv = document.getChildbyId("Reset");

		this.Update();
	}
	disconnectedCallback()
	{
		super.disconnectedCallback();
	}

	Update()
	{
		super.Update();

		this.msfsUpdate();
	}


	browserUpdate()
	{
		if (this.ClockDiv)
		{
			this.ClockDiv.textContent = "Time"
        }
	}

	msfsUpdate()
	{
		var Time = SimVar.GetGetGlobalVarValue("Local Time");
	}
}
registerInstrument('TimeDisplayDiv', TimeDisplayDiv);


