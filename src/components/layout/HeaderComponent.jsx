import React from 'react'
import headerstyle from './HeaderStylesheet.scss'
import brand__image from '../../assets/img/brand__image.png'
export default class HeaderLayout extends React.Component{
  render(){
    return (
    <section id="header">
      <header className="nav">
        <div className="header__brand">
          <img src={brand__image} />
        </div>
        <div className="header__title">
          Equipe de Soluções Digitais
        </div>
      </header>
    </section>
    )
  }
}
