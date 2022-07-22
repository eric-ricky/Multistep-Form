import Example from "./components/example";

function App() {
  return (
    <div className="grid place-items-center bg-slate-100 h-screen w-full">
      <div className="container mx-auto md:w-1/2">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-3xl font-bold">Welcome to the platform!</h2>
          <p className="font-semibold">Follow the steps below to get started</p>
        </div>

        <div>
          <Example />
        </div>
      </div>
    </div>
  );
}

export default App;
