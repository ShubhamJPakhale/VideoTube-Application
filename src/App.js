import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
//Redux
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchVideo from "./components/WatchVideo";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={approuter} />
      </div>
    </Provider>
  );
}

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      { path: "/", element: <MainContainer /> },
      { path: "watch", element: <WatchVideo /> },
    ],
  },
]);

export default App;
