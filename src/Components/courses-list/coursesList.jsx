import CourseItem from "../course-item/courseItem"

const CoursesList = ({courses}) => {
  return (
    <div className="row">
      {
        courses.map((course) => {
          return(
            <div className="col-md-4" key={course.id}>
              <CourseItem
              img={course.img}
              id={course.id}
              courseTopic={course.courseTopic}
              teacherName={course.teacherName}
              />
            </div>
          )
        })
      }
    </div>
  )
}

export default CoursesList