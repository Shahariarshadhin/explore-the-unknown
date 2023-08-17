import { useEffect } from 'react';
import gsap from 'gsap';

const ImageAnimation = () => {
  useEffect(() => {
    let FollowBox = "#Wrap .FollowBox";
    gsap.set(FollowBox, {
      xPercent: -50,
      yPercent: -50,
      scale: 0
    });

    const handleMouseMove = (e) => {
      gsap.to(FollowBox, {
        duration: 0.5,
        overwrite: "auto",
        x: e.clientX,
        y: e.clientY,
        stagger: 0.15,
        ease: "none"
      });

      let TL = gsap.timeline({
        defaults: { duration: 0.5, ease: "none" }
      });
      TL.to(FollowBox, {
        scale: 1,
        overwrite: "auto",
        stagger: { amount: 0.15, from: "start", ease: "none" }
      });
      TL.to(
        FollowBox,
        {
          overwrite: "auto",
          scale: 0,
          stagger: { amount: 0.15, from: "end", ease: "none" }
        },
        "<+=2.5"
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div id="Wrap">
      <img className="FollowBox" src="https://source.unsplash.com/Pd8tLVGx2O4/200x250" alt="" />
      <img className="FollowBox" src="https://source.unsplash.com/CudNrzbsyZw/200x250" alt="" />
      <img className="FollowBox" src="https://source.unsplash.com/uEFombN3J5U/200x250" alt="" />
      <img className="FollowBox" src="https://source.unsplash.com/BjJP2TN8WoI/200x250" alt="" />
    </div>
  );
};

export default ImageAnimation;
