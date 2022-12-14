

export default function Single() {
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
                  <div className="col-xl-2 col-lg-3 col-md-6 col-12 ml-5 col-sm-12">
                     <img src="/images/placeholder.jpg" className="w-100 img-fluid" />
                  
                  </div>
                  <div className="col-xl-8 col-lg-8 col-md-6 col-12 shingle_sec_col mt-3 mb-3 "> <div className="single_show-rating mt-2">
                     <i className="fa fa-star" aria-hidden="true"></i>
                     <i className="fa fa-star" aria-hidden="true"></i>
                     <i className="fa fa-star" aria-hidden="true"></i>
                     <i className="fa fa-star" aria-hidden="true"></i>
                     <i className="fa fa-star" aria-hidden="true"></i>
                     <span>4.2/5</span>
                  </div>
                     <div className="mt-3">
                        <h3>This is the title of the TV show <br></br>Which is very long isn't it</h3>
                        <p className="single_page_para">Lorem Ipsum is simply dummy text of the printing and typesetting<br /> industry. Lorem Ipsum has been the industry's standard dummy text ever<br /> since the 1500s, when an unknown printer took a galley of type and scrambled<br /> </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* first-section-end */}
         {/* second-section-start */}
         <section>
            <div className="container mt-5">
               <div className="row mt-3">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-12 mt-5 show_col_info">
                     <h3 className="heads">Show Info</h3>
                     <ul className="list-group show_info ">
                        <li className="list-group-item d-flex  align-items-center">
                           Started on
                           <span className="show_info_1">BBC Theme</span>
                        </li>
                        <li className="list-group-item  align-items-center">
                           Sechedule
                           <span className="show_info_2">tuesday</span>
                        </li>
                        <li className="list-group-item   align-items-center">
                           Genres
                           <span className="show_info_3">Drama</span>
                        </li>
                     </ul>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-12 mt-5">
                     <h3 className="heads">Starting</h3>
                     <ul className="list-group show_info1 ">

                        <li className="list-group-item  align-items-center ">
                           <i className="fa-solid fa-user"></i>
                           <span className="show_info_4">Starting</span>
                           <span className="show_info_sp">BBC Theme</span>
                        </li>
                        <li className="list-group-item  align-items-center ">
                           <i className="fa-solid fa-user"></i>
                           <span className="show_info_4">Starting</span>
                           <span className="show_info_sp">BBC Theme</span>
                        </li>
                        <li className="list-group-item  align-items-center ">
                           <i className="fa-solid fa-user"></i>
                           <span className="show_info_4">Starting</span>
                           <span className="show_info_sp">BBC Theme</span>
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
