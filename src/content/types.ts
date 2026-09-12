export interface DoctorWorkingHours {
	monday: string;
	tuesday: string;
	wednesday: string;
	thursday: string;
	friday: string;
	saturday: string;
	sunday: string;
}

export interface DoctorFocusArea {
	title: string;
	description: string;
	icon: string;
}

export interface DoctorEducationItem {
	degree: string;
	institution: string;
	year: string;
}

export interface DoctorCertificateItem {
	title: string;
	year: string;
}

export interface DoctorSocial {
	platform: string;
	url: string;
}

export interface DoctorSeo {
	title: string;
	description: string;
}

export interface DoctorContent {
	slug: string;
	name: string;
	speciality: string;
	position: string;
	featured: boolean;
	rating: number;
	reviews: number;
	experienceYears: number;
	image: string;
	phone: string;
	email: string;
	languages: string[];
	workingHours: DoctorWorkingHours;
	focusAreas: DoctorFocusArea[];
	education: DoctorEducationItem[];
	certificates: DoctorCertificateItem[];
	socials: DoctorSocial[];
	seo: DoctorSeo;
}
