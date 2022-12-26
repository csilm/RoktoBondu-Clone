import React from "react";
import "./Gallary.css";
const Gallary = () => {
  return (
    <article className="video-sec-wrap">
      <div className="video-sec">
        <p
          className="video-sec-title"
          style={{ color: "#000000", "font-size": "30px" }}
        >
          আমাদের রক্তদান কর্মসূচির{" "}
          <span style={{ color: "#ed0404", "font-size": "30px" }}>
            তথ্যচিত্র
          </span>
        </p>
        <ul className="video-sec-middle" id="vid-grid">
          <li className="thumb-wrap">
            <a href="/">
              <img
                className="thumb"
                src="https://media.istockphoto.com/photos/male-nurse-taking-blood-sample-of-child-patient-n-clinic-picture-id1306247421?b=1&k=20&m=1306247421&s=170667a&w=0&h=PpxCAI3g_Qtvdb23BqI_oMfZi5b3joN9j2CKgeLyoGI="
                alt=""
                style={{}}
              />
              <div className="thumb-info">
                <p className="thumb-title">
                  রক্তবন্ধু'র রক্তদান কর্মসূচির তথ্যচিত্র - 1
                </p>
                <p className="thumb-user">রক্তবন্ধু</p>
              </div>
            </a>
          </li>
          <li className="thumb-wrap">
            <a href="/">
              <img
                className="thumb"
                src="https://images.unsplash.com/photo-1536856136534-bb679c52a9aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ymxvb2QlMjBkb25vcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
              <div className="thumb-info">
                <p className="thumb-title">
                  রক্তবন্ধু'র রক্তদান কর্মসূচির তথ্যচিত্র - 2
                </p>
                <p className="thumb-user">রক্তবন্ধু</p>
              </div>
            </a>
          </li>
          <li className="thumb-wrap">
            <a href="/">
              <img
                className="thumb"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2JsboEU09RfcLyjflMwweVvuwmrOx4sa5XFgWiH2H8TWb8xRHSaogk1utPoVQ3BxVby0&usqp=CAU"
                alt=""
              />
              <div className="thumb-info">
                <p className="thumb-title">
                  রক্তবন্ধু'র রক্তদান কর্মসূচির তথ্যচিত্র - 3
                </p>
                <p className="thumb-user">রক্তবন্ধু</p>
              </div>
            </a>
          </li>
          <li className="thumb-wrap">
            <a href="/">
              <img
                className="thumb"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpcdHcHjy-5En8m_znxqzvMB6fD1gwELBZCqMFRtYHRO7KLeImDsxuDvnhm_d6eRQl4AA&usqp=CAU"
                alt=""
              />
              <div className="thumb-info">
                <p className="thumb-title">
                  রক্তবন্ধু'র রক্তদান কর্মসূচির তথ্যচিত্র - 4
                </p>
                <p className="thumb-user">রক্তবন্ধু</p>
              </div>
            </a>
          </li>
          <li className="thumb-wrap">
            <a href="/">
              <img
                className="thumb"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLZbWkdzZ7k1tjTq1BLFNnsm0Q7BaEKuPWFg&usqp=CAU"
                alt=""
              />
              <div className="thumb-info">
                <p className="thumb-title">
                  রক্তবন্ধু'র রক্তদান কর্মসূচির তথ্যচিত্র - 5
                </p>
                <p className="thumb-user">রক্তবন্ধু</p>
              </div>
            </a>
          </li>
          <li className="thumb-wrap">
            <a href="/">
              <img
                className="thumb"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMq2COsS6pi4hX_MoaO0_uU-Uu2QDIiePUAQ&usqp=CAU"
                alt=""
              />
              <div className="thumb-info">
                <p className="thumb-title">
                  রক্তবন্ধু'র রক্তদান কর্মসূচির তথ্যচিত্র - 6
                </p>
                <p className="thumb-user">রক্তবন্ধু</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Gallary;
