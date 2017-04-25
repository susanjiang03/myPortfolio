  	$(document).ready(function(){

  		//player vs. computer : not implemented
  		$("#btnPlayerOne").prop("disabled", true);

  		var start,current,boardValues,total,players;
  
		//create board
  		for(var i=0; i<3;i++){

  		  var row = "";
	      for(var j=0; j<3; j++){
	         row +='<button style="border:2px solid;width:33%;display:inline" class="btn grid bg-primary" name="' +  i + ',' + j + '">&nbsp;</button>';
	      }
	      $("#board").append('<div class="row">' + row + '</div>');

	   	}

	   	$("#board .grid").height($("#board .grid").width())
	   	.css({"font-size": $(".grid").width()*0.6});

	   	//reset
	   	$("#btnReset").click(function(){

  			// $("[id^=btnPlayer]").prop("disabled", false).removeClass("btn-primary");
  			$("#btnPlayersTwo").prop("disabled", false).removeClass("btn-primary");
  			$("[id^=player]").find("[name]").html("");
  			$("[name=icon]").removeClass("btn-info")
			CleanBoard();
			$(".grid,#btnO,#btnX").prop("disabled", true).css("color", "white");
	   	});

	   	//reset
	   	$("#btnReset").trigger("click");


	   	$("[id^=btnPlayer]").click(function(){

	   		$(this).addClass("btn-primary");
	   		$(this).siblings("[id^=btnPlayer]").prop("disabled",true);
	   		//set player icons
  			$("#playerA [name=icon]").html($(this).children("span").eq(0).html());
  			$("#playerB [name=icon]").html($(this).children("span").eq(1).html());

	  
	   		//reset player stats
 			players = { "A" :{}, "B" : {}};
  			SetPlayer('A',"win",0);
  			SetPlayer('A',"tie",0);
  			SetPlayer('A',"lose",0);
  			SetPlayer('B',"win",0);
  			SetPlayer('B',"tie",0);
  			SetPlayer('B',"lose",0);

	   		start = "X";
	   		Restart();
	   	});


	   	$("body").on("click", ".grid", function(){

	   		var nameSplit = $(this).attr("name").split(",").map(Number);
	   		var x = nameSplit[0];
	   		var y = nameSplit[1];
	   		boardValues[x][y] = current;
	   		$(this).text(current);
	   		var newClass = (current == "O") ? "btn-success" : "btn-danger";
	   		$(this).removeClass("btn-primary").addClass(newClass);
	   		$(this).prop("disabled", true);

	   		total += 1;
	   		CheckWin();

	   	});


	   	/*check if current player won */
	   	function CheckWin(){

	   		if(CheckH() || CheckV() || CheckD()){

					SetWin();
					setTimeout(function(){ 
	   					Restart();
	   				},2000);
	   		}
	   		//no win
	   		else{
	   			//tie
	   			if(total == 9){

	   				SetTie();
	   				setTimeout(function(){ 
	   					Restart();
	   				},2000);
	   			}
	   			else{
	   				//continue
		   			ChangeTurn();
		   			return false;
		   		}
	   		}
	   	};


	   	/*check if current player won in horizontal row */
	   	function CheckH(){

	   		for(var row = 0; row<3; row++){

	   			for(var col = 0; col<3; col++){
	   				//not equal current "O" or "X", exist this loop
	   				if(boardValues[row][col] != current){
	   					break;
	   				}

	   				//if equal, and this is second , continue
	   				if(col == 1){
	   					continue;
	   				}
	   				
	   				//if equal, and this is last, win
	   				if(col == 2){
	   					//show win row
	   					$("#board div.row").eq(row)
	   					.children(".grid").removeClass("btn-success btn-danger").addClass("btn-warning");
	   					return true;
	   				}
	   			}
	   		}
	   		return false;
	   	};

	   	/*check if current player won in vertical row */
	   	function CheckV(){

	   		for(var col = 0; col<3; col++){

	   			for(var row = 0; row<3; row++){
	   				//not equal current "O" or "X", exist this loop
	   				if(boardValues[row][col] != current){
	   					break;
	   				}

	   				//if equal, and this is second , continue
	   				if(row == 1){
	   					continue;
	   				}
	   				
	   				//if equal, and this is last, win
	   				if(row == 2){

	   					//show win col
	   					$("#board div.row").each(function(){

	   						$(this).children(".grid").eq(col)
	   						.removeClass("btn-success btn-danger").addClass("btn-warning");
	   					})
	   					
	   					return true;
	   				}
	   			}
	   		}
	   		return false;


	   	};

	   	/*check if current player won in diagonal row */
	   	function CheckD(){

	   		//top left to right bottom
	   		for(var i = 0; i<3; i++){

   				if(boardValues[i][i] != current){
   					break;
   				}

   				//if equal, and this is second , continue
   				if(i == 1){
   					continue;
   				}
   				
   				//if equal, and this is last, win
   				if(i == 2){

   					//show win diag
   					var names = ["0,0", "1,1", "2,2"];
   					for(var n in names){
   						$("#board .grid[name='"+ names[n] + "']")
   						.removeClass("btn-success btn-danger").addClass("btn-warning");
   					}
   	
   					return true;
   				}
	   		}

	   		//top right to left bottom
	   		for(var i = 2; i >= 0; i--){

   				if(boardValues[2 - i][i] != current){
   					break;
   				}
   				//if equal, and this is second , continue
   				if(i == 1){
   					continue;
   				}
   				
   				//if equal, and this is last, win
   				if(i == 0){
   					
   					//show win diag
   					var names = ["0,2", "1,1", "2,0"];
   					for(var n in names){
   						$("#board .grid[name='"+ names[n] + "']")
   						.removeClass("btn-success btn-danger").addClass("btn-warning");
   					}
   					return true;
   				}
	   		}

	   		return false;

	   	};


	   	/* change start with "O"/"X" in turn when each game over */
	   	function ChangeStart(){

	   		current = start;
	   		start = (start == "O") ? "X" : "O";
	   		ChangeTurn();
	   	}


	   	/*change turn base on current value:
	   	current "O" => "X" , current "X" => "O" 
	   	start first
	   	*/
	   	function ChangeTurn(){

	   		var next = (current == "O") ? "X" : "O";

	   		$("#btn" + current).prop("disabled", true).css("color","grey")
	   			.siblings("[name=icon]").removeClass("btn-info");

	   		$("#btn" + next).prop("disabled", false).css("color","white")
	   			.siblings("[name=icon]").addClass("btn-info");

	   		current = next;
	   	};

	   	/*set @player('A' or 'B') 's @attr new @value,
	   	 and update in front end */
	   	function SetPlayer(player, attr, value){
	   		players[player][attr] = value;
	   		$("#player" + player).find("[name="+ attr +"]").text(value);
	   		console.log(JSON.stringify(players));
	   	};


	   //win 
	   	function SetWin(){

	   		alert("[" + current + "]   WIN  !!!");

	   		$(".grid").prop("disabled", true);

            if(current == "O"){
				SetPlayer("A", "win", players["A"]["win"] + 1);
				SetPlayer("B", "lose", players["B"]["lose"] + 1);
			}
			else{
				//'X'
				SetPlayer("B", "win", players["B"]["win"] + 1);
				SetPlayer("A", "lose", players["A"]["lose"] + 1);
			}
	   	}


	   	function SetTie(){

			alert("Tie");
			SetPlayer("A", "tie", (players["A"]["tie"] + 1));
			SetPlayer("B", "tie", (players["B"]["tie"] + 1));

	   	};

	   	//clean board, continue, reset, change start 
	   	function CleanBoard(){

	   		$(".grid").html("").prop("disabled", false)
	   		.removeClass("btn-success btn-danger btn-warning").addClass("btn-primary");

	   		total = 0;
	   		//reset matrix
  			boardValues = [
  							["", "", ""],
  							["", "", ""],
  							["", "", ""],
  						  ];

	   	};

	   	//restart
	   	function Restart(){

	   		CleanBoard();
	   		ChangeStart();
	   	}


	   	$('[role="tooltip"]').tooltip(); 

  	});