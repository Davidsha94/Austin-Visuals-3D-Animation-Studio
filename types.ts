export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProjectBrief {
  summary: string;
  recommendedStyle: string;
  estimatedTimeline: string;
  technicalRequirements: string[];
  budgetTier: string;
}

export enum AnimationStyle {
  REALISTIC = 'Photorealistic 3D',
  MOTION_GRAPHICS = '3D Motion Graphics',
  TECHNICAL = 'Technical/CAD Visualization',
  CHARACTER = 'Character Animation',
  UNSURE = 'Recommendation Needed'
}