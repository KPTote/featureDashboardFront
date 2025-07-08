export interface LogList {
  configurationUsed:ConfigData[];
  dateTimeExecution:string;
  executedBy:string;
  featureProfile:string;
  browser: string;
}

export interface ConfigData {
  serviceCode: string;
  name: string;
  enabled: boolean;
  configType: string;
  description: string;
}


export interface AuthResponse {
    email: string;
    firstName: string;
    lastName: string;
    token: string;
    profile?: string;
}
