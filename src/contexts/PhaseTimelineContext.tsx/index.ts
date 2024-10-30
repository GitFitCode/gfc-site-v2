export interface Phase {
  title: string;
  icon: string;
  content: {
    steps: string[];
    tools: Tool[];
  };
}

export interface Tool {
  name: string;
  icon: string;
}

export interface PhaseGroup {
  title: string;
  phases: Phase[];
}
