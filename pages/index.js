import Image from "next/image";
import * as AppAction from "../apiAction";
import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter();
  const [shows, setShows] = useState();
  useEffect(() => {
    AppAction.getShows().then((res) => {
      if (res) {
        setShows(res.data);
      }
    }).catch((error)=>{
    //Later replace with toasts
     console.error(error); 
    });
  }, []);
  return (
    <section>
      <section className="back-color-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>
                <b>TV Bland</b>
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="list-section">
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-12">
              <h4 className="mb-4">Last Added Shows</h4>
            </div>
          </div>
          <div className="row" >
            {
              shows && shows?.map((item, index) => {
                return (
                  <div key={index} className="col-xl-2 col-lg-3 col-md-6 col-6">
                    <div className="show-detail">
                        <div className="show-img">
                          <Image
                            type="button"
                            onClick={() => {
                              router.push({
                                pathname: `/show-detail/${item.show.id}`,
                              });
                            }}
                            width="0"
                            height="0"
                            sizes="100vw"
                            src={item?.show.image.original}
                            alt=""
                          />

                        </div>
             
                      <div className="show-detail-content">
                        <div className="show-rating">
                          <ReactStars size={20} value={item?.show.rating.average} edit={false} count={10} />
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: (item?.show.summary) }} />
                      </div>
                    </div>
                  </div>
                )
              }
              )
            }
          </div>

        </div>
      </section>
    </section>
  );
}
