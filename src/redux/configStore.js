<<<<<<< HEAD
import { createStore, applyMiddleware } from "redux";
//import logger from 'redux-logger'
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

//export default createStore(rootReducer, applyMiddleware(thunk, logger));
export default createStore(rootReducer, applyMiddleware(thunk));
=======
import { createStore, applyMiddleware } from "redux";
//import logger from 'redux-logger'
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

//export default createStore(rootReducer, applyMiddleware(thunk, logger));
export default createStore(rootReducer, applyMiddleware(thunk));
>>>>>>> 82b70a80e8268a6b4109ead15b0113108f60d1fa
