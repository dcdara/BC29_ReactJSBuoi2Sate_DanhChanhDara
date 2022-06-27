import React, { Component } from 'react'
import GlassHeader from './GlassHeader'
import Glasses from './Glasses'

export default class GlassContainer extends Component {

    render() {
        return (
            <div>
                <section>
                    <GlassHeader />
                </section>
                <section>
                    <div className="container">
                        <Glasses />
                    </div>
                </section>
            </div>
        )
    }
}
