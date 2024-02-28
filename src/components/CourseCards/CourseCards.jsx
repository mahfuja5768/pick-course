import Container from "../../pages/shared/Container/Container";
import CourseCard from "./CourseCard";
import allCourses from "../../data/allCourses";

const CourseCards = () => {
  const getData = allCourses;
  const allData = getData.data;
  console.log(allData);
  return (
    <div>
      <Container>
        <h2 className="text-3xl md:text-5xl text-center my-4 font-bold">What you'll learn</h2>
        <p className="text-center">
          Tailor your learning experience to suit your individual needs and
          preferences.
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-12">
          {allData?.map((item) => (
            <CourseCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CourseCards;
