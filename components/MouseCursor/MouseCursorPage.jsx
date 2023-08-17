import React, { useEffect } from "react";
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import ImageAnimation from "./ImageAnimation";
import BoxFlip from "./BoxFlip";
import FishAnimation from "./FishLine";

const MouseCursorPage = () => {
  useEffect(() => {
    MouseFollower.registerGSAP(gsap);

    const cursor = new MouseFollower({
        el: null,
        container: document.body,
        className: 'mf-cursor',
        innerClassName: 'mf-cursor-inner',
        textClassName: 'mf-cursor-text',
        mediaClassName: 'mf-cursor-media',
        mediaBoxClassName: 'mf-cursor-media-box',
        iconSvgClassName: 'mf-svgsprite',
        iconSvgNamePrefix: '-',
        iconSvgSrc: '',
        dataAttr: 'cursor',
        hiddenState: '-hidden',
        textState: '-text',
        iconState: '-icon',
        activeState: '-active',
        mediaState: '-media',
        stateDetection: {
            '-pointer': 'a,button',
            '-hidden': 'iframe'
        },
        visible: true,
        visibleOnState: false,
        speed: 0.55,
        ease: 'expo.out',
        overwrite: true,
        skewing: 0,
        skewingText: 0,
        skewingIcon: 2,
        skewingMedia: 2,
        skewingDelta: 0.001,
        skewingDeltaMax: 0.15,
        stickDelta: 0.15,
        showTimeout: 20,
        hideOnLeave: true,
        hideTimeout: 300,
        hideMediaTimeout: 300
    });

    return () => {
      cursor.destroy();
    };
  }, []);

  return (
  <div>
      <div className="container mx-auto mt-32 text-center lg:flex">
      <div data-cursor-video="/vdo/videoplayback.mp4"  className=" text-5xl font-bold mt-32 mr-20">WELCOME TO</div>
      <div data-cursor-video="/vdo/sun.mp4"  className=" text-5xl font-bold mt-32">THE YOU ONLY LIVE ONCE STDUIO</div>
    </div>

    <div>
      <ImageAnimation/>
      <BoxFlip/>
      <FishAnimation/>
    </div>
  </div>
  );
};

export default MouseCursorPage;