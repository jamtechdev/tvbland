import { useRouter } from "next/router";
import React, { useState, useEffect } from 'react';
import * as AppAction from "../../apiAction";
import ReactStars from "react-rating-stars-component";


export default function Single() {
  const router = useRouter();
  const { id } = router.query
  const [show, setShow] = useState();

  useEffect(() => {
    if (id) {
      AppAction.getShowDetailById(id).then(res => {
        setShow(res?.data)
      }).catch((error)=>{
        //Later replace with toasts
         console.error(error); 
        });
    }

  }, []);

  console.log("DATA",show)

  return (
    <>
      {/* first-section-start */}
      <section className="single_page_main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="mt-5">
                <b>TV Bland</b>
              </h2>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-xl-3 col-lg-3 col-md-6 col-12 ml-5 col-sm-12 main_img_rme">
              <img src={show?.image.original} className="w-100 img-fluid" />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-6 col-12 shingle_sec_col mt-3 mb-3 ">
              <div className="show-rating">
                {show?.rating.average &&
                  <ReactStars size={20} value={show?.rating.average} edit={false} count={10} />
                }
                {show?.rating.average}
              </div>
              <div className="mt-3">
                <h3>
                  {show?.name}
                </h3>
                <div dangerouslySetInnerHTML={{ __html: (show?.summary) }} />

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* first-section-end */}
      {/* second-section-start */}
      <section>
        <div className="container mt-5">
          <div className="row mt-3 mb-3">
            <div className="col-xl-6 col-lg-6 col-md-6 col-12 mt-5 show_col_info">
              <h3>Show Info</h3>
              <ul className="list-group show_info ">
                <li className="list-group-item d-flex align-items-center">
                <div className="type_main_heading">Language</div>
                  <span className="show_info_1">{show?.language}</span>
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <div className="type_main_heading">Status</div>
                   <span className="show_info_2">{show?.status}</span>
                </li>
                <li className="list-group-item d-flex align-items-center">
                    <div className="type_main_heading">Genres</div>
                    <span className="show_info_3">{show?.genres.join(',')}</span>
                </li>
                <li className="list-group-item d-flex align-items-center">
                    <div className="type_main_heading">Schedule</div>
                    <span className="show_info_3">{show?.schedule.days}</span>
                </li>
                <li className="list-group-item d-flex align-items-center">
                    <div className="type_main_heading">Type</div>
                    <span className="show_info_3">{show?.type}</span>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-12 mt-5 ">
              <h3>Starring</h3>
              <ul className="list-group show_info1 ">
                <li className="list-group-item d-flex align-items-center ">
                  <div className="user_profile_img"><i className="fa-solid fa-user"></i></div>
                  <div className="d-flex main_lsit_name justify-content-between"><h6 className="mb-0">Starting</h6> <span>BBC Theme</span></div>
                </li>
                <li className="list-group-item d-flex align-items-center ">
                  <div className="user_profile_img"><i className="fa-solid fa-user"></i></div>
                  <div className="d-flex main_lsit_name justify-content-between"><h6 className="mb-0">Starting</h6> <span>BBC Theme</span></div>
                </li>
                <li className="list-group-item d-flex align-items-center ">
                  <div className="user_profile_img"><i className="fa-solid fa-user"></i></div>
                  <div className="d-flex main_lsit_name justify-content-between"><h6 className="mb-0">Starting</h6> <span>BBC Theme</span></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* second-section-end */}
    </>
  );
}
