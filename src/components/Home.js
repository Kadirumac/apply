import React, { Component } from 'react';
import Skills from './Skills';
import Services from './Services';
import Title from './Title';
import {ProductConsumer} from '../context';
import Particles from 'react-particles-js';
import styled from 'styled-components';
import particles2 from '../particles2';

class Home extends Component {
 
    render() {
       
        return (
            <React.Fragment>
                <Codes>
             <div className="py-2">
            
        
                <div className="container">
       
                     <div className="row">
                        <div className="col-10 mx-auto my-2 text-center text-title">
                            
                                <h5 className="text-lowercase mr-5 fs ">
                                    <strong >Full Stack Developer</strong>  
                                </h5>
                        </div>
                    </div>
               
                    <div className="row">   
              
                    <div className="col-lg-12  col-md-10 col-sm-11 srv">
                              
                        <ProductConsumer>
                        { (value) =>{ 
                            return value.services.map( service =>{
                                return <Services 
                                 key={service.id }
                                 service = {service}/>})
                        }}                         
                        </ProductConsumer>
                        </div>   
                        </div>  
                        <div className="row">       
                      <div className="col-lg-6 col-md-10 col-sm-11 skills">
                        
                      <ProductConsumer>
                        { (value) =>{
                            return value.frontEndCodes.map( item =>{
                                return <Skills logo
                                 key={item.id }
                                 skill = {item}/>})
                        }}
                        </ProductConsumer>
                      </div>
                      <div className="col-lg-6 col-md-10 col-sm-11 skills">
                        <ProductConsumer>
                        { (value) =>{
                            return value.backEndCodes.map( e =>{
                                return <Skills logo
                                 key={e.id }
                                 skill = {e}/>})
                        }}                         
                        </ProductConsumer>
                        </div>
                        <div className="col-lg-6 col-md-10 col-sm-11 skills">
                       
                        <ProductConsumer>
                        { (value) =>{
                            return value.languages.map( skill =>{
                                return(
                                    <div>
                                 
                                    <Skills label
                                 key={skill.id }
                                 skill = {skill}/>
                                 </div>)})
                        }}                         
                        </ProductConsumer>
                        </div>
                
                    </div>
                </div>
             </div>
             </Codes>
            </React.Fragment>
        );
    }
}

export default Home;

const Codes = styled.div`
.srv{
        font-family:Tenor Sans;
}
.skills{ 
    background: transparent;
    font-family:Tenor Sans;
    margin:4% 1%;
    padding:2% 0;

}

.fs{
    color:grey;
    font-family:Tenor Sans;
    letter-spacing:1.5px;
    line-height:0
    
}
`