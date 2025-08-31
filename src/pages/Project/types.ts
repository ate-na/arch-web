export type ProjectDescription = {
  id: number;
  project: Project;
  lang: string;
  title: string;
  subtitle: string;
  location: string;
  style: string;
  floor: number;
  metrz: number;
  description: string[];
};

export type ProjectFeature = {
  id: number;
  lang: string;
  values: string[];
  project: Project;
};

export type ProjectGallery = {
  id: number;
  project: Project;
  imageUrl: string;
  priority: number;
};

export type ProjectPhase = {
  id: number;
  project: Project;
  priority: number;
  lang?: string;
  title: string;
  points: string[];
};

export type Project = {
  id: number;
  mainTitle: string;
  mainTitleFa: string;

  src: string; // main image

  priority: number; // ordering for projects

  descriptions?: ProjectDescription[];

  galleries?: ProjectGallery[];

  phases?: ProjectPhase[];

  features: ProjectFeature[];
};
