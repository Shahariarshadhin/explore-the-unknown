import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";

const FishAnimation = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(MotionPathPlugin);

    const rx = window.innerWidth < 1000 ? window.innerWidth / 1200 : 1;
    const ry = window.innerHeight < 700 ? window.innerHeight / 1200 : 1;

    const path = [
      // 1
      { x: 800, y: 200 },
      { x: 900, y: 20 },
      { x: 1100, y: 100 },
      // 2
      { x: 1000, y: 200 },
      { x: 900, y: 20 },
      { x: 10, y: 500 },
      // 3
      { x: 100, y: 300 },
      { x: 500, y: 400 },
      { x: 1000, y: 200 },
      // 4
      { x: 1100, y: 300 },
      { x: 400, y: 400 },
      { x: 200, y: 250 },
      // 5
      { x: 100, y: 300 },
      { x: 500, y: 450 },
      { x: 1100, y: 500 },
    ];

    const scaledPath = path.map(({ x, y }) => {
      return {
        x: x * rx,
        y: y * ry,
      };
    });

    const sections = [...document.querySelectorAll("section")];
    const fish = document.querySelector(".fish");
    const fishHeadAndBody = [
      ...document.querySelectorAll(".fish__head"),
      ...document.querySelectorAll(".fish__body"),
    ];
    const lights = [...document.querySelectorAll("[data-lights]")];
    const rays = document.querySelector("[data-rays]");

    const bubbles = gsap.timeline();
    bubbles.set(".bubbles__bubble", {
      y: 100,
    });
    bubbles.to(".bubbles__bubble", {
      scale: 1.2,
      y: -300,
      opacity: 1,
      duration: 2,
      stagger: 0.2,
    });
    bubbles.to(
      ".bubbles__bubble",
      {
        scale: 1,
        opacity: 0,
        duration: 1,
      },
      "-=1"
    );

    bubbles.pause();

    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: 1.5,
      },
    });
    tl.to(fish, {
      motionPath: {
        path: scaledPath,
        align: "self",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
      duration: 10,
      immediateRender: true,
    });
    tl.to(
      ".indicator",
      {
        opacity: 0,
      },
      0
    );
    tl.to(
      fish,
      {
        rotateX: 180,
      },
      1
    );
    tl.to(
      fish,
      {
        rotateX: 0,
      },
      2.5
    );
    tl.to(
      fish,
      {
        z: -500,
        duration: 2,
      },
      2.5
    );
    tl.to(
      fish,
      {
        rotateX: 180,
      },
      4
    );
    tl.to(
      fish,
      {
        rotateX: 0,
      },
      5.5
    );
    tl.to(
      fish,
      {
        z: -50,
        duration: 2,
      },
      5
    );
    tl.to(
      fish,
      {
        rotate: 0,
        duration: 1,
      },
      "-=1"
    );
    tl.to(
      ".fish__skeleton",
      {
        opacity: 0.6,
        duration: 0.1,
        repeat: 4,
      },
      "-=3"
    );
    tl.to(
      fishHeadAndBody,
      {
        opacity: 0,
        duration: 0.1,
        repeat: 4,
      },
      "-=3"
    );
    tl.to(
      ".fish__inner",
      {
        opacity: 0.1,
        duration: 1,
      },
      "-=1"
    );
    tl.to(
      ".fish__skeleton",
      {
        opacity: 0.1,
        duration: 1,
      },
      "-=1"
    );

    bubbles.play();
    tl.pause();

    const lightsTl = gsap.timeline({
      scrollTrigger: {
        scrub: 6,
      },
    });
    lightsTl.from(
      lights[0],
      {
        x: window.innerWidth * -1,
        y: window.innerHeight,
        ease: "power4.out",
        duration: 80,
      },
      0
    );
    lightsTl.to(
      lights[0],
      {
        x: window.innerWidth,
        y: window.innerHeight * -1,
        ease: "power4.out",
        duration: 80,
      },
      "-=5"
    );

    const makeBubbles = (p, i) => {
      const { top, left } = fish.getBoundingClientRect();
      gsap.to(p, { opacity: 1, duration: 1 });
      gsap.set(".bubbles", {
        x: left,
        y: top,
      });
      if (bubbles.paused) {
        bubbles.restart();
      }
      if (i > 6) {
        gsap.to(".bubbles", {
          opacity: 0,
        });
      }
    };

    const rotateFish = (self) => {
      if (self.direction === -1) {
        gsap.to(fish, { rotationY: 180, duration: 0.4 });
      } else {
        gsap.to(fish, { rotationY: 0, duration: 0.4 });
      }
    };

    const hideText = (p) => {
      gsap.to(p, { opacity: 0, duration: 1 });
    };

    sections.forEach((section, i) => {
      const p = section.querySelector("p");
      gsap.to(p, { opacity: 0 });

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        onEnter: () => makeBubbles(p, i),
        onEnterBack: () => {
          if (i <= 6) {
            gsap.to(".bubbles", {
              opacity: 1,
            });
          }
        },
        onLeave: () => {
          hideText(p);
          if (i === 0) {
            gsap.to(".rays", {
              opacity: 0,
              y: -500,
              duration: 8,
              ease: "power4.in",
            });
          }
        },
        onLeaveBack: () => hideText(p),
        onUpdate: (self) => rotateFish(self),
      });
    });
  });

  return (
    <div>
      <p className="indicator">
        <span>Scroll</span>
        <span>↓</span>
      </p>

      <div className="fish-wrapper">
        <div className="fish">
          <div className="fish__skeleton"></div>
          <div className="fish__inner">
            {/* body */}
            <div className="fish__body"></div>
            <div className="fish__body"></div>
            <div className="fish__body"></div>
            <div className="fish__body"></div>

            {/* head */}
            <div className="fish__head"></div>
            <div className="fish__head fish__head--2"></div>
            <div className="fish__head fish__head--3"></div>
            <div className="fish__head fish__head--4"></div>

            <div className="fish__tail-main"></div>
            <div className="fish__tail-fork"></div>

            <div className="fish__fin"></div>
            <div className="fish__fin fish__fin--2"></div>
          </div>
        </div>
      </div>

      <div className="bubbles">
        <div className="bubbles__inner">
          <div className="bubbles__bubble"></div>
          <div className="bubbles__bubble"></div>
          <div className="bubbles__bubble"></div>
        </div>
      </div>

      <div className="rays">
        <div data-rays></div>
      </div>

      <div className="lights">
        <div className="lights__group" data-lights="1">
          <div className="lights__light"></div>
          <div className="lights__light"></div>
          <div className="lights__light"></div>
          <div className="lights__light"></div>
          <div className="lights__light"></div>
          <div className="lights__light"></div>
          <div className="lights__light"></div>
          <div className="lights__light"></div>
        </div>
      </div>

      <div className="content">
        <section>
          <div className="section__content">
            <p>In the deepest ocean</p>
          </div>
        </section>
        <section>
          <div className="section__content">
            <p>the bottom of the sea</p>
          </div>
        </section>
        <section>
          <div className="section__content">
            <p>Your eyes...</p>
          </div>
        </section>
        <section>
          <div className="section__content">
            <p>they turn me...</p>
          </div>
        </section>
        <section>
          <div className="section__content">
            <p>turn me on to phantoms</p>
          </div>
        </section>
        <section>
          <div className="section__content">
            <p>I follow to the edge of the earth</p>
          </div>
        </section>
        <section>
          <div className="section__content">
            <p>and fall off</p>
          </div>
        </section>
        <section>
          <div className="section__content">
            <p>I get eaten by the worms</p>
          </div>
        </section>
        <section>
          <div className="section__content">
            <p>and weird fishes</p>
          </div>
        </section>
        <section>
          <div className="section__content">
            <p>Hit the bottom and escape</p>
          </div>
        </section>
        <section>
          <div className="section__content">
            <p>escape</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FishAnimation;
