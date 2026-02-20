import { z } from 'zod';

export const CareerItemSchema = z.object({
    id: z.number(),
    year: z.string(),
    title: z.string(),
    company: z.string(), // or institution
    description: z.string(),
    icon: z.string(), // FontAwesome class
    type: z.enum(['experience', 'education', 'link']),
    link: z.string().optional(),
});

export type CareerItem = z.infer<typeof CareerItemSchema>;

export const ProjectItemSchema = z.object({
    id: z.number(),
    title: z.string(),
    category: z.string(),
    description: z.string(),
    image: z.string(),
    technologies: z.array(z.string()),
    // Detailed fields
    duration: z.string().optional(),
    role: z.string().optional(),
    features: z.array(z.string()).optional(),
    challenges: z.string().optional(),
    results: z.string().optional(),
    categoryColor: z.string().optional(),
});

export type ProjectItem = z.infer<typeof ProjectItemSchema>;

export const TestimonialSchema = z.object({
    id: z.number(),
    name: z.string(),
    role: z.string(),
    content: z.string(),
    rating: z.number().min(1).max(5),
    image: z.string().optional(),
});

export type Testimonial = z.infer<typeof TestimonialSchema>;
