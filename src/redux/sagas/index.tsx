import { put, call, all, takeEvery } from "redux-saga/effects";
import { getUsers, getUser } from "common/api/helpers";
import {
	setEmployers,
	unSetLoading,
	setErrorData,
	setEmployer,
	setLoading,
	getEmployer,
	getEmployers,
} from "../reducer";
import { IDataEmployer, IPayloadTypes } from "types";

function* sagaEmployers() {
	try {
		const data:IDataEmployer[] = yield call(getUsers);
		yield put(setEmployers(data));
		yield put(unSetLoading());
	} catch {
		yield put(setErrorData("Произошла ошибка загрузки данных"));
		yield put(unSetLoading());
	}
}

function* sagaWatcherEmployers() {
	yield takeEvery(getEmployers, sagaEmployers);
}

function* sagaEmployer( action: IPayloadTypes ) {
	try {
		yield put(setLoading());
		const data:IDataEmployer = yield call(getUser, action.payload);
		yield put(setEmployer(data));
		yield put(unSetLoading());
	} catch {
		yield put(setErrorData("Произошла ошибка загрузки данных"));
		yield put(unSetLoading());
	}
}

function* sagaWatcherEmployer() {
	yield takeEvery(getEmployer, sagaEmployer);
}

export default function* rootSaga() {
	yield all([sagaWatcherEmployers(), sagaWatcherEmployer()]);
}
