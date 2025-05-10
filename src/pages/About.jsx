function About() {
  return (
    <div className="w-screen max-w-7xl flex flex-col items-center gap-5 bg-slate-800 mx-auto px-5 md:px-20">
      <div className="w-full h-full flex flex-col gap-5 text-slate-400 py-10 md:text-xl">
        <div className="flex flex-col gap-10">
          <h1 className="text-2xl md:text-4xl font-semibold text-slate-300">
            About Respiro
          </h1>
          <div className="flex flex-col gap-3">
            <p className="text-base md:text-xl">
              In today's fast-paced world, we often forget one crucial aspect of
              success—our well-being. At Respiro, we believe that productivity
              and health go hand in hand. That's why we've created a tool that
              helps you not only manage your time but also prioritize your
              health through mindful breaks.
            </p>
            <p>
              Respiro, inspired by the Latin word for "breath," is more than
              just a time management app. It's your companion in building
              healthier work habits. Whether you're using renowned techniques
              like Pomodoro or creating your own rhythm with custom timers,
              Respiro is here to help you stay balanced, focused, and energized.
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-2xl md:text-4xl font-semibold text-slate-300">
            Contribute to Respiro
          </h1>
          <p>
            I believe in the power of collaboration. Respiro is an open-source
            project, and I'd love for you to contribute!
          </p>
          <p>
            **GitHub Repository**: [Respiro on
            GitHub](https://github.com/utkarshakya/Respiro)
          </p>
          <p>
            Feel free to explore the code, suggest improvements, or share
            feedback. Together, let's make Respiro the go-to platform for
            balanced productivity and health.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
