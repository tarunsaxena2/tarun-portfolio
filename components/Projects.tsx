import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Railway IT Asset Management System",
    description:
      "A centralized platform to manage, distribute, and track IT assets across railway departments — with QR code generation, scanning, and digital certificates.",
    tech: ["Next.js", "React.js", "MySQL"],
    link: "#",
  },
  {
    title: "AMC Complaint Management System",
    description:
      "A web application to streamline maintenance complaint workflows — from registration to technician assignment to resolution.",
    tech: ["HTML5", "CSS3", "Node.js", "Express.js", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Predictive Maintenance (IoT Edge AI)",
    description:
      "A machine learning-based system combining IoT sensor data with contextual information to predict equipment failures before they happen.",
    tech: ["Python", "Flask", "TensorFlow Lite", "ESP32", "MQTT"],
    link: "#",
  },
  {
    title: "AI Chatbot",
    description:
      "An AI-powered chatbot using the OpenAI API to deliver real-time, human-like conversational responses.",
    tech: ["Python", "OpenAI API"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-foreground mb-10">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
