import { useState } from "react";
import Example from "./components/example";
import Form from "./components/form";

function App() {
  const [showForm, setshowForm] = useState(false);
  return (
    <div className="grid place-items-center bg-slate-100 min-h-screen w-full">
      <div className="container mx-auto md:w-1/2">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-3xl font-bold">Welcome to the platform!</h2>
          <p className="font-semibold">Follow the steps below to get started</p>
        </div>

        <Form />

        <div className="flex flex-col mt-4">
          <button
            onClick={() => setshowForm((prev) => !prev)}
            className="mx-auto my-10 py-2 px-6 bg-teal-600 font-bold text-white rounded-md"
          >
            Toggle Form
          </button>

          {showForm && (
            <div>
              <Example />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
