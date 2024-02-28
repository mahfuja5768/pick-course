export default function Banner() {
  return (
    <div className=" bg-primary min-h-screen relative text-white  px-5">
      <div className="max-w-[1280px] mx-auto py-12 grid grid-cols-1 md:grid-cols-2 gap-5  justify-between items-center">
        <div className="mx-auto">
          <h2 className="text-3xl md:text-5xl my-3 mb-7 ">
            Welcome to Pick-Course, where learning meets innovation!
          </h2>
          <p className="text-gray-400">
            At Pick-Course, we're dedicated to revolutionizing the way you
            learn. Whether you're a student, educator, or lifelong learner, our
            platform offers an unparalleled range of resources, tools, and
            opportunities to enrich your educational journey. With cutting-edge
            technology and a commitment to excellence, we're here to empower you
            to achieve your academic and professional goals.
          </p>
        </div>
        <div>
          <form action="" className=" flex flex-col gap-6 md:w-3/4 w-full mx-auto">
            <input
              type="text"
              placeholder="Name"
              className=" px-3 py-2 border-b-2 border-secondary rounded-md "
            />
            <input
              type="email"
              placeholder="Email"
              className="px-3 py-2 border-b-2 border-secondary rounded-md "
            />
            <div className="flex gap-5 justify-between lg:flex-row flex-col">
            <input
              type="text"
              placeholder="Your Goal"
              className="px-3 py-2 border-b-2 border-secondary rounded-md "
            />
            <input
              type="text"
              placeholder="Your Skill Level"
              className="px-3 py-2 border-b-2 border-secondary rounded-md "
            />
            </div>
            <input
            type="submit"
            className=" cursor-pointer w-full my-2 bg-secondary mx-auto text-white font-bold py-2  rounded"
            value="Claim free first lesson"
          />
          <h5 className=" text-sm text-center">You’ll recieve your first lesson via email in less than a minute.
</h5>
          </form>
          
        </div>
      </div>
      <div className="">
        <svg
          className=" absolute left-0 bottom-0 right-0 z-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="rgb(15, 82, 87)"
            fillOpacity="1"
            d="M0,192L60,213.3C120,235,240,277,360,250.7C480,224,600,128,720,117.3C840,107,960,181,1080,181.3C1200,181,1320,107,1380,69.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
