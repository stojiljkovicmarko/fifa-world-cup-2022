/*

    SORT TEAMS IN GROUPS BASED ON: 
    
    1. POINTS
    2. POINTS AND GOAL DIFF (SCORED/RECEIVED)
    3. POINTS && GOAL DIFF (SCORED/RECEIVED) && GOALS SCORED
    4. POINTS && GOAL DIFF (SCORED/RECEIVED) && GOALS SCORED && SCORE AGAINST OPPONENT


*/

const sortTeamsInGroupsAfterRounds = (groups) => {
  groups.map((group) =>
    group.sort((teamA, teamB) => {
      if (teamA.points > teamB.points) return -1;
      if (teamA.points < teamB.points) return 1;

      if (teamA.goalsDifference > teamB.goalsDifference) return -1;
      if (teamA.goalsDifference < teamB.goalsDifference) return 1;

      if (teamA.goalsScored > teamB.goalsScored) return -1;
      if (teamA.goalsScored < teamB.goalsScored) return 1;

      if (teamA.winsAgainst.includes(teamB.name)) return -1;
    })
  );
};

/* PICK 2 TOP TEAMS FROM EACH GROUP */

const getTwoBestFromGroup = (group) => {
  return group.slice(0, 2);
};

/* MAKE PAIRS FOR ROUND 16 - elimination phase */

const pairsForEliminationPhase = [];

const prepareForEliminationPhase = (arrayOfGroups) => {
  let bestTeams = [];

  arrayOfGroups.map((group) => {
    bestTeams.push(getTwoBestFromGroup(group));
  });
  for (let i = 0; i < 8; i += 2) {
    pairsForEliminationPhase.push(bestTeams[i][0]);
    pairsForEliminationPhase.push(bestTeams[i + 1][1]);
    pairsForEliminationPhase.push(bestTeams[i][1]);
    pairsForEliminationPhase.push(bestTeams[i + 1][0]);
  }

  /* SHOW TEAMS IN ELIMINATION PHASE AS TABLE */
  //console.table(pairsForEliminationPhase);
};

export {
  sortTeamsInGroupsAfterRounds,
  prepareForEliminationPhase,
  pairsForEliminationPhase,
};
