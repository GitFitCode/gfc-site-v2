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
            {
              name: "Jira",
              images: "/images/jira.png",
              link: "https://www.atlassian.com/software/jira",
            },
            {
              name: "Confluence",
              images: "/images/confluence.png",
              link: "https://www.atlassian.com/software/confluence",
            },
            {
              name: "Miro",
              images: "/images/miro.png",
              link: "https://miro.com",
            },
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
            {
              name: "Figma",
              images: "/images/figma.png",
              link: "https://www.figma.com",
            },
            {
              name: "Adobe XD",
              images: "/images/adobe.png",
              link: "https://adobe.com",
            },
            {
              name: "InVision",
              images: "/images/invision.png",
              link: "https://www.invisionapp.com",
            },
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
            "We kick off development by breaking the project into sprints, focusing on building scalable, integrated features.",
            "To maintain momentum and quality, we use continuous integration and conduct daily stand-ups to address progress and challenges.",
            "Each sprint delivers fully functional components that are ready for integration with your company’s existing systems.",
            "As the app takes shape, we lay the groundwork for the next phase with each completed sprint.",
            "This phase culminates in the preparation for rigorous testing, ensuring all development outputs meet the highest standards.",
          ],
          tools: [
            {
              name: "VS Code",
              images: "/images/vscode.png",
              link: "https://www.atlassian.com/software/jira",
            },
            {
              name: "GitHub",
              images: "/images/github.png",
              link: "https://github.com/",
            },
            {
              name: "Docker",
              images: "/images/docker.png",
              link: "https://www.docker.com/",
            },
          ],
        },
      },
      {
        title: "Quality Assurance",
        icon: "ClipboardCheck",
        content: {
          steps: [
            "As development progresses, we run parallel quality assurance testing to ensure each feature meets your company’s high standards.",
            "By employing both automated and manual testing, we catch defects early and prevent issues from escalating.",
            "We also conduct regression testing to ensure that new features don’t disrupt existing functionality, preserving the app’s integrity.",
            "Collaboration with relevant teams allows us to validate that the app meets all business and technical requirements.",
            "Finally, we fine-tune the app through rigorous testing, making it ready for release and deployment.",
          ],
          tools: [
            {
              name: "Jest",
              images: "/images/jest.png",
              link: "https://jestjs.io/docs/tutorial-react",
            },
            {
              name: "Cypress",
              images: "/images/cypress.jpg",
              link: "https://www.cypress.io",
            },
            {
              name: "SonarQube",
              images: "/images/sonarqube.png",
              link: "https://www.sonarsource.com/products/sonarqube",
            },
          ],
        },
      },
      {
        title: "Release and Deployment",
        icon: "Rocket",
        content: {
          steps: [
            "Final beta testing is conducted within selected user groups to gather crucial feedback and make any last-minute adjustments.",
            "We then coordinate closely with IT and operations teams to ensure a smooth app store submission and internal deployment, minimizing potential issues.",
            "A well-planned launch strategy is executed to ensure all departments and users are prepared for the app’s rollout.",
            "Once the app is live, we monitor its performance closely, ready to respond to any post-launch issues that may arise.",
            "The phase ends with a seamless transition into ongoing support, ensuring the app remains effective and user-friendly post-launch.",
          ],
          tools: [
            {
              name: "Jenkins",
              images: "/images/jenkins.svg",
              link: "https://www.jenkins.io",
            },
            {
              name: "AWS",
              images: "/images/aws.webp",
              link: "https://aws.amazon.com",
            },
            {
              name: "Kubernetes",
              images: "/images/Kubernetes.svg",
              link: "https://kubernetes.io",
            },
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
            "Continuous monitoring of the app’s performance allows us to address any issues swiftly, ensuring a positive user experience.",
            "Regular updates are released, driven by user feedback and evolving business needs, keeping the app relevant and effective.",
            "A structured process for ongoing maintenance ensures that bug fixes, enhancements, and updates are handled efficiently.",
            "We align these updates with your company’s strategic goals, ensuring the app evolves in harmony with broader business objectives.",
            "This phase ensures that the app stays in a state of continuous improvement, remaining a valuable tool as your company grows and changes.",
          ],
          tools: [
            {
              name: "Datadog",
              images: "/images/datadog.svg",
              link: "https://www.datadoghq.com",
            },
            {
              name: "PagerDuty",
              images: "/images/pagerduty.png",
              link: "https://www.pagerduty.com",
            },
            {
              name: "Zendesk",
              images: "/images/zendesk.png",
              link: "https://www.zendesk.com",
            },
          ],
        },
      },
    ],
  },
];
