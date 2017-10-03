import React from 'react'
import headerstyle from './HeaderStylesheet.scss'

export default class HeaderLayout extends React.Component{
  render(){
    return (
    <section id="header">
      <header className="nav">
        <div className="header__brand">
          <img src="http://via.placeholder.com/198x51" />
        </div>
        <div className="header__title">
          Equipe de Soluções Digitais
        </div>
      </header>
    </section>
    )
  }
}
