export type TargetPlatform = 'google' | 'whatsapp' | 'instagram' | 'tiktok' | 'allinone';

export type ProductMaterial = 'acrylic' | 'wood' | 'matte_black';

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  originalPrice: number;
  promoPrice: number;
  features: string[];
  recommended?: boolean;
  packageContents: string;
}

export interface BusinessCustomization {
  businessName: string;
  industry: string;
  material: ProductMaterial;
  targetPlatform: TargetPlatform;
  accentColor: string;
}

export interface CaseStudy {
  id: string;
  businessName: string;
  category: string;
  location: string;
  metricBefore: string;
  metricAfter: string;
  metricLabel: string;
  quote: string;
  ownerName: string;
  ownerRole: string;
  ratingScore: number;
}
