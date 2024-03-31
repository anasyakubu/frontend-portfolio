import Nav from "@/components/shared/Nav";
import "./HomeHeader.scss";
import Img from "../../assets/Banner-1.png";
const HomeHeader = () => {
  return (
    <div className="HomeHeader">
      <Nav />
      <div className="lg:px-6">
        <div className="p-3 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          {/* Text */}
          <div className="pl-3 max-w-xl lg:py-16 textSection">
            <h1
              className="text-3xl font-extrabold text-black"
              style={{ fontSize: "4rem", lineHeight: "115%" }}
            >
              Frontend <br />
            </h1>
            <div className="glitch-wrapper">
              <div className="glitch" data-glitch="Developer">
                Developer.
              </div>
            </div>
            <p className="mt-5 text-black font-semibold">
              I am a <span className="text-blue-600">software engineer</span>{" "}
              who enjoys seamlessly bridging the gap between people and digital
              space by day, and a <span className="text-blue-600">anime</span>{" "}
              lover.
            </p>
            <div className="my-10 flex justify-between">
              <p className="text-sm" style={{ fontSize: "12px" }}>
                Highly skilled at progressive enhancement, design systems & UI
                Engineering.
              </p>
              <p className="text-sm" style={{ fontSize: "12px" }}>
                Proven experience building successful products for clients
                across several countries.
              </p>
            </div>
          </div>
          {/* image */}
          <div className="imageSection flex justify-center text-center mt-10">
            <img src={Img} alt="Img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
