export const images = import.meta.glob("../assets/**/*", {
	eager: true,
	import: "default",
}) as Record<string, ImageMetadata>;
