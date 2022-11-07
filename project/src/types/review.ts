export type UserType = {
  name: string;
  avatar: string;
}

export type ReviewType = {
  id: number;
  offerId: number;
  comment: string;
  date: string;
  rating: number;
  user: UserType;
}
