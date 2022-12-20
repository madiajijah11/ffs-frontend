import {configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'
import reducer from './reducers'

export const store = configureStore({
  reducer,
<<<<<<< HEAD
// <<<<<<< HEAD
  middleware: [thunk]
})
// =======
  // middleware: [thunk],
// });

export const persistor = persistStore(store)
// >>>>>>> 32ed380107aeb6123a8802be9dd1a0892671f8a4
=======
  middleware: [thunk],
});

export const persistor = persistStore(store)
>>>>>>> 24a2b0c4c2748def2feebbcf43934e44c006a8f0
