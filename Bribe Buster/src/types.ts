export type Department = 
| 'Traffic Police' 
| 'Electricity Department'
| 'Water & Sanitation'
| 'Tax Office' 
| 'Land Registry'
| 'Other';

export interface Location {
  lat: number;
  lng: number;
}

export interface BribeReport {
  department: Department;
  amount: number;
  location: Location | null; // Made optional
  submitted: boolean;
  reportId?: string;
  timestamp?: Date | string; // Flexible date type
}

export interface BribeFormProps {
  onSuccess?: (report: BribeReport) => void;
}
