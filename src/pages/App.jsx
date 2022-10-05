import Navbar from "../components/Navbar";
import "../styles/App.css";

function App() {
  return (
    <>
      <div className="bg-pink bg-cover font-workSans">
        <div className="bg-hero-pattern bg-no-repeat bg-cover bg-top">
          <Navbar />
          <div className="flex flex-col justify-between text-center text-white">
            <h1 className="font-black text-[52px] mt-[67px] lg:mt-[84px] leading-[51px] lg:text-[62px]">WEEKEND FROM HOME</h1>
            <p className="font-semibold lg:text-[21px] italic mt-[20px] leading-[25px]">Stay active with a little workout</p>
            <img src="/Bitmap2.png" alt="lego" width={"184px"} className="self-center mt-[67px]" />
            <button className="w-[231px] h-[58px] self-center bg-white rounded-[29px] absolute top-[542px] lg:top-[514px] text-black text-[16px] leading-[19px] transition ease-in-out delay-100 duration-300 hover:-translate-y-1 hover:scale-110">
              Let's Go
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
