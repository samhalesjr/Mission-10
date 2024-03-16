import { Team } from "./Team";

export type Bowler = {
    bowlerId: number;
    bowlerLastName?: string;
    bowlerFirstName?: string;
    bowlerMiddleInit?: string;
    bowlerAddress?: string;
    bowlerCity?: string;
    bowlerState?: string;
    bowlerZip?: string;
    bowlerPhoneNumber?: string;
    teamId?: number;
    team?: Team; // Assuming you want to include team details for a bowler
  }
  