
var sampleOne = ["12-15-2015", "John Doe", "JD", "Bob Jones", "1-1-1964", "YES", "333-333-3333", "1-1-1964", "Dental-FY", "111-222-3333", "33252248", "SINGLE", "1-1-2016", 
			"5-7-2016", "2016", "example", "example","example", "example","example", "example","example", "example","example", "example","example", "example","example", "example","example", "example","example", "example","example", "example","example","example","example","example","example","example","example"]; 

var sampleTwo = ["12-1-2014", "James Doe", "JD", "Robert Robertson", "1-1-1982", "NO", "313-111-5333", "1-1-1964", "Dental-FY", "333-222-3333", "3111148", "FAMILY", 
				"1-1-2016", "5-7-2016", "2016", "example", "example","example", "example","example", "example","example", "example","example", "example","example", "example","example", "example","example", "example","example", "example","example", "example","example","example","example","example","example","example","example"]; 

var sampleThree = ["8-4-2015", "Bob Brown", "BB", "John Doe", "1-1-1964", "YES", "333-333-3333", "1-1-1964", "Dental-FY", "111-222-3333", "33252248", "SINGLE", "1-1-2016", 
			"11-7-2016", "2015", "example", "example","example", "example","example", "example","example", "example","example", "example","example", "example","example", "example","example", "example","example", "example","example", "example","example","example","example","example","example","example","example"]; 

function search(){
	var id = document.getElementById("id").value;
	if(id == "1111"){
		set(sampleOne);
	}else if(id == "2222"){
		set(sampleTwo);
	}else if(id == "3333"){
		set(sampleThree);
	}else{
		alert("No record found.");
	}

}


function set(one){
	$("#one").val(one[0]);
	$("#two").val(one[1]);
	$("#three").val(one[2]);
	$("#four").val(one[3]);
	$("#five").val(one[4]);
	$("#six").val(one[5]);
	$("#seven").val(one[6]);
	$("#eight").val(one[7]);
	$("#nine").val(one[8]);
	$("#ten").val(one[9]);
	$("#eleven").val(one[10]);
	$("#twelve").val(one[11]);
	$("#thirteen").val(one[12]);
	$("#fourteen").val(one[13]);
	$("#fifthteen").val(one[14]);
	$("#sixteen").val(one[15]);
	$("#seventeen").val(one[16]);
	$("#eighteen").val(one[17]);
	$("#nineteen").val(one[18]);
	$("#twenty").val(one[19]);
	$("#twentyone").val(one[20]);
	$("#twentytwo").val(one[21]);
	$("#twentythree").val(one[22]);
	$("#twentyfour").val(one[23]);
	$("#twentyfive").val(one[24]);
	$("#twentysix").val(one[25]);
	$("#twentyseven").val(one[26]);
	$("#twentyeight").val(one[27]);
	$("#twentynine").val(one[28]);
	$("#thirty").val(one[29]);
	$("#thirtyone").val(one[30]);
	$("#thirtytwo").val(one[31]);
	$("#thirtythree").val(one[32]);
	$("#thirtyfour").val(one[33]);
	$("#thirtyfive").val(one[34]);
	$("#thirtysix").val(one[35]);
	$("#thirtyseven").val(one[36]);
	$("#thirtyeight").val(one[37]);
	$("#thirtynine").val(one[38]);
	$("#forty").val(one[39]);
	$("#fortyone").val(one[40]);
	$("#fortytwo").val(one[41]);

}

function clear(){
	$("#one").val(" ");
	$("#two").val(" ");
	$("#three").val(" ");
	$("#four").val("");
	$("#five").val("");
	$("#six").val("");
	$("#seven").val("");
	$("#eight").val("");
	$("#nine").val("");
	$("#ten").val("");
	$("#eleven").val("");
	$("#twelve").val("");
	$("#thirteen").val("");
	$("#fourteen").val("");
	$("#fifthteen").val("");
	$("#sixteen").val("");
	$("#seventeen").val("");
	$("#eighteen").val("");
	$("#nineteen").val("");
	$("#twenty").val("");
	$("#twentyone").val("");
	$("#twentytwo").val("");
	$("#twentythree").val("");
	$("#twentyfour").val("");
	$("#twentyfive").val("");
	$("#twentysix").val("");
	$("#twentyseven").val("");
	$("#twentyeight").val("");
	$("#twentynine").val("");
	$("#thirty").vval("");
	$("#thirtyone").val("");
	$("#thirtytwo").val("");
	$("#thirtythree").val("");
	$("#thirtyfour").val("");
	$("#thirtyfive").val("");
	$("#thirtysix").val("");
	$("#thirtyseven").val("");
	$("#thirtyeight").val("");
	$("#thirtynine").val("");
	$("#forty").val("");
	$("#fortyone").val("");
	$("#fortytwo").val("");
}