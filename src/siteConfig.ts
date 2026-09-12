export interface SiteConfig {
	name: string,
	copyright: string,
	address: string,
	phone: string,
	email: string,
	nav: {
		main: Array<{
			url: string;
			text: string;
		}>,
		info: Array<{
			url: string;
			text: string;
		}>,
		support: Array<{
			url: string;
			text: string;
		}>,
		legal: Array<{
			url: string;
			text: string;
		}>
	}
}

const siteConfig: SiteConfig = {
	name: "RaiderCare",
	copyright: "© 2026 RaiderCare. All rights reserved.",
	address: "1200 Medical Plaza, Suite 400, Innovation District, SF 94105",
	phone: "+1 (000) 123-4567",
	email: "mail@example.com",
	nav: {
		main: [
			{ text: "About us", url: "/about" },
			{ text: "Services", url: "/services" },
			{ text: "Doctors", url: "/doctors" },
			{ text: "Contact", url: "/contact" }
		],
		info: [
			{ text: "Services", url: "/services" },
			{ text: "Doctors", url: "/doctors" },
			{ text: "Pricing", url: "/pricing" }
		],
		support: [
			{ text: "About us", url: "/about" },
			{ text: "Contact", url: "/contact" }
		],
		legal: [
			{ text: "Privacy Policy", url: "/privacy" },
			{ text: "Terms of Service", url: "/terms" },
			{ text: "Cookies Policy", url: "/cookies" },
		]
	},
}

export default siteConfig;
