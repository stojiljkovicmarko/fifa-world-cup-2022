import { playMatch } from "./playMatches.js";
import { allTeams } from "./makeGroups.js";
import { fixtureArray } from "./fixtureArray.js";

/* ROUNDS 1, 2, 3 */

const round = (phase) => {
  switch (phase) {
    case 1:
      {
        console.log(`Group phase ${phase}: `);
        for (let i = 0; i <= 15; i++) {
          let teamAindex = fixtureArray[i][0];
          let teamBindex = fixtureArray[i][1];
          if (i % 2 === 0) {
            console.log(` Group: ${allTeams[teamAindex].group}`);
          }
          playMatch(allTeams[teamAindex], allTeams[teamBindex], false);
        }
        console.log("--------------------");
      }
      break;
    case 2:
      {
        console.log(`Group phase ${phase}: `);
        for (let i = 16; i <= 31; i++) {
          let teamAindex = fixtureArray[i][0];
          let teamBindex = fixtureArray[i][1];
          if (i % 2 === 0) {
            console.log(` Group: ${allTeams[teamAindex].group}`);
          }
          playMatch(allTeams[teamAindex], allTeams[teamBindex], false);
        }
        console.log("--------------------");
      }
      break;
    case 3:
      {
        console.log(`Group phase ${phase}: `);
        for (let i = 32; i <= 47; i++) {
          let teamAindex = fixtureArray[i][0];
          let teamBindex = fixtureArray[i][1];
          if (i % 2 === 0) {
            console.log(` Group: ${allTeams[teamAindex].group}`);
          }
          playMatch(allTeams[teamAindex], allTeams[teamBindex], false);
        }
        console.log("--------------------");
      }
      break;
  }
};

export { round };
