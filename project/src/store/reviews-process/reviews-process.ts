import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {loadReviews, addReview} from '../api-action';
import {ReviewsProcess} from '../../types/reviews-process';

const initialState: ReviewsProcess = {
  reviews: [],
};

export const reviewsProcess = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.reviews = action.payload;
      });
  }
});
