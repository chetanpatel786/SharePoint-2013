var LogArr=$.map(BOSSWS_GetTicketInfo(256), function(el){return el;})
//var LogArr= BOSSWS_GetTicketInfo(256);
alert(LogArr);


(function(){

var app=angular.module('ticketDb', []);

app.controller('TicketController', function(){
  this.tickets=logs;
});

var logs=[

{
	title: LogArr[10],
	status: LogArr[18],
	number: LogArr[1],
	assignedto: LogArr[36],
	createdby: LogArr[5],
	opensince: LogArr[12]
},
{
	title: "Test ticket from BOSS",
	status: "Work in Progress",
	number: 2,
	assignedto: "Peter Parker",
	createdby: "Jane Customer",
	opensince: "1/1/15"
},
{
	title: "Test ticket from BOSS",
	status: "On Hold",
	number: 3,
	assignedto: "Fred Dukes",
	createdby: "Jane Customer",
	opensince: "1/1/15"
}
];


app.controller('AssetController', function(){
  this.assets=equipment;
});

var equipment= [
{
	name: "TS-0001",
	type: "laptop",
	assignedto: "John Doe",
},
{
	name: "TS-0002",
	type: "iPad",
	assignedto: "John Doe",
},
{
	name: "TS-0003",
	type: "iPhone",
	assignedto: "John Doe",
}
];
})();

