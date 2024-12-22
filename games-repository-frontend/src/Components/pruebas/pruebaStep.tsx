import Step from "../molecules/steps";

import { StepItem } from "../molecules/steps/steps.type";

const steps: StepItem[] = [
  { status: "finished", description: "Step 1" },
  { status: "process", description: "Step 2" },
  { status: "error", description: "Step 3" },
  { status: "waiting", description: "Step 4" },
];

const App = () => {
  return (
    <div>
      <h1>Horizontal Step</h1>
      <Step steps={steps} direction="horizontal" />

      <h1>Vertical Step</h1>
      <Step steps={steps} direction="vertical" />
    </div>
  );
};

export default App;
