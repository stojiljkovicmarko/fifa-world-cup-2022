import { fixtureArray } from "./fixtureArray.js";
import { round } from "./rounds.js";
import { displayEliminationRound } from "./displayResults.js";

/* RANDOM GOALS WITH 6 MAX */

export const getRandomGoals = () => {
  return Math.floor(Math.random() * 6);
};

/* 

    ONE MATCH PLAY SIMULATION 
    
    1. GROUP PLAY OUTCOME - win, lose, draw
    2. ELIMINATION PHASE OUTCOME - win, lose, null )draw) 
        (if draw, triggers match play again until winner emerges)

*/

const playMatch = (teamA, teamB, eliminationPhase) => {
  const goalsTeamA = getRandomGoals();
  const goalsTeamB = getRandomGoals();

  if (eliminationPhase) {
    if (goalsTeamA > goalsTeamB) {
      teamA.winsGame(goalsTeamA, goalsTeamB, teamB);
      teamB.losesGame(goalsTeamB, goalsTeamA, teamA);
      console.log(`   ${teamA.name} ${goalsTeamA}:${goalsTeamB} ${teamB.name}`);
      return teamA;
    } else if (goalsTeamA < goalsTeamB) {
      teamB.winsGame(goalsTeamB, goalsTeamA, teamA);
      teamA.losesGame(goalsTeamA, goalsTeamB, teamB);
      console.log(`   ${teamA.name} ${goalsTeamA}:${goalsTeamB} ${teamB.name}`);
      return teamB;
    } else {
      return null;
    }
  } else {
    if (goalsTeamA > goalsTeamB) {
      teamA.winsGame(goalsTeamA, goalsTeamB, teamB);
      teamB.losesGame(goalsTeamB, goalsTeamA, teamA);
    } else if (goalsTeamA < goalsTeamB) {
      teamB.winsGame(goalsTeamB, goalsTeamA, teamA);
      teamA.losesGame(goalsTeamA, goalsTeamB, teamB);
    } else {
      teamA.drawsGame(goalsTeamA, goalsTeamB, teamB);
      teamB.drawsGame(goalsTeamB, goalsTeamA, teamA);
    }
    console.log(`   ${teamA.name} ${goalsTeamA}:${goalsTeamB} ${teamB.name}`);
  }
};

/* GROUP PLAY PHASE */

const playGroupPhase = () => {
  round(1);
  round(2);
  round(3);
};

/* RECURSIVE FUNCTION FROM ROUND 16 TO FINALS */

const playEliminationPhase = (
  pairsForEliminationPhase,
  gamesToBePlayed = 8
) => {
  let nextPhase = [];
  let winner;

  displayEliminationRound(gamesToBePlayed);

  if (pairsForEliminationPhase.length === 2) {
    do {
      winner = playMatch(
        pairsForEliminationPhase[0],
        pairsForEliminationPhase[1],
        true
      );
    } while (!winner);
    console.log();
    console.log(`Winner:
      !!!  ${winner.name}  !!!`);
    return;
  }
  for (let i = 0; i < gamesToBePlayed; i++) {
    let indexTeamA = fixtureArray[i][0];
    let indexTeamB = fixtureArray[i][1];

    do {
      winner = playMatch(
        pairsForEliminationPhase[indexTeamA],
        pairsForEliminationPhase[indexTeamB],
        true
      );
    } while (!winner);

    nextPhase.push(winner);
  }
  console.log();
  playEliminationPhase(nextPhase, gamesToBePlayed / 2);
};

export { playMatch, playGroupPhase, playEliminationPhase };
