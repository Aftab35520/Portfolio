import Animation3D from "./component/3d";
import ContactForm from "./component/Home/Contact";
import Service from "./component/Home/service";
import Welcome from "./component/Home/Welcome";

export default function Home() {
  return (
    <div className="relative w-full max-w-[2000px]">
      <Animation3D/>
      <div className="absolute z-10  h-[200dvh] w-full pointer-events-none ">
      {/* <Header/> */}
      <Welcome/>
      <Service />
     <ContactForm/>
      </div>
    </div>
  );
}
