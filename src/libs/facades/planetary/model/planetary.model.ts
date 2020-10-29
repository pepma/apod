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

export interface PlanetaryConfig {
  urlApod?: string;
  apiKey?: string;
  daysToShow: number;
}
