 export interface Profile{
      id: number;
      username: string;
      avatarUrl: string|null ;
      description: string;
      subscribersAmount: number;
      firstName:string;
      lastName: string;
      isActive: boolean;
      stack: string[] ;
      city: string
    }
    export const FIX = true;
    
