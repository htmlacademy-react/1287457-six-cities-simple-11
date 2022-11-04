export type HostType = {
  name: string;
  status: string;
  avatar: string;
}

export type OfferType = {
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
  host: HostType;
  description: string;
  images: string[];
}
