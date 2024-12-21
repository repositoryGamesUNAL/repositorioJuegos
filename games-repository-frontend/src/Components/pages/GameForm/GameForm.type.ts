export interface FormData {
    name: string;
    description: string;
    materials: string[];
    gender: string;
    time: string;
    level: string;
    winnerCriteria: string;
    fundamentalConcepts: string[];
    instructionalObjectives: string[];
    rules: string[];
    purposes: string[];
    teams: {
      min: number;
      max: number;
    };
  }