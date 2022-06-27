import React, { Component } from 'react'
import glassesData from '../../Data/dataGlasses.json'

export default class GlassFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            glassesDetail: glassesData[0]
        }
    }

    renderListGlasses = () => {
        return glassesData.map((glasses, index) => {
            return (
                <div onClick={() => { this.changeGlasses(glasses) }} className="glasses-list col-2" key={index}>
                    <img className='img-fluid' src={glasses.url} alt="" />

                </div>
            )
        })
    }

    changeGlasses = (glasess) => {
        //  console.log(glasess);
        this.setState({
            glassesDetail: glasess
        })
    }
    render() {
        let { glassesDetail } = this.state;
        return (
            <div>
                {/* Model Glasses */}

                <div className='row glasses-model '>
                    <div className="container vglasses py-3">
                        <div className="row justify-content-between">
                            <div className="col-5 vglasses__right p-0">
                                <div className="vglasses__card">
                                    <div className="vglasses__model" />
                                    <img className="card-img-top" src="./glassesImage/model.jpg" alt="" />
                                    <div />
                                    <div>
                                        <div className="vglasses__model" id="avatar">
                                            <img className="imge-fluid" src="./glassesImage/v1.png" alt="" />
                                        </div>
                                        <div className="vglasses__info">
                                            <p className='glasses-title'>
                                                GUCCI G8850U
                                            </p>
                                            <p className='glasses-desc'>
                                                Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-5 vglasses__right p-0">
                                <div className="vglasses__card">
                                    <div className="vglasses__model" />
                                    <img className="card-img-top" src="./glassesImage/model.jpg" alt="" />
                                    <div />
                                    <div>
                                        <div className="vglasses__model" id="avatar">
                                            <img className="imge-fluid" src={glassesDetail.url} alt="" />
                                        </div>
                                        <div className="vglasses__info">
                                            <p className='glasses-title'>
                                                {glassesDetail.name}
                                            </p>
                                            <p className='glasses-desc'>
                                                {glassesDetail.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* List Glassess */}

                <div className="container glasses-footer">
                    <div className="row glasses-item">
                        {this.renderListGlasses()}
                    </div>
                </div>
            </div>
        )
    }
}