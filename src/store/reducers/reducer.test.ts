import { changeDogReducer, initialState } from "./reducer";

test("check that reducer is doing a bit saga logic", () => {
  const newState = changeDogReducer(initialState.dog, { url: "test" });
  expect(newState.loadingBreed).toEqual(true);
});
