import React from 'react'
import contentstyle from './ContentStylesheet.scss'

export default class ContentLayout extends React.Component {

    render() {
        return (
            <div className="content">
                <div className="content__box">
                    <div className="content__avatar">
                        <img src="http://via.placeholder.com/70x70" />
                    </div>
                    <div className="content__profile">
                        <p className="profile__name">José Gabriel Pereira Telhado</p>
                        <p className="profile__info">UI/UX Designer  -  Rio de Janeiro</p>
                    </div>
                    <div className="content__project">
                        <p className="project__name">Projeto PIS </p>
                    </div >
                    <div className="action__plus">+</div>
                </div>
                <div className="content__info">
                    <div className="info">
                        <div className="info__contact">
                            <span className="info__contact--margin">21 99353-1889</span>
                            <span className="info__contact--margin">jose.telhado@mjv.com.br</span>
                            <span className="info__contact--margin">#GabrielTelhado</span>
                            <span className="info__contact--margin">jgtelhado</span>
                        </div>
                        <div className="info__details">
                            <div className="details">
                                <div className="details__title">

                                </div>
                                <div className="details__info">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}