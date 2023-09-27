export default function RotatingSection() {
  let string = "A b d Q u d u s * G b a d a m o s i* ";

  return (
    <div className="lg:mt-0 mt:4 flex justify-between items-center px-4">
      <div className="spin ">
        <div className=" relative h-[100px] w-[100px] animate-spin-slow">
          {string.split("").map((s: string, i: number) => (
            <span
              key={i}
              style={{ transform: `rotate(${i * (360 / string.length)}deg)` }}
              className={`font-[400] uppercase absolute origin-[0_50px]  left-[50%] `}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
      <div className="sm:pr-4">
        <p className="uppercase font-semibold">Available for freelance</p>
        <p className="uppercase font-semibold">Open to internships</p>
        <p className="uppercase font-semibold cursor-pointer underline">
          lets talk
        </p>
      </div>
    </div>
  );
}
