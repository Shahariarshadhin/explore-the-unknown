import { useEffect, useRef, useState } from "react";

export const FavoriteColor = () => {
  const [color, setColor] = useState("red");

  return (
    <>
      <div className="space-x-8 mb-40">
        <h1>My favorite color is {color}!</h1>
        <button type="button" onClick={() => setColor("blue")}>
          Blue
        </button>
        <button type="button" onClick={() => setColor("red")}>
          Red
        </button>
        <button type="button" onClick={() => setColor("pink")}>
          Pink
        </button>
        <button type="button" onClick={() => setColor("green")}>
          Green
        </button>
      </div>
    </>
  );
};

export const CountApp = () => {
  const [inputValue, setInputValue] = useState("0");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <div>
        <input
          type="text"
          value={inputValue}
          className="border-2"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div>
        <h1 className="mb-40">Render Count: {count.current}</h1>
      </div>
    </>
  );
};
