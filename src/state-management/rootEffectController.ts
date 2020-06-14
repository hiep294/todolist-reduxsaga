import { all } from 'redux-saga/effects';
import todoEffectController from '../Content/TodoAreaExample/state-management/effectController';

export default function* () {
  yield all([todoEffectController()]);
}
