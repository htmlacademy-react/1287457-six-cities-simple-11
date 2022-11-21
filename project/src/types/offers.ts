export type THost = {
  name: string;
  status: string;
  avatar: string;
}

export type TCoords = {
  lat: number;
  lon: number;
}

export type TOffer = {
  id: number;
  isPremium: boolean;
  mainImage: string;
  price: number;
  rating: number;
  name: string;
  type: string;
  bedrooms: number;
  maxAdults: number;
  inside: string[];
  host: THost;
  description: string;
  images: string[];
  coords: TCoords;
  city: string;
}
