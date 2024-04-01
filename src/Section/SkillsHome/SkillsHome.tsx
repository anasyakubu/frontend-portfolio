import "./SkillsHome.scss";
const SkillsHome = () => {
  return (
    <div className="SkillsHome bg-white text-black">
      <div className="p-10 py-16">
        <div className="p-3 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          {/* Design */}
          {/* text */}
          <div className="p-10 py-10 my-10">
            <h1
              className="text-xl font-extrabold text-black header"
              style={{ fontSize: "4rem" }}
            >
              Design
            </h1>
            <p className="mt-10 text-black text-sm">
              I'm probably not the typical designer positioned behind an
              Illustrator art-board adjusting pixels, but I design. Immersed in
              stylesheets tweaking font sizes and contemplating layouts is where
              you'll find me (~_^). I'm committed to creating fluent user
              experiences while staying fashionable.
            </p>
          </div>
          <div className="designImg"></div>
          {/* Engineer */}
          <div className="engineerImg"></div>
          {/* text */}
          <div className="p-10 py-10 my-10">
            <h1
              className="text-xl font-extrabold text-black header"
              style={{ fontSize: "4rem" }}
            >
              Engineering
            </h1>
            <p className="mt-10 text-black text-sm">
              In building JavaScript applications, I'm equipped with just the
              right tools, and can absolutely function independently of them to
              deliver fast, resilient solutions optimized for scale —
              performance and scalability are priorities on my radar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsHome;
