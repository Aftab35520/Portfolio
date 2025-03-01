export default function Welcome() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[calc(100%-80px)] flex justify-between h-[calc(100dvh-00px)] items-center MobileResp">
        <div className="w-full flex justify-center ">
          <img
            src="https://aftab35520.github.io/buildit/_next/static/media/designer.3bcef79d.jpg"
            className="shadow-2xl p-2 bg-white w-[300px] ml-[-200px] rounded-[50%] border-2 border-white img"
            alt=""
          />
        </div>
        <div className=" w-full flex flex-col items-end GlowText">
          <p className="w-2/3">
            <span className="text-xl GlowText">
              Hi, I’m <span className="text-blue-800">Aftab Alam</span>
            </span>
            ,<br /> a Full Stack Developer and Data Analyst. I build scalable
            applications and turn data into valuable insights. I’m passionate
            about problem-solving, innovation, and creating impactful tech
            solutions. 🚀
          </p>
          <div className="w-[67%]">
            <button
              asChild
              className="bg-blue-800 p-3 rounded-3xl m-2 text-white border-2 pointer-events-auto cursor-pointer"
            >
              {" "}
              <a href="./AftabAlamResume.pdf" download="AftabAlamResume.pdf">
                Download CV
              </a>
            </button>
            <button className=" p-2 rounded-3xl text-black border-2 pointer-events-auto cursor-pointer">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
