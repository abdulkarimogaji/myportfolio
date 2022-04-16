import courses from "../assets/courses.json"
export const Courses = ({ darkMode }: { darkMode: boolean}) => {
    return (<section className="ms-2 mt-5 mt-lg-3">
        <h1 className="h2 fw-bold mb-5">Courses Learned</h1>
        {
            courses.map((course, i) => 
                <div key={i} className="my-lg-5 my-3">
                    <i className={`${darkMode ? 'myAlternate' : ''} bi bi-forward-fill me-lg-4 me-2`}></i>
                    <span className="sm">{course}</span>
                </div >
            )
        }
    </section>)
}