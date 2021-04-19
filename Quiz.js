class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
     
    fill("yellow");

    //write code to show a heading for showing the result of Quiz

    Contestant.getPlayerInfo();


    if (allContestant!==undefined){
      fill("blue");
      textSize(20);
      text("*Note: Contestant who answered correct are highitedin green colour!", 130,  230)
      for(var plr in allContestant){
        if(plr==="contestant"+player.index){
          fill("green")
        }
        else{
          fill("red")
        }
      }
    }

    
  }

}
