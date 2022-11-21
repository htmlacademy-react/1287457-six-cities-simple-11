export type TUser = {
  name: string;
  avatar: string;
}

export type TReview = {
  id: number;
  offerId: number;
  comment: string;
  date: string;
  rating: number;
  user: TUser;
}
