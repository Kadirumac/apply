import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
import styled from 'styled-components';
class About extends Component {
    render() {
        return (
           <ProductConsumer>
               {(value) =>{
                  const {id,img,info,title,type} =
                  value.about;
                  let newText = info.split('\n').map((item, i) => {
                    return <li key={i} className="text-lowercase">{item}</li>;
                    });
                  return(
                      <div className="container py-5">
                          {/* title */}
                          <div className="row">
                              <div className="col-10 mx-auto text-center  my-5">
                                <h1>{title}</h1>

                              </div>
                          </div>
                        {/* end title */}
                        {/* product info */}
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3 ">
                                <img  src={img} className="img-fluid" alt="product"/>
                            </div>
                            {/* product text */}
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                 <h2 className="mb-4 text-center">  {type}</h2>
                             
                                     <h4 className="text-blue">
                                     </h4>
                                   
                                             <Text>
                                                 <ul className="me">
                                                 {newText}
                                                </ul>  </Text>
                                      
                     
                                     {/* button */}
                                     <div>
                                         <Link to="/">
                                         <ButtonContainer >
                                                 Back to Home     
                                        </ButtonContainer>
                                        </Link>
                                
                                     </div>
                                 
                            </div>
                        </div>
                      </div>
                  );
                   
               }}
           </ProductConsumer>
        );
    }
}

export default About;


const Text = styled.p`
.me{
    font-family:Tenor Sans;
    font-size:1.2em;

}
`