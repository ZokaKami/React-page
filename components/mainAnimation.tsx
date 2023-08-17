function mainAnimation() {
  return (
    <div className="pb-12 z-10 ">
      <div className="w-[60px] h-[120px] bg-transparent border-[7px] rounded-[60px] relative mx-auto">
        <div className="absolute w-[42px] h-[42px] rounded-[50%] bg-red-400 inset-0 m-auto animate-[circle_1.5s_ease-in-out_infinite_alternate]"></div>
      </div>
    </div>
  );
}

export default mainAnimation;
