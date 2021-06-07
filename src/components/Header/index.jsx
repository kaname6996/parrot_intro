import React, { Component } from 'react'
import {withRouter,Redirect,Route} from 'react-router-dom'
import About from '../../pages/About'
import Breed from '../../pages/Breed'
import Extinct from '../../pages/Extinct'
import Note from '../../pages/Note'
import Pick from '../../pages/Pick'
import './index.css'

 class Header extends Component {

    Goto=(e)=>{
        this.props.history.push(`/${e}`)
    }


    render() {
        return (
            <div className='header'>
                <img src="media/logo.jpg" alt="" onClick={()=>this.Goto('about')} />
                <div className='list'>
                    <div onClick={()=>this.Goto('about')}>關於我們</div>
                    <div onClick={()=>this.Goto('breed')}>家養種類</div>
                    <div onClick={()=>this.Goto('note')}>飼養須知</div>
                    <div onClick={()=>this.Goto('extinct')}>瀕臨絕種</div>
                    <div onClick={()=>this.Goto('pick')}>拾獲鳥類</div>
                    <Redirect to='/about'/>
                </div>
               <Route path='/about' component={About}/>
               <Route path='/breed' component={Breed}/>
               <Route path='/extinct' component={Extinct}/>
               <Route path='/note' component={Note}/>
               <Route path='/pick' component={Pick}/>
            </div>
            
        )
    }
}
export default withRouter(Header)