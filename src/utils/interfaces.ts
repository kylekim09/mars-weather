export interface marsMetrics{
  "av": number,
  "ct": number, 
  "mn": number, 
  "mx": number
}
export interface MarsData {
  First_UTC: string,
  Last_UTC: string,
  Norther_season: string,
  PRE: marsMetrics,
  WD: Record<string, unknown>,
  sol:number,
}

export interface MarsDataList {
  marsDataList: MarsData[]
}

