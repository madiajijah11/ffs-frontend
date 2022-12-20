import {configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'
import reducer from './reducers'

export const store = configureStore({
  reducer,
// <<<<<<< HEAD
  middleware: [thunk]
})
// =======
  // middleware: [thunk],
// });

export const persistor = persistStore(store)
// >>>>>>> 32ed380107aeb6123a8802be9dd1a0892671f8a4
