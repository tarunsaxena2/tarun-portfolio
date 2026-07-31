export default function About() {
  return (
    <section id="about" className="max-w-3xl mx-auto px-6 py-24">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-8">
        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">About Me</span>
      </h2>
      <div className="bg-card border border-border rounded-2xl p-8 shadow-xl shadow-black/20">
        <p className="text-body text-lg leading-relaxed mb-4">
          I'm a Computer Science undergraduate at Hindustan College of Science and Technology, Mathura,
          with hands-on experience in both front-end and backend development using HTML, CSS,
          JavaScript, Node.js, and Express.js.
        </p>
        <p className="text-body text-lg leading-relaxed">
          Alongside web development, I also work on Data Science and Machine Learning projects — from
          data preprocessing and EDA to building predictive models. I enjoy solving real-world problems,
          having contributed to systems used by railway departments, with a strong focus on practical,
          impactful engineering.
        </p>
      </div>
    </section>
  );
}
