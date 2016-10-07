$(document).ready(function(){
  var games =data["sports"][0]["leagues"][0]["events"]

      for(var i = 0; i<games.length; i++){
        name1 = games[i]["competitions"][0]["competitors"][0]["team"]["nickname"];
        nickName1 = games[i]["competitions"][0]["competitors"][0]["team"]["name"];
        score1 = games[i]["competitions"][0]["competitors"][0]["score"];
        var wholeName1 = name1 + " " + nickName1 + " " + score1

        name2  = games[i]["competitions"][0]["competitors"][1]["team"]["nickname"];
        nickName2  = games[i]["competitions"][0]["competitors"][1]["team"]["name"];
        score2  = games[i]["competitions"][0]["competitors"][1]["score"];
        var wholeName2 = name2 + " " +nickName2 + " " + score2
        }

});
