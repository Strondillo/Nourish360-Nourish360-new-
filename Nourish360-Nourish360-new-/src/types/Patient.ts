 // src/types/Patient.ts
export interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
  occupation: string;
  diagnosis: string;
  weight: number;
  height: number;
  bmi: number;
  estimated_energy_intake: number;
  biochemical: string;
  physical_activity: string;
  meals: string;
  motivation_importance: number;
  motivation_confidence: number;
  motivation_readiness: number;
  birthday: number; 
  risk: string;           
  visits: number;         
  isNew: boolean;         // Add this line
  profileImage: string;   // Add this line
}