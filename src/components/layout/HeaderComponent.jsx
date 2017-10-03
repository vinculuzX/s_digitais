import React from 'react'
import headerstyle from './HeaderStylesheet.scss'

export default class HeaderLayout extends React.Component{
  render(){
    return (
    <section id="header">
      <header className="nav">
        <div className="header__brand">
          <img src="../../assets/img/brand__image.png" />
        </div>
        <div className="header__title">
          Equipe de Soluções Digitais
        </div>
      </header>
    </section>
    )
  }
}
