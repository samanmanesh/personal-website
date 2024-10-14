import { projectData } from '../data/projectData';


export function getProjectData(slug: string) {
  return projectData[slug as keyof typeof projectData] || null;
}