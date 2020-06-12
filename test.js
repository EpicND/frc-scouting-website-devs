console.log("ok");

var db = firebase.database();

testFunc(2020, "2020mndu");

function testFunc(year, eKey) {
db.ref("/"+ year + "/" + eKey).once('value').then(function(snapshot) {
  console.log(snapshot.val());
  var teams = snapshot.val();
  var length = Object.keys(teams).length;

  for(var i = 0; i< length; i++) {
  var team = Object.keys(teams)[i];

  var currentTeam = teams[team];
  console.log(currentTeam);



  var tr = document.createElement('tr');
  var rank = document.createElement('td');
  var teamNames = document.createElement('td');
  var avgs = document.createElement('td');
  var wlrec = document.createElement('td');
  var autoScores = document.createElement('td');
  var tOPScores = document.createElement('td');
  var outerNums = document.createElement('td');
  var innerNums = document.createElement('td');
  var bottomNums = document.createElement('td');

  outerNums.classList.toggle("inline-collapsable");
  innerNums.classList.toggle("inline-collapsable");
  bottomNums.classList.toggle("inline-collapsable");
  avgs.classList.toggle('inline-collapsable');

  tr.classList.toggle('inline-centering');

  var table = document.getElementById('table-items');

  table.appendChild(tr);
  tr.append(rank);
  // table.appendChild(empty);
  tr.appendChild(teamNames);
  // tr.appendChild(wlrec);
  tr.appendChild(autoScores);
  tr.appendChild(tOPScores);
  tr.appendChild(wlrec);
  tr.appendChild(bottomNums);
  tr.appendChild(outerNums);
  tr.appendChild(innerNums);

  rank.classList.add('rankAlign');

  rank.innerHTML = 1.;
  teamNames.innerHTML = team;
  autoScores.innerHTML = currentTeam.averages.autoAvg;
  tOPScores.innerHTML = currentTeam.averages.tOPAvg;
  wlrec.innerHTML = currentTeam.wltratio;
  innerNums.innerHTML = currentTeam.averages.innerAvg;
  outerNums.innerHTML = currentTeam.averages.outerAvg;
  bottomNums.innerHTML = currentTeam.averages.bottomAvg;

  }

});
}


function putItems() {
      for (listVar = 0; listVar < teamArray.length; listVar++) {

      var tr = document.createElement('tr');
      var rank = document.createElement('td');
      var teamNames = document.createElement('td');
      var avgs = document.createElement('td');
      var wlrec = document.createElement('td');
      var autoScores = document.createElement('td');
      var tOPScores = document.createElement('td');
      var outerNums = document.createElement('td');
      var innerNums = document.createElement('td');
      var bottomNums = document.createElement('td');

      outerNums.classList.toggle("inline-collapsable");
      innerNums.classList.toggle("inline-collapsable");
      bottomNums.classList.toggle("inline-collapsable");
      avgs.classList.toggle('inline-collapsable');


      var bigbig = ('getMyTeamInfoVar(\"' + teamNumArray[listVar] + '\")');


      tr.classList.toggle('inline-centering');

      tr.setAttribute("onClick", bigbig);


      var table = document.getElementById('table-items');

      table.appendChild(tr);
      tr.append(rank);
      // table.appendChild(empty);
      tr.appendChild(teamNames);
      // tr.appendChild(wlrec);
      tr.appendChild(autoScores);
      tr.appendChild(tOPScores);
      tr.appendChild(wlrec);
      tr.appendChild(bottomNums);
      tr.appendChild(outerNums);
      tr.appendChild(innerNums);

      rank.classList.add('rankAlign');
      // //console.log("P is" + p);
      rank.innerHTML = teamRankArray[listVar]; + '.';
      teamNames.innerHTML = teamArray[listVar] + " - " + teamNumArray[listVar];
      // teamScores.innerHTML = finalArray[listVar];
      autoScores.innerHTML = finalArray2[listVar];
      tOPScores.innerHTML = finalArray3[listVar];
      wlrec.innerHTML = finalArray7[listVar];
      innerNums.innerHTML = finalArray4[listVar];
      outerNums.innerHTML = finalArray5[listVar];
      bottomNums.innerHTML = finalArray6[listVar];

          document.getElementById("eventInfo").scrollIntoView( {behavior: "smooth" })

      // console.log("making stuff appear");
    }

        $('.loading').fadeOut(600);
        $('.sortable').fadeIn(1000);

        var myTH = document.getElementById('teamRanks');
        sorttable.innerSortFunction.apply(myTH, []);
        sorttable.innerSortFunction.apply(myTH, []);
        $('.makeEpicAppear').fadeIn(500);

        clear();
}
