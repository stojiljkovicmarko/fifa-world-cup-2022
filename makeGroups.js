import NationalTeam from "./NationalTeam.js";

/* CREATE NATIONAL TEAMS */

const qatar = new NationalTeam("Qatar", 51, "A");
const ecuador = new NationalTeam("Ecuador", 46, "A");
const senegal = new NationalTeam("Senegal", 20, "A");
const netherlands = new NationalTeam("Netherlands", 10, "A");

const england = new NationalTeam("England", 5, "B");
const iran = new NationalTeam("Iran", 21, "B");
const usa = new NationalTeam("USA", 15, "B");
const ukraine = new NationalTeam("Ukraine", 27, "B");

const argentina = new NationalTeam("Argentina", 4, "C");
const saudiArabia = new NationalTeam("Saudi Arabia", 49, "C");
const mexico = new NationalTeam("Mexico", 9, "C");
const poland = new NationalTeam("Poland", 26, "C");

const france = new NationalTeam("France", 3, "D");
const peru = new NationalTeam("Peru", 22, "D");
const denmark = new NationalTeam("Denmark", 11, "D");
const tunisia = new NationalTeam("Tunisia", 35, "D");

const spain = new NationalTeam("Spain", 7, "E");
const newZeland = new NationalTeam("New Zeland", 101, "E");
const germany = new NationalTeam("Germany", 12, "E");
const japan = new NationalTeam("Japan", 23, "E");

const belgium = new NationalTeam("Belgium", 2, "F");
const canada = new NationalTeam("Canada", 38, "F");
const morocco = new NationalTeam("Morocco", 24, "F");
const croatia = new NationalTeam("Croatia", 16, "F");

const brazil = new NationalTeam("Brazil", 1, "G");
const serbia = new NationalTeam("Serbia", 25, "G");
const switzerland = new NationalTeam("Switzerland", 14, "G");
const cameroon = new NationalTeam("Cameroon", 37, "G");

const portugal = new NationalTeam("Portugal", 8, "H");
const ghana = new NationalTeam("Ghana", 60, "H");
const uruguay = new NationalTeam("Uruguay", 13, "H");
const southKorea = new NationalTeam("South Korea", 29, "H");

/* CREATE GROUPS */

const groupA = new Array(qatar, ecuador, senegal, netherlands);
const groupB = new Array(england, iran, usa, ukraine);
const groupC = new Array(argentina, saudiArabia, mexico, poland);
const groupD = new Array(france, peru, denmark, tunisia);
const groupE = new Array(spain, newZeland, germany, japan);
const groupF = new Array(belgium, canada, morocco, croatia);
const groupG = new Array(brazil, serbia, switzerland, cameroon);
const groupH = new Array(portugal, ghana, uruguay, southKorea);

const allTeams = groupA.concat(
  groupB,
  groupC,
  groupD,
  groupE,
  groupF,
  groupG,
  groupH
);

const arrayOfGroups = [
  groupA,
  groupB,
  groupC,
  groupD,
  groupE,
  groupF,
  groupG,
  groupH,
];

export { allTeams, arrayOfGroups };
