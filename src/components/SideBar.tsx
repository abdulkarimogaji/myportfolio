export const SideBar = ({ darkMode }:{darkMode: boolean}) => {
  return (
    <div className={`${ darkMode ? 'bg-dark' : 'bg-light'} sidebar myBrad col-3 ms-5 d-xl-block d-none`}>
      <div className="d-flex justify-content-center mt-5">
        <div className={`${ darkMode ? 'border' : 'myDark'} myBrad overflow-hidden p-1 `}>
          <img
            src="/images/mainpic.jpg"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              padding: "0.4rem",
            }}
            alt="myPic"
          />
        </div>
      </div>
      <h4 className="text-center m-2 fw-bold my-4">Abdulkarim Ogaji</h4>
      <p className="text-center mb-4">
        <small className={`${ darkMode ? 'myDark border-3' : 'myBrad border'} p-2`}> Web Developer </small>
      </p>
      <hr />
      <ul>
        <li className="d-flex align-items-center py-3">
          <i className="bi bi-people py-2 px-3 myBrad shadow fs-5 me-3 myAlternate"></i>
          <div>
            <small className="text-muted">EMAIL</small><br />
            <small>abdulkarimogaji002@gmail.com</small>
          </div>
        </li>
        <li className="d-flex align-items-center py-3">
          <i className="bi bi-people py-2 px-3 myBrad shadow me-3 myAlternate fs-5"></i>
          <div>
          <small className="text-muted">PHONE</small><br />
            <small>+2348166629550</small>
          </div>
        </li>
        <li className="d-flex align-items-center py-3">
          <i className="bi bi-receipt py-2 px-3 myBrad shadow me-3 myAlternate fs-5"></i>
          <div>
          <small className="text-muted">DATE OF BIRTH</small><br />
            <small>April 10th, 2002</small>
          </div>
        </li>
        <li className="d-flex align-items-center py-3">
          <i className="bi bi-person py-2 px-3 myBrad shadow me-3 myAlternate fs-5"></i>
          <div>
          <small className="text-muted">ADDRESS</small><br />
            <small>6 Edmund Cresent NIMR lagos</small>
          </div>
        </li>
      </ul>
    </div>
  );
};
