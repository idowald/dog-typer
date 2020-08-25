import actionCreatorFactory, {ActionCreator} from 'typescript-fsa';
const factory = actionCreatorFactory();

const createAction = <T>(type: string): ActionCreator<T> => {
  const actionCreator = factory<T>(type);
  actionCreator.toString = () => type;
  return actionCreator;
};

export const add = createAction<{num: number}>('ADD');
export const addFromSaga = createAction<{num: number}>('ADD_FROM_SAGA');