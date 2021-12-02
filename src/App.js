import DynamicForm from "./components/DynamicForm";

import data from "./data/data.json";

export default function App() {
  return (
    <>
      <DynamicForm data={data} />
    </>
  );
}
