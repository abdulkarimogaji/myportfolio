import courses from "../assets/courses.json"
export const Courses = ({ darkMode }: { darkMode: boolean}) => {
    return (<section className="ms-2 mt-5 mt-lg-3">
        <h1 className="pt-3 fw-bold">Courses Learned</h1>
        {
            courses.map((course, i) => 
                <div key={i} className="my-5">
                    <i className={`${darkMode ? 'myAlternate' : ''} bi bi-forward-fill me-4`}></i>
                    <span className="fs-5">{course}</span>
                </div >
            )
        }
    </section>)
}