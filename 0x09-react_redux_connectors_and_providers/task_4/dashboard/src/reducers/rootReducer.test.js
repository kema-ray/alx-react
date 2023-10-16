import {isImmutable, Map} from "immutable";
import { courseReducer } from "./courseReducer";
import { notificationReducer } from "./notificationReducer";
import { uiReducer } from "./uiReducers";
import { combineReducers } from "redux";

test("root reducers initial state contains immutable objects", () => {
  const rootReducer = combineReducers({
    courses: courseReducer,
    notifications: notificationReducer,
    ui: uiReducer
  })

  const state = rootReducer(undefined, {})
  expect(isImmutable(state.ui)).toEqual(true)
  expect(isImmutable(state.courses)).toEqual(true)
  expect(isImmutable(state.notifications)).toEqual(true)
})
