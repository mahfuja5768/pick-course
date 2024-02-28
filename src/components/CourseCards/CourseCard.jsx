const CourseCard = ({ item }) => {
  const {
    about_course,
    category,
    title,
    what_you_learn,
    duration,
    img,
    course_access_time,
  } = item || {};
  return (
    <div className="flex justify-between items-center">
      <div className="bg-primary relative h-[400px] text-white rounded-2xl p-5">
        <div>
        <h3 className=" text-2xl font-semibold my-3">{title}</h3>
        <p className=" bg-secondary inline px-4 py-1 rounded-md">{course_access_time}</p>
        </div>
        <img className="w-44 rounded-full h-44 absolute bottom-0 right-0 " src={img} alt="" />
      </div>
    </div>
  );
};

export default CourseCard;
