export default class NationalTeam {
  name;
  rank;
  group;
  wins = 0;
  winsAgainst = [];
  drawsAgainst = [];
  lossesAgainst = [];
  draws = 0;
  losses = 0;
  goalsReceived = 0;
  goalsScored = 0;
  goalsDifference = 0;
  points = 0;
  constructor(name, rank, group) {
    this.name = name;
    this.rank = rank;
    this.group = group;
  }

  winsGame(goalsScored, goalsReceived, opponent) {
    this.wins++;
    this.winsAgainst.push(opponent.name);
    this.points += 3;
    this.goalsReceived += goalsReceived;
    this.goalsScored += goalsScored;
    this.goalsDifference = this.goalsScored - this.goalsReceived;
  }

  losesGame(goalsScored, goalsReceived, opponent) {
    this.losses++;
    this.lossesAgainst.push(opponent.name);
    this.goalsReceived += goalsReceived;
    this.goalsScored += goalsScored;
    this.goalsDifference = this.goalsScored - this.goalsReceived;
  }

  drawsGame(goalsScored, goalsReceived, opponent) {
    this.draws++;
    this.drawsAgainst.push(opponent.name);
    this.points++;
    this.goalsReceived += goalsReceived;
    this.goalsScored += goalsScored;
    this.goalsDifference = this.goalsScored - this.goalsReceived;
  }
};
