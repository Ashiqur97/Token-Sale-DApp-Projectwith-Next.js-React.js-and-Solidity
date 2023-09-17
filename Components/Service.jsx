import React from "react";

const Service = () => {
  const services=[
    {
      title:"Secure Storage",
      discription: 
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"

    },

    {
      title:"Mobile App",
      discription: 
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"

    },
    {
      title:"Exchange Service",
      discription: 
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"

    },
    {
      title:"Investment Project",
      discription: 
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"

    },
    {
      title:"Credit card use",
      discription: 
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"

    },
    {
      title:"Planning",
      discription: 
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    },
  ]
  return <section id="service" className="small_pb">
    <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
              <div className="title_default_light title_border text-center">
                  <h4 className="animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.2s"
                  >
                    Meet our solution for you
                  </h4>
                  <p 
                  className="animation" 
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum quia iste accusantium iusto, 
                      vero veniam in quo autem dicta mollitia corrupti fugiat aliquid consequatur nihil minus sapiente qui soluta placeat.
                  </p>
              </div>
          </div>
        </div>
        <div className="row">
            {
              services.map((service,i) =>(
                <div key={i+1} className="col-lg-4 col-md-6 col-sm-12">
                  <div className="box_wrap text-center animation"
                      data-animation="fadeInUp"
                      data-animation-delay={`0.${i+1}s`}
                  >
                    <h4>{service.title}</h4>
                    <p>{service.discription}</p>
                    </div>
                  </div>
              ))
            }
        </div>
    </div>
  </section>;
};

export default Service;
