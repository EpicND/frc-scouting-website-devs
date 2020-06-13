console.log("ok");

var db = firebase.database();


var dbref;

getData(2019, "2019mndu");


function getData(year, eKey) {
  console.time();
  dbref = `/${year}/${eKey}`
  db.ref(dbref).once('value').then(function(snapshot) {
    // console.log(snapshot.val());
    // var teams = snapshot.val();
    // var length = Object.keys(teams).length;
    testFunc(snapshot)
  })

}

function testFunc(snapshot) {


  
  
// db.ref(dbref).once('value').then(function(snapshot) {
  // console.log(snapshot.val());
  var teams = snapshot.val();
  var length = Object.keys(teams).length;

  for(var i = 0; i< length; i++) {
  var team = Object.keys(teams)[i];

  var currentTeam = teams[team];
  console.log(currentTeam)
  // console.log(currentTeam);
  

  if(document.getElementById(`${team}`)){


    var rank = document.getElementById(`${team}-rank`);
    var teamNames = document.getElementById(`${team}-name`);
    var avgs = document.getElementById(`${team}-avgs`);
    var wlrec = document.getElementById(`${team}-wlrec`);
    var autoScores = document.getElementById(`${team}-autoScores`);
    var tOPScores = document.getElementById(`${team}-tOPScores`);
    var outerNums = document.getElementById(`${team}-outerNums`);
    var innerNums = document.getElementById(`${team}-innerNums`);
    var bottomNums = document.getElementById(`${team}-bottomNums`);

    if(autoScores.innerHTML !== currentTeam.averages.autoAvg) {
      autoScores.classList.add('updated')
    }

    rank.innerHTML = 1.;
    teamNames.innerHTML = team;
    autoScores.innerHTML = currentTeam.averages.autoAvg;
    tOPScores.innerHTML = currentTeam.averages.tOPAvg;
    wlrec.innerHTML = currentTeam.wltratio;
    innerNums.innerHTML = currentTeam.averages.innerAvg;
    outerNums.innerHTML = currentTeam.averages.outerAvg;
    bottomNums.innerHTML = currentTeam.averages.bottomAvg;


  } else {

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

  tr.setAttribute('id', `${team}`)
  rank.setAttribute('id', `${team}-rank`)
  teamNames.setAttribute('id', `${team}-name`)
  avgs.setAttribute('id', `${team}-avgs`)
  wlrec.setAttribute('id', `${team}-wlrec`)
  autoScores.setAttribute('id', `${team}-autoScores`)
  tOPScores.setAttribute('id', `${team}-tOPScores`)
  outerNums.setAttribute('id', `${team}-outerNums`)
  innerNums.setAttribute('id', `${team}-innerNums`)
  bottomNums.setAttribute('id', `${team}-bottomNums`)

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
  }
  console.timeEnd();

// });
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

db.ref(dbref).on('value', (snapshot) => {
  console.log('change')
  testFunc(snapshot)
})