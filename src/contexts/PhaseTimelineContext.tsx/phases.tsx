import { PhaseGroup } from "./index";

export const phaseGroups: PhaseGroup[] = [
  {
    title: "Design Phase",
    phases: [
      {
        title: "Ideation & Planning",
        icon: "FileEdit",
        content: {
          steps: [
            "We start by sitting down with your key stakeholders to clearly define the app's objectives, target audience, and core features, ensuring everyone is aligned.",
            "Collaborating across departments, we create a storyboard that visually represents the app's functionality and aligns with the broader business strategy.",
            "We then develop a detailed product backlog, prioritizing features critical to the company's goals.",
            "Next, we outline a clear roadmap that integrates the app's development into your overall digital strategy.",
            "This ensures that the app's vision aligns with your company's long-term objectives, setting a strong foundation for the project.",
          ],
          tools: [
            { name: "Jira", icon: "⚡" },
            { name: "Confluence", icon: "🔄" },
            { name: "Miro", icon: "📋" },
          ],
        },
      },
      {
        title: "Designs, Wireframe & Prototype",
        icon: "PencilRuler",
        content: {
          steps: [
            "We transition from planning to design by developing prototypes based on feedback from various departments, ensuring the app is scalable and user-friendly.",
            "Through iterative design reviews with cross-functional teams, we refine the user experience to meet your company's standards.",
            "Once the design is polished, we secure stakeholder approval, allowing us to move forward confidently.",
            "We then align the final design with your company's branding and UI guidelines to maintain consistency across all platforms.",
            "With everything in place, the design phase concludes with a smooth transition to development, ensuring all design elements are thoroughly documented and ready for implementation.",
          ],
          tools: [
            { name: "Figma", icon: "🎨" },
            { name: "Adobe XD", icon: "🎯" },
            { name: "InVision", icon: "✨" },
          ],
        },
      },
    ],
  },
  {
    title: "Development Phase",
    phases: [
      {
        title: "Development",
        icon: "Code",
        content: {
          steps: [
            "Our development team begins implementing the approved designs using modern technologies.",
            "We follow agile methodologies with regular sprints and stand-ups.",
            "Code reviews and pair programming ensure high-quality code.",
            "Regular updates are provided to stakeholders on progress.",
            "We maintain detailed documentation throughout development.",
          ],
          tools: [
            { name: "VS Code", icon: "💻" },
            { name: "GitHub", icon: "🐙" },
            { name: "Docker", icon: "🐳" },
          ],
        },
      },
      {
        title: "Quality Assurance",
        icon: "ClipboardCheck",
        content: {
          steps: [
            "Comprehensive testing across multiple devices and platforms.",
            "Automated testing implementation for critical features.",
            "Performance optimization and security testing.",
            "User acceptance testing with key stakeholders.",
            "Bug tracking and resolution prioritization.",
          ],
          tools: [
            { name: "Jest", icon: "🃏" },
            { name: "Cypress", icon: "🎯" },
            { name: "SonarQube", icon: "🔍" },
          ],
        },
      },
      {
        title: "Release and Deployment",
        icon: "Rocket",
        content: {
          steps: [
            "Preparation of deployment strategy and rollback plans.",
            "Staging environment testing and verification.",
            "Coordination with operations team for deployment.",
            "Monitoring system performance post-deployment.",
            "Documentation of deployment procedures.",
          ],
          tools: [
            { name: "Jenkins", icon: "🚀" },
            { name: "AWS", icon: "☁️" },
            { name: "Kubernetes", icon: "⚓" },
          ],
        },
      },
    ],
  },
  {
    title: "Maintenance Phase",
    phases: [
      {
        title: "Maintain & Support",
        icon: "ServerCog",
        content: {
          steps: [
            "Regular system monitoring and maintenance.",
            "User support and issue resolution.",
            "Performance optimization and updates.",
            "Security patches and updates.",
            "Regular backups and system health checks.",
          ],
          tools: [
            { name: "Datadog", icon: "📊" },
            { name: "PagerDuty", icon: "🔔" },
            { name: "Zendesk", icon: "💬" },
          ],
        },
      },
    ],
  },
];
