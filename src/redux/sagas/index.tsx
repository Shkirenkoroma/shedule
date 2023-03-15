import { put, call, all, takeEvery} from "redux-saga/effects";
import { getUsers } from "../../common/api/helpers";
import { setEmployers, unSetLoading, setErrorData} from "../reducer";

function* sagaEmployers() {

   try {
      //@ts-ignore
      const data = yield call(getUsers);
      yield put(setEmployers(data));
      yield put(unSetLoading());
   } catch {
      yield put(setErrorData("Произошла ошибка загрузки данных"))
      yield put(unSetLoading());
   }
}


function* sagaGetEmployers(){
   yield takeEvery("employers/getEmployers", sagaEmployers)
}

export default function* rootSaga(){
   yield all([])
}