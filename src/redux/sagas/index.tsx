import { put, call, all, takeEvery } from "redux-saga/effects";
import { getUsers, getUser, getTransformedUsers } from "../../common/api/helpers";
import {
	setEmployers,
	unSetLoading,
	setErrorData,
	setEmployer,
	setLoading,
} from "../reducer";


function* sagaEmployers() {
	try {
		console.log("run saga");
		//@ts-ignore
		const data = yield call(getUsers);
		console.log("data saga", data);
		yield put(setEmployers(data));
		yield put(unSetLoading());
	} catch {
		yield put(setErrorData("Произошла ошибка загрузки данных"));
		yield put(unSetLoading());
	}
}

function* sagaWatcherEmployers() {
	yield takeEvery("employers/getEmployers", sagaEmployers);
}

function* sagaEmployer(action:any) {
	try {
		yield put(setLoading());
		//@ts-ignore
		const data = yield call(getUser, action.payload);
		console.log('data', data)
		yield put(setEmployer(data));
		yield put(unSetLoading());
	} catch {
		yield put(setErrorData("Произошла ошибка загрузки данных"));
		yield put(unSetLoading());
	}
}

function* sagaWatcherEmployer() {
	yield takeEvery("employers/getEmployer", sagaEmployer);
}

export default function* rootSaga() {
	yield all([sagaWatcherEmployers(), sagaWatcherEmployer()]);
}
