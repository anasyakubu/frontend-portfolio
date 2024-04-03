import Img from "../../assets/Humaaans - Sitting.png";
import "./OverYears.scss";

const OverYears = () => {
  return (
    <div className="OverYears bg-white text-black">
      <div className="p-10">
        <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          <div className="">
            <div className="">
              <h2
                className="text-black font-extrabold"
                style={{ fontSize: "3rem" }}
              >
                Over the Years,
              </h2>
              <p className="mt-5 text-black text-sm">
                I've built products for companies and businesses around the
                globe ranging from marketing websites to complex solutions and
                enterprise apps with focus on fast, elegant and accessible user
                experiences. <br /> <br />
                Currently, I work at{" "}
                <span className="text-blue-600">
                  NYM Technologies Limited
                </span>{" "}
                as a Junior Frontend Developer crafting thoughtful and inclusive
                experiences that adhere to web standards for over 1000 users
                across the world. <br /> <br />
                Before now, I was an intern Frontend Developer at{" "}
                <span className="text-blue-600">NYM Technologies Limited</span>,
                where I worked on websites for users <br /> <br />
                Prior to{" "}
                <span className="text-blue-600">NYM Technologies Limited</span>,
                I was student of Bayero University Kano (BUK) learning HTML,
                building JavaScript applications and interfaces for school and
                personal projects. <br /> <br />I once also led the frontend
                team at Code Tech Technologies, an technology startup through
                building multiple React applications into a single robust
                websites and platform.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={Img} alt="Img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverYears;
