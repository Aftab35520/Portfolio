
import { lazy, Suspense } from "react";
import ContactForm from "./component/Home/Contact";
import Service from "./component/Home/service";
import Welcome from "./component/Home/Welcome";
import Mobile3D from "./component/Mobile3D";
const Animation3D = lazy(() => import("./component/3d"));
export default function Home() {
  return (
    <div className="relative w-full max-w-[2000px]">
      <div className="w-full hidden sm:block">
      <Suspense fallback={<div className="text-2xl bg-red-600">Loading...</div>}>
      <Animation3D />
      </Suspense>
      </div>
      <div className="w-full  sm:hidden ">
      <Mobile3D/>
      </div>
     
      <div className="absolute z-10  h-[200dvh] w-full pointer-events-none ">
      {/* <Header/> */}
      <Welcome/>
      <Service />
     <ContactForm/>
      </div>
    </div>
  );
}
