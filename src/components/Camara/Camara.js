import React, { Component } from 'react'
import Webcam from "react-webcam";

export default class Camara extends Component {
    setRef=webcam=>{
        this.webcam=webcam;
    }

        state={
            imagen:null
        }

         foto=()=>{
             var captura=this.webcam.getScreenshot();
             console.log(captura)
             this.setState({
                 imagen:captura  
             })
         };

    render() {

        return (
            <div className='App'>
                <Webcam audio={false} height={350} ref={this.setRef} screenshotFormat="image/jpeg" width={350}/>
                 <br/> 
                <button onClick={this.foto}>Hacer captura</button>
                <hr/>
                <img src={this.state.imagen} alt=""/>  

                <br/>
                <a href={this.state.imagen} download="captura">Descargar captura</a> 
            </div>
        )
    }
}