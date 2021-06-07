import React, { Component } from 'react'
import './index.css'

export default class Breed extends Component {
    constructor(props) {
        super(props);
        this.parrotulpic = [];
    }


    state={
        pic:[
        {id:'01',name:'太平洋',pic:'media/太平洋.jpg'},
        {id:'02',name:'愛情鳥',pic:'media/愛情鳥.jpg'},
        {id:'03',name:'玄鳳',pic:'media/玄鳳.jpg'},
        {id:'04',name:'橫斑',pic:'media/橫斑.jpg'},
        {id:'05',name:'凱克',pic:'media/凱克.png'},
        {id:'06',name:'金太陽',pic:'media/金太陽.jpg'},
        {id:'07',name:'巴丹',pic:'media/巴丹.jpg'},
        {id:'08',name:'灰鸚',pic:'media/灰鸚.jpg'},
        {id:'09',name:'和尚',pic:'media/和尚.jpg'},
    ],
        breed_picbox:false,
        img:''
    }

    magnifier=(key)=>{
        //放大圖片
        const {breed_picbox}=this.state //state
        this.setState({breed_picbox:!breed_picbox})
        //找到圖片
        const{parrotulpic}=this
        //console.log(parrotulpic[key])
        this.setState({img:parrotulpic[key]})
        
        
    }
    close=()=>{
        
        const {breed_picbox}=this.state
        this.setState({breed_picbox:!breed_picbox})
    }


    render() {
        const{pic,breed_picbox}=this.state
        return (
            <div className='ul'>
                <ul className='parrotul'>
                    {
                        pic.map((c,key)=>{
                            return(
                                <li key={c.id} >
                                <div className='txt' onClick={()=>this.magnifier(key)}>{c.name}</div>
                                <img src={c.pic} alt="..." ref={parrotulpic=>this.parrotulpic[key]=parrotulpic} title='資料來源：阿迷購' />
                                </li>
                            )
                        })
                    }
                </ul>
                <div onClick={this.close} className={breed_picbox?'breed_picbox':'breed_picboxx'} ref={breedpicbox=>this.breedpicbox=breedpicbox}> <img src={this.state.img.src} alt="" title='資料來源：阿迷購' /> </div>
            </div>
        )
    }
}
