import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';
import persistReducer from './persistReducers';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;
const sagaMiddleWare = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleWare];

const store = createStore(persistReducer(rootReducer), middlewares);
const persistor = persistStore(store);
sagaMiddleWare.run(rootSaga);

export { store, persistor };
