export interface IGiftsResponse {
  id: number;
  name: string;
  description: string;
  manaCost: number;
}

export interface IGiftCreateBody {
  name: string;
  description: string;
  manaCost: number;
}
