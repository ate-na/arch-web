type ProjectPhase = {
  title: string;
  points: string[];
};

export type ProjectDescription = {
  title: string;
  subtitle: string;
  location: string;
  area?: string;
  floors?: number;
  style: string;
  description: string[];
  phases: ProjectPhase[];
  features: string[];
};

export type Project = {
  en_name: string;
  fa_name: string;
  id: number;
  src: string;
  en_description: ProjectDescription;
  fa_description: ProjectDescription;
  name: string;
  galleries: string[];
};

// export type description = {};
