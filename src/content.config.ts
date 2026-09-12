import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const doctors = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/doctors" }),
	schema: z.object({
		slug: z.string().min(1),
		name: z.string().min(1),
		speciality: z.string().min(1),
		position: z.string().min(1),
		featured: z.boolean(),
		rating: z.number().min(0).max(5),
		reviews: z.number().int().nonnegative(),
		experienceYears: z.number().int().nonnegative(),
		image: z.string().min(1),
		phone: z.string().min(1),
		email: z.string(),
		languages: z.array(z.string().min(1)),
		workingHours: z.object({
			monday: z.string().min(1),
			tuesday: z.string().min(1),
			wednesday: z.string().min(1),
			thursday: z.string().min(1),
			friday: z.string().min(1),
			saturday: z.string().min(1),
			sunday: z.string().min(1),
		}),
		focusAreas: z.array(
			z.object({
				title: z.string().min(1),
				description: z.string().min(1),
				icon: z.string().min(1),
			}),
		),
		education: z.array(
			z.object({
				degree: z.string().min(1),
				institution: z.string().min(1),
				year: z.string().min(1),
			}),
		),
		certificates: z.array(
			z.object({
				title: z.string().min(1),
				year: z.string().min(1),
			}),
		),
		socials: z.array(
			z.object({
				platform: z.string().min(1),
				url: z.string().url(),
			}),
		),
		seo: z.object({
			title: z.string().min(1),
			description: z.string().min(1),
		}),
	}),
});

export const collections = { doctors };
