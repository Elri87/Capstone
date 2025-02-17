// "use client";
// import Navbar from "@/components/Navbar.jsx";
// import PlayerSelection from "@/components/PlayerSelection.jsx";
// import Link from "next/link";
// import { useState, } from "react";
// import { useRouter } from "next/navigation.js";
// import Image from "next/image.js";
// // import CodeHero from "/public/assets/Level1.png";
// import { IoIosArrowDropdown } from "react-icons/io";
// import { IoIosArrowDropup } from "react-icons/io";
// import GameLevel1 from "./game/GameLoop.jsx";
// import Footer from "./Footer.jsx";

// export default function Landing({ user }) {
//   const [hideHowToButton, setHideHowToButton] = useState(true);
//   const [error, setError] = useState("You must login or register to play");
//   const router = useRouter();

//   function handleHowtoClick() {
//     setHideHowToButton(!hideHowToButton);
//   }

//   function handlePlay() {
//     setHideHowToButton(!hideHowToButton);
//   }

//   return (
//     <main>
//       <div id="homepage-container">
//         <div id="homepage-left-container">
//           <div className="container">
//             <h1 className="typed">A JavaScript Escape Jungle</h1>
//           </div>
//           <div className="home-description">
//             <p>Welcome to CodeHero!</p>
//             <p>
//               A game where you test your knowledge on your journey to becoming a
//               Javascript master coder.
//             </p>
//             <p>Ready to start your odyssey?</p>
//             <p>
//               Sharpen your mind, prepare your keyboard, and step into the world
//               of
//             </p>
//             <span className="span-codeHero">"CodeHero" </span>
//             <p>Your future as a coding expert awaits!</p>
//           </div>
//           <div id="how-to-play-container">
//             <button
//               id="howto-btn"
//               onClick={handleHowtoClick}
//               className="editProfile-button"
//             >
//               {hideHowToButton ? `Learn How to Play ` : `Hide `}
//               {hideHowToButton ? <IoIosArrowDropdown /> : <IoIosArrowDropup />}
//             </button>

//             {/* Show if the button is click  */}
//             <div style={{ display: !hideHowToButton ? "flex" : "none" }}>
//               <p>
//                 Embark on an adventure through four stages, each representing a
//                 critical stage in your coding education. Your ultimate goal? To
//                 test your knowledge. You must find and answer five coding
//                 questions correctly to progress.{" "}
//                 <span id="warning-text">
//                   Be warned: a single incorrect answer, and you'll have to start
//                   your journey afresh.{" "}
//                 </span>
//                 But fear not, for with each attempt, you grow stronger in your
//                 knowledge and closer to your goals.
//               </p>
//             </div>
//           </div>
//           <div id="play-now-container">
//             <button
//               id="play-now-btn"
//               className="changeColor"
//               onClick={() => {
//                 if (!user.id) {
//                   setError("You must login or register to play");
//                 } else {router.push("/level");
//                 }
//               }}
//             >
//               Play
//               {/* <Link href={"/level"} style={{ textDecoration: "none" }}>Play</Link> */}
//             </button>
//           </div>{" "}
//           {error}
//         </div>
//         <div id="homepage-right-container">
//           <Image src={"/assets/Level1.png"} alt="Level One Map" className="homepage-img" height={310} width={400}/>
//         </div>{" "}
//       </div>
//       <Footer />
//     </main>
//   );
// }

"use client";
import Navbar from "@/components/Navbar.jsx";
import PlayerSelection from "@/components/PlayerSelection.jsx";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image.js";
import CodeHero from "/public/assets/Level1.png";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import GameLevel1 from "./game/GameLoop.jsx";
import Footer from "./Footer.jsx";
export default function Landing({ user }) {
  const [hideHowToButton, setHideHowToButton] = useState(true);
  const [error, setError] = useState("You must login or register to play");
  function handleHowtoClick() {
    setHideHowToButton(!hideHowToButton);
  }
  function handlePlay() {
    setHideHowToButton(!hideHowToButton);
  }
  return (
    <main>
      <div id="homepage-container">
        <div id="homepage-left-container">
          <div className="container">
            <h1 className="typed">A JavaScript Escape Jungle</h1>
          </div>
          <div className="home-description">
            <p>Welcome to CodeHero!</p>
            <p>
              A game where you test your knowledge on your journey to becoming a
              Javascript master coder.
            </p>
            <p>Ready to start your odyssey?</p>
            <p>
              Sharpen your mind, prepare your keyboard, and step into the world
              of
            </p>
            <span className="span-codeHero">"CodeHero" </span>
            <p>Your future as a coding expert awaits!</p>
          </div>
          <div id="how-to-play-container">
            <button
              id="howto-btn"
              onClick={handleHowtoClick}
              className="editProfile-button"
            >
              {hideHowToButton ? `Learn How to Play ` : `Hide `}
              {hideHowToButton ? <IoIosArrowDropdown /> : <IoIosArrowDropup />}
            </button>
            {/* Show if the button is click  */}
            <div style={{ display: !hideHowToButton ? "flex" : "none" }}>
              <p>
                Embark on an adventure through four stages, each representing a
                critical stage in your coding education. Your ultimate goal? To
                test your knowledge. You must find and answer five coding
                questions correctly to progress.{" "}
                <span id="warning-text">
                  Be warned: a single incorrect answer, and you'll have to start
                  your journey afresh.{" "}
                </span>
                But fear not, for with each attempt, you grow stronger in your
                knowledge and closer to your goals.
              </p>
            </div>
          </div>
          <div>
            <div>
              {!user.id ? (
                <Link href={"/login"}>{error}</Link>
              ) : (
                <Link href={"/level"} id="play-now-btn">
                  Play
                </Link>
              )}
            </div>
          </div>
        </div>
        <div id="homepage-right-container">
          <Image src={CodeHero} alt="Level One Map" className="homepage-img" />
        </div>{" "}
      </div>
      <Footer />
    </main>
  );
}
