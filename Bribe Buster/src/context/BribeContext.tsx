  import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
  import { BribeReport } from '../types';

  type BribeContextType = {
    reports: BribeReport[];
    validReports: BribeReport[];  
    addReport: (report: BribeReport) => void;
    refreshReports: () => void;
  };

  const BribeContext = createContext<BribeContextType | undefined>(undefined);

  export function BribeProvider({ children }: { children: ReactNode }) {
    const [reports, setReports] = useState<BribeReport[]>([]);
    const [validReports, setValidReports] = useState<BribeReport[]>([]); 

    const validateReports = (reports: BribeReport[]) => {
      return reports.filter(report => 
        report.location &&
        typeof report.location.lat === 'number' &&
        typeof report.location.lng === 'number'
      );
    };

    const refreshReports = () => {
      try {
        const storedReports = JSON.parse(localStorage.getItem('bribeReports') || '[]');
        setReports(storedReports);
        setValidReports(validateReports(storedReports));
      } catch (error) {
        console.error('Failed to load reports:', error);
        setReports([]);
        setValidReports([]);
      }
    };

    const addReport = (report: BribeReport) => {
      try {
        const storedReports = JSON.parse(localStorage.getItem('bribeReports') || '[]');
      
        const updatedReports = [...storedReports, report];
        
        localStorage.setItem('bribeReports', JSON.stringify(updatedReports));
        
        setReports(updatedReports);
        setValidReports(validateReports(updatedReports));
        
        return true; 
      } catch (error) {
        console.error('Failed to add report:', error);
        return false; 
      }
    };

    useEffect(() => {
      refreshReports();
    }, []);

    return (
      <BribeContext.Provider value={{ reports, validReports, addReport, refreshReports }}>
        {children}
      </BribeContext.Provider>
    );
  }

  export function useBribeContext() {
    const context = useContext(BribeContext);
    if (context === undefined) {
      throw new Error('useBribeContext must be used within a BribeProvider');
    }
    return context;
  }