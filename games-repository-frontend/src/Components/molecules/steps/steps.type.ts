export type StepItem = {
    status: "finished" | "process" | "error" | "waiting";
    description: string;
  };
  
  export type StepProps = {
    steps: StepItem[];
    direction: "horizontal" | "vertical";
    
  };
  