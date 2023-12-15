import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./router/mainRouter";
import { Provider } from "react-redux";
import { store } from "./global/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";

const App = () => {
  let persistor = persistStore(store);
  return (
    <div>
      <PersistGate persistor={persistor} loading={null}>
        <Provider store={store}>
          <RouterProvider router={mainRouter} />
        </Provider>
      </PersistGate>
    </div>
  );
};

export default App;
