import { arrayOfGroups } from "./makeGroups.js";
import { playGroupPhase, playEliminationPhase } from "./playMatches.js";
import {
  sortTeamsInGroupsAfterRounds,
  prepareForEliminationPhase,
  pairsForEliminationPhase,
} from "./sortForElimination.js";
import { displayGroupStanding } from "./displayResults.js";

const main = () => {
  playGroupPhase();

  sortTeamsInGroupsAfterRounds(arrayOfGroups);

  displayGroupStanding(arrayOfGroups);

  prepareForEliminationPhase(arrayOfGroups);

  playEliminationPhase(pairsForEliminationPhase);
};

main();
