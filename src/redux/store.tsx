import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { employersReducer } from "./reducer";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: {
		employers: employersReducer,
	},
	middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
