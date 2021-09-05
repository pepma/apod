export interface ApodDTO {
  copyright?: string;
  date?: string;
  explanation?: string;
  hdurl?: string;
  media_type?: string;
  service_version?: string;
  title?: string;
  url?: string;
}
export enum ApodTypeEnum {
  USER = "user",
  NASA = "nasa",
}
export interface Apod {
  date?: string;
  explanation?: string;
  mediaType?: string;
  title?: string;
  url?: string;
  type?: ApodTypeEnum;
}

export interface PlanetaryConfig {
  urlApod?: string;
  apiKey?: string;
}


