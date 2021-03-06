import React from 'react'
// stylesheet
import contentstyle from './ContentStylesheet.scss'
// image mock data
import avatar1 from '../../assets/img/avatar1.png'
import cel from '../../assets/img/icon_cel.png'
import slack from '../../assets/img/icon_slack.png'
import skype from '../../assets/img/icon_skype.png'
import msg from '../../assets/img/icon_msg.png'
// add variable dollar to jquery
var $  = require('jquery')

export default class ContentLayout extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        employeeList:this.props.employeeList
      }
    }
    //Jquery slide Toogle
    openInfo(id){
        $("#" + id + " .content__info").slideDown()
        $("#" + id + " .action__minus").show()
        $("#" + id + " .action__plus").hide()
    }
    closeInfo(id){
        $("#" + id + " .content__info").slideUp()
        $("#" + id + " .action__minus").hide()
        $("#" + id + " .action__plus").show()
    }
    // render aplication with filter
    render() {
        const filterText = this.props.filterText
        const filterOcSelect = this.props.filterOcSelect
        const filterPjSelect = this.props.filterPjSelect
        const filterRgCheckbox = this.props.filterRgCheckbox
        const filterCounter = filterRgCheckbox.length
        const employeeListComponent = this.state.employeeList
        .filter(list=>{
            return list.contributor.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
        })
        .filter(list=>{
            return list.careerfield.toLowerCase().indexOf(filterOcSelect.toLowerCase()) >= 0
        })
        .filter(list=>{
            return list.project.toLowerCase().indexOf(filterPjSelect.toLowerCase()) >= 0
        })
        .filter((list)=>{
            for(var i=0;i<filterCounter;i++){
                console.log(filterRgCheckbox[i-2],filterRgCheckbox[i])
                return list.city.indexOf(filterRgCheckbox[i]) >= 0 || list.city.indexOf(filterRgCheckbox[i+1]) >= 0 || list.city.indexOf(filterRgCheckbox[i+2]) >= 0
            }
        })
        .map(list => {
            return (
                <div key={list.id} id={list.id}>
                    <div className="content__box">
                        <div className="content__avatar">
                            <img src={list.avatar} />
                        </div>
                        <div className="content__profile">
                            <p className="profile__name">{list.contributor}</p>
                            <p className="profile__info">{list.careerfield}  -  {list.city}</p>
                        </div>
                        <div className="content__project">
                            <p className="project__name">Projeto {list.project}</p>
                        </div>
                        <div className="action__plus" onClick={this.openInfo.bind(this,list.id)}>+</div>
                        <div className="action__minus" onClick={this.closeInfo.bind(this,list.id)}>-</div>
                    </div>
                    <div className="content__info">
                        <div className="info">
                            <div className="info__contact">
                                <div className="info__contact--align"><img src={cel}/>&nbsp;&nbsp;&nbsp;{list.contact[0].tel}</div>
                                <div className="info__contact--align"><img src={msg}/>&nbsp;&nbsp;&nbsp;{list.contact[0].email}</div>
                                <div className="info__contact--align"><img src={slack}/>&nbsp;&nbsp;&nbsp;#{list.contact[0].slack}</div>
                                <div className="info__contact--align"><img src={skype}/>&nbsp;&nbsp;&nbsp;{list.contact[0].skype}</div>
                            </div>
                            <div className="info__details">
                                <div className="details">
                                    <p className="details__title">Formação</p>
                                    <div className="details__info">
                                    Graduação: {list.skills[0].graduation[0].degree}<br/>
                                    Pós-Graduação: {list.skills[0].graduation[0].master}
                                    </div>
                                </div>
                                <div className="details">
                                    <p className="details__title">Experiência</p>
                                    <div className="details__info">
                                        {list.skills[0].experience}
                                    </div>
                                </div>
                                <div className="details">
                                    <p className="details__title">Ferramentas</p>
                                    <div className="details__info">
                                        {list.skills[0].knowleges[0].tools}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div className="content">{employeeListComponent}</div>
        )
    }
}
