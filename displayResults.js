/* GROUP RESULTS DISPLAY IN CONSOLE */

const doubleTab = (team) => {
  if (`${team.name} ${team.rank}`.length < 10) return true;
};

const displayGroupStanding = (groups) => {
  let groupStandings = "";
  groups.map((group) => {
    groupStandings += `GROUP: ${group[0].group}\n`;
    let index = 1;
    group.map((team) => {
      groupStandings += `${index}. ${team.name} (${team.rank}) ${
        doubleTab(team) ? "\t \t" : "\t"
      } ${team.wins}  ${team.draws}  ${team.losses}  ${team.goalsScored}:${
        team.goalsReceived
      }  ${team.points}\n`;
      index++;
    });
  });
  console.log(groupStandings);
};

const displayEliminationRound = (gamesToBePlayed) => {
  switch (gamesToBePlayed) {
    case 8:
      console.log("Round of 16: ");
      break;
    case 4:
      console.log("Quaterfinals: ");
      break;
    case 2:
      console.log("Semifinals: ");
      break;
    case 1:
      console.log("Finals: ");
      break;
  }
};

export { displayGroupStanding, displayEliminationRound };
