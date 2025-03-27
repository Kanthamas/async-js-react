import App01Sync from "./asynchronous-js/App01Sync.jsx";
import App02ACallback from "./asynchronous-js/App02ACallback.jsx";
import App02Callback from "./asynchronous-js/App02Callback.jsx";
import App02CallbackWithClearTimeOut from "./asynchronous-js/App02CallbackWithClearTimeOut.jsx";
import App03Promise from "./asynchronous-js/App03Promise.jsx";
import App04AsyncAwait from "./asynchronous-js/App04AsyncAwait.jsx";
import App05AsyncAwait from "./asynchronous-js/App05AsyncAwait.jsx";
import App07AsyncAwaitFetchData from "./asynchronous-js/App07AsyncAwaitFetchData.jsx";
import App08ReqResFetchData from "./asynchronous-js/App08ReqResFetchData.jsx";
import App05AsyncAwaitWithClearTimeOut from "./asynchronous-js/App05AsyncAwaitWithClearTimeOut";

const App = () => {
	return (
		<div className="grid place-items-center min-h-screen bg-amber-200 font-inter">
			{/* <App01Sync /> */}
			{/* <App02ACallback /> */}
			{/* <App02Callback /> */}
			{/* <App02CallbackWithClearTimeOut /> */}

			{/* <App03Promise /> */}
			{/* <App04AsyncAwait /> */}
			{/* <App05AsyncAwait /> */}
			<App05AsyncAwaitWithClearTimeOut />

			{/* <App07AsyncAwaitFetchData /> */}

			{/* <App08ReqResFetchData /> */}
		</div>
	);
};

export default App;
