// Mocking Model data
export type EbridgeType = {
  id: string | number;
  name: string;
  age: number;
  species: string;
  team: string;
  teamMate: number[];
};

// fix data
export const EbridgeMember: EbridgeType[] = [
  {
    id: "eb1",
    name: "Max Kim",
    age: 27,
    species: "Django",
    team: "Backend",
    teamMate: [1],
  },
  {
    id: "eb2",
    name: "David Im",
    age: 27,
    species: "Django",
    team: "Backend",
    teamMate: [1],
  },
  {
    id: "eb3",
    name: "chanwoo Kim",
    age: 26,
    species: "Django",
    team: "CloudSystem",
    teamMate: [1, 2],
  },
  {
    id: "eb4",
    name: "younhee Song",
    age: 24,
    species: "Vue.js",
    team: "Frontend",
    teamMate: [5],
  },
  {
    id: "eb5",
    name: "hansol Lee",
    age: 26,
    species: "React",
    team: "Frontend",
    teamMate: [4],
  },
];
