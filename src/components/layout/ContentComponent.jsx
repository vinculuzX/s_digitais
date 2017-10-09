import React from 'react'
import contentstyle from './ContentStylesheet.scss'
// image mock data
import avatar1 from '../../assets/img/avatar1.png'
import cel from '../../assets/img/icon_cel.png'
import slack from '../../assets/img/icon_slack.png'
import skype from '../../assets/img/icon_skype.png'
import msg from '../../assets/img/icon_msg.png'

// employee mock data
import EmployeeStore from '../../stores/EmployeeStore.jsx'
// add variable dollar to jquery
var $  = require('jquery')

export default class ContentLayout extends React.Component {
    constructor(){
        super()
        this.state = {
            employees: EmployeeStore.getAll()
        }
    }
    openInfo(){
        $(".content__info").slideDown()
        $(".action__minus").show()
        $(".action__plus").hide()
    }
    closeInfo(){
        $(".content__info").slideUp()
        $(".action__minus").hide()
        $(".action__plus").show()
    }
    render() {
        const employeeList = this.state.employees
        const employeeListComponent = employeeList.map(list => {
            return (
                <div className="content__box" key={list.id}>
                    <div className="content__avatar">
                        <img src={avatar1} />
                    </div>
                    <div className="content__profile">
                        <p className="profile__name">{list.contributor}</p>
                        <p className="profile__info">{list.careerfield}  -  {list.city}</p>
                    </div>
                    <div className="content__project">
                        <p className="project__name">Projeto {list.project} </p>
                    </div >
                    <div className="action__plus" onClick={this.openInfo.bind(this)}>+</div>
                    <div className="action__minus" onClick={this.closeInfo.bind(this)}>-</div>
                </div>
                <div className="content__info">
                    <div className="info">
                        <div className="info__contact">
                            <div className="info__contact--align"><img src={cel}/>&nbsp;&nbsp;&nbsp;21 99353-1889</div>
                            <div className="info__contact--align"><img src={msg}/>&nbsp;&nbsp;&nbsp;jose.telhado@mjv.com.br</div>
                            <div className="info__contact--align"><img src={slack}/>&nbsp;&nbsp;&nbsp;#GabrielTelhado</div>
                            <div className="info__contact--align"><img src={skype}/>&nbsp;&nbsp;&nbsp;jgtelhado</div>
                        </div>
                        <div className="info__details">
                            <div className="details">
                                <p className="details__title">Formação</p>
                                <div className="details__info">
                                Graduação: Desenho Industrial (Gama Filho)<br/>
                                Pós-Graduação: Marketing e Design Digital (ESPM)
                                </div>
                            </div>
                            <div className="details">
                                <p className="details__title">Experiência</p>
                                <div className="details__info">
10 anos de experiência em design.Desde de 2010 atuando na área digital, em diversos projetos: sites institucionais, responsivos, apps mobiles, ATM, e-commerce. Quase sempre participando de todo o fluxo de UI/UX: fluxograma, benchmark, paperframes, protótipos navegáveis, aplicação de card sorting, pesquisa quantitativa, interface.
                                </div>
                            </div>
                            <div className="details">
                                <p className="details__title">Ferramentas</p>
                                <div className="details__info">
                                Axure, Invision, Figma, Sketch, Photoshop, Illustrator, Hotjar, CrazyEgg, Xmind
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            )
        })
        return (
            <div className="content">{employeeListComponent}</div>    
//             <div className="content">
//                 <div className="content__box">
//                     <div className="content__avatar">
//                         <img src={avatar1} />
//                     </div>
//                     <div className="content__profile">
//                         <p className="profile__name">José Gabriel Pereira Telhado</p>
//                         <p className="profile__info">UI/UX Designer  -  Rio de Janeiro</p>
//                     </div>
//                     <div className="content__project">
//                         <p className="project__name">Projeto PIS </p>
//                     </div >
//                     <div className="action__plus" onClick={this.openInfo.bind(this)}>+</div>
//                     <div className="action__minus" onClick={this.closeInfo.bind(this)}>-</div>
//                 </div>
//                 <div className="content__info">
//                     <div className="info">
//                         <div className="info__contact">
//                             <div className="info__contact--align"><img src={cel}/>&nbsp;&nbsp;&nbsp;21 99353-1889</div>
//                             <div className="info__contact--align"><img src={msg}/>&nbsp;&nbsp;&nbsp;jose.telhado@mjv.com.br</div>
//                             <div className="info__contact--align"><img src={slack}/>&nbsp;&nbsp;&nbsp;#GabrielTelhado</div>
//                             <div className="info__contact--align"><img src={skype}/>&nbsp;&nbsp;&nbsp;jgtelhado</div>
//                         </div>
//                         <div className="info__details">
//                             <div className="details">
//                                 <p className="details__title">Formação</p>
//                                 <div className="details__info">
//                                 Graduação: Desenho Industrial (Gama Filho)<br/>
//                                 Pós-Graduação: Marketing e Design Digital (ESPM)
//                                 </div>
//                             </div>
//                             <div className="details">
//                                 <p className="details__title">Experiência</p>
//                                 <div className="details__info">
// 10 anos de experiência em design.Desde de 2010 atuando na área digital, em diversos projetos: sites institucionais, responsivos, apps mobiles, ATM, e-commerce. Quase sempre participando de todo o fluxo de UI/UX: fluxograma, benchmark, paperframes, protótipos navegáveis, aplicação de card sorting, pesquisa quantitativa, interface.
//                                 </div>
//                             </div>
//                             <div className="details">
//                                 <p className="details__title">Ferramentas</p>
//                                 <div className="details__info">
//                                 Axure, Invision, Figma, Sketch, Photoshop, Illustrator, Hotjar, CrazyEgg, Xmind
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
        )
    }
}
