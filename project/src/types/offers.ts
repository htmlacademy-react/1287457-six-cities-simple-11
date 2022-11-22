export type THost = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

export type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type TOffer = {
  bedrooms: number;
  city: {
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
    name: string;
  };
  description: string;
  goods: [string];
  host: THost;
  id: number;
  images: [string];
  isPremium: boolean;
  location: TLocation;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}
