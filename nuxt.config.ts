// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devServer: {
		port: 3090,
	},
	site: {
		url: "https://tutor.chromatone.center",
	},
	app: {
		layoutTransition: { name: "page", mode: "out-in" },
		pageTransition: { name: "page", mode: "out-in" },
	},
	modules: [
		"nuxt-auth-utils",
		"@unocss/nuxt",
		"nuxt-directus",
		"@nuxtjs/sitemap",
		"@nuxtjs/mdc",
		"@nuxt/image",
		"@nuxtjs/color-mode",
		"notivue/nuxt",
		"floating-vue/nuxt",
		"nuxt-cron",
		"nuxt-calendly",
	],
	runtimeConfig: {
		dbManagerKey: "",
		stripeSecretKey: "",
		public: {
			dbDomain: "",
			dbUrl: "",
			umamiId: "",
		},
	},
	notivue: {
		position: "top-right",
	},
	directus: {
		autoRefresh: true,
		devtools: true,
		url: process.env?.NUXT_PUBLIC_DB_URL,
		token: process.env?.NUXT_PUBLIC_ACADEMY_KEY,
	},
	image: {
		provider: "directus",
		format: ["webp"],
		domains: [String(process.env?.NUXT_PUBLIC_DB_DOMAIN)],
		directus: {
			baseURL: `${process.env?.NUXT_PUBLIC_DB_URL}/assets/`,
			modifiers: {
				withoutEnlargement: "true",
			},
		},
	},
	router: {
		//@ts-ignore
		scrollBehavior() {
			return { top: 0 };
		},
	},
	devtools: {
		enabled: false,
		timeline: {
			enabled: true,
		},
	},
	css: [
		"@unocss/reset/tailwind.css",
		"notivue/notifications.css",
		"notivue/animations.css",
	],
});
