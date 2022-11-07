import emoji from "react-easy-emoji";

export const greetings = {
	name: "Nqobile Magwaza",
	title: "Hi all, I'm Nqobile",
	description:
		"I am a software development student at WeThinkCode. WeThinkCode is about training young unemployed youth to and have gained a great deal of experience in the field. I am motivated and enthusiastic about learning new things, and I am confident that I have the potential to be an excellent software developer. I would love to be a software developer at SovTech, because it is a big company that provides complete software design and development service, so being part of the team that delivers the best in class costum software solutions will complete me. ",
	resumeLink:
		"https://docs.google.com/document/d/1tc-GfETI79VdUGImz_y6L0Vfa3nTWLXULIpCXthXDLo/edit",
};

export const openSource = {
	githubUserName: "nqobilemagwaza6", 
};

export const contact = {};

export const socialLinks = {
	linkedin: "https://www.linkedin.com/in/nqobile-magwaza/",
	github: "https://github.com/nqobilemagwaza6/",
	instagram: "https://www.instagram.com/nqobilemacstabber/",
	facebook: "https://www.facebook.com/nqobile.magwaza.587/",

};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) "
				),
				emoji("⚡ Building responsive static websites using Next.js"),
				],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "java",
					fontAwesomeClassname: "logos:java",
				},

				{
					skillName: "Thymeleaf",
					fontAwesomeClassname: "logos:thymeleaf-icon",
				},
				{
					skillName: "Flutter",
					fontAwesomeClassname: "logos:flutter",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "handlebars",
					fontAwesomeClassname: "logos:handlebars",
				},
			],
		},
		{
			title: "Cloud Infra-Architecture",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on multiple cloud platforms"),
				emoji(
					"⚡ Using Docker to build,share and run applications"
				),
				emoji(
					"⚡ Building CI/CD pipelines for automated testing"
				),
			],
			softwareSkills: [
				// ? Check README To get icon details
				{
					skillName: "MySQL",
					fontAwesomeClassname: "logos:mysql",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
				
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "70",
	},
];


export const educationInfo = [

	{
		schoolName: "Isandlwana High School",
		subHeader: "Matric",
	
		
	},
	{
		schoolName: "WeThinkCode",
		subHeader: "Software Engineering",
		duration: "September 2021 - December 2022",
		
	},
	{
		schoolName: "MegaTraining",
		subHeader: "Certificate in Network Support Specialist",
		duration: "February 2016- November 2016",
		
	},
	{
		schoolName: "RichField",
		subHeader: "Diploma in Information Technology",
		duration: "February 2019 - December 2021",
		
	},
	
];


export const experience = [

	{
		role: "Volunteering",
		company: "MegaTraining",
		companylogo: "/img/icons/common/MegaT.jpeg",
		date: "February 2017 – November 2017",
		desc: "It was an intern job for a year after studying for the certificate and also helping with admin work.",
	},
];


// See object prototype on SEO.jsx page
export const seoData = {
	title: "Nqobile Magwaza",
	description:
		"A passionate Full Stack Web Developer.",
	author: "Nqobile Magwaza",
	keywords: [
		"Nqobile",
		"Nqobile Magwaza",
		"Nqobile Magwaza Portfolio",
	],
}
