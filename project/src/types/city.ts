export type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type TCity = { 
  location: TLocation;
  name: string;
}
