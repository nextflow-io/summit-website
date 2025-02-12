import parentheses from "./icon-parentheses.svg";
import computer from "./icon-computer.svg";
import news from "./icon-news.svg";

export default {
  boston: [
    {
      title: "Training | May 21-22",
      subtitle: "2 days · 30 people · training",
      icon: parentheses,
      link: "/2025/boston/agenda#05-21",
      description:
        "An in-person foundational training to supercharge your pipeline development with Nextflow and nf-core. Running in parallel to the hackathon.",
    },
    {
      title: "Hackathon | May 21-22",
      subtitle: "2 days · 100 people · hackathon",
      icon: computer,
      link: "/2025/boston/agenda#05-22",
      description:
        "An in-person hackathon to develop nf-core. Running in parallel to the training.",
    },
    {
      title: "Summit | May 23-24",
      subtitle: "1.5 days · 200 people · talks, networking, and more",
      icon: news,
      link: "/2025/boston/agenda#05-23",
      description:
        "A showcase of the latest developments and innovations from the Nextflow world.",
    },
  ],
  barcelona: [
    {
      title: "Training | Oct 28 - 30",
      subtitle: "2.5 days · 60 people · training",
      icon: parentheses,
      link: "/2025/barcelona/training",
      description:
        "An in-person foundational training for those who are completely new to Nextflow and nf-core. Running in parallel to the hackathon. You'll gain practical skills to start using these powerful tools and resources and will receive a certificate upon completion.",
    },
    {
      title: "Hackathon | Oct 28 - 30",
      subtitle: "2.5 days · 180 people · hackathon",
      icon: computer,
      icon_extra: "nf-core",
      link: "/2025/barcelona/hackathon",
      description:
        "An in-person nf-core hackathon open to anyone with some Nextflow knowledge. You'll work on specific tasks in groups, collaborating on developing nf-core, and gain hands-on experience contributing to real projects. Running in parallel to the training.",
    },
    {
      title: "Summit | Oct 30 - Nov 1",
      subtitle: "2.5 days · 250 people · talks, networking, and more",
      icon: news,
      link: "/2025/barcelona/agenda#10-30",
      description:
        "A showcase of the latest developments and innovations from the Nextflow world. You'll gain insights into cutting-edge advancements, best practices, and future trends directly from industry leaders and experts.",
    },
  ],
};
