


var db = firebase.database();
// gamer(2020, "2020mndu");

function gamer(year, eKey) {
db.ref("/"+ year + "/" + eKey).once('value').then(function(snapshot) {
  var teams = snapshot.val();
  var length = Object.keys(teams).length;

  for(var i = 0; i< length; i++) {
  var team = Object.keys(teams)[i];

  var currentTeam = teams[team];
  // console.log(currentTeam);



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
  console.time();
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
    console.timeEnd();
        $('.loading').fadeOut(600);
        $('.sortable').fadeIn(1000);

        var myTH = document.getElementById('teamRanks');
        sorttable.innerSortFunction.apply(myTH, []);
        sorttable.innerSortFunction.apply(myTH, []);
        $('.makeEpicAppear').fadeIn(500);

        clear();
}








particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
