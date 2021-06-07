import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

import './index.css'
import Nav from '../../components/Nav'
 class About extends Component {

    state={news:[
        {id:'01',name:'研究：這種鸚鵡為躲避人類才搬到高山上棲息',txt:'在新西蘭的高山上，生活著世界上唯一一種高山鸚鵡，英文名叫Kea。這種鸚鵡因經常襲擊山區的綿羊，被稱為「啄羊鸚鵡」，又因生性好奇，經常被登山的人們吸引，甚至有可能會翻檢遊人的隨身物品。',url:'https://www.epochtimes.com/b5/21/6/1/n12990383.htm',pic:'parrot_intro/media/Kea.jpg'},
        {id:'02',name:'一野生金剛鸚鵡 每天飛動物園「找真愛」',txt:'根據《美聯社》的報導，巴西熱內盧（Rio de Janeiro）的一處動物園，每天都會從外地飛來1隻野生的藍黃金剛鸚鵡，而且持續20年之久，因此園方對於這隻野生鸚鵡相當熟悉，還為牠取名為茱麗葉（Juliet）並持續觀察牠的一舉一動。',url:'https://www.chinatimes.com/hottopic/20210510004040-260809?chdtv',pic:'parrot_intro/media/news2.jpg'},
        {id:'03',name:'雲林街頭出現鸚鵡！ 7隻金剛鸚鵡排排站機車超拉風',txt:'有民眾拍到騎士機車上排站9隻鸚鵡兜風，PO網引起熱烈討論；鳥主「依藤」今天表示，養鸚鵡已6年，當天是載著鸚鵡到河堤「放飛」，若嚇到民眾真得很抱歉。',url:'https://news.ltn.com.tw/news/life/breakingnews/3459049',pic:'parrot_intro/media/news3.jpg'},
    ],
    show:false    
}

    Goto=(e)=>{
        this.props.history.push(`/${e}`)
    }
    show=()=>{
        const{show}=this.state
        this.setState({show:!show})
    }


    render() {
        const{news,show}=this.state

        return (
            <div>
                <Nav/>
            <div className='about'>
                <hr />
                <div style={{fontSize:'15px',marginTop: 30,marginBottom:30}}>｜ 關於鸚鵡 About Parrot </div>
                <div style={{color:'#66657a'}}>
                    大部分鸚鵡都是十分美麗的鳥類，某些種類經過訓練後還可以模仿人說話，經常被飼養作家裡的寵物，是人類良好的陪伴者之一。
                    <br />
                    Most of parrot are very beautiful birds. <br />
                    There are some pets that can learn skills after training. And often regarded as pets  and are one of human's good companions.                
                </div>
                <div style={{color:'#66657a'}}>
                    常見的有虎皮鸚鵡、玄鳳鸚鵡和牡丹鸚鵡等。
                    <br /> 
                    Common are Melopsittacus undulatus, Nymphicus hollandicus and Agapornis spp.
                </div>
                <hr />
                <div className='boxpic'>
                    <div>
                        <img src="parrot_intro/media/menu1.jpeg" alt="" />
                        <div className='txt' onClick={()=>this.Goto('breed')} >家養種類</div>
                    </div>
                    <div>
                        <img src="parrot_intro/media/menu2.jpeg" alt="" />
                        <div className='txt' onClick={()=>this.Goto('note')}>飼養須知</div>
                    </div>
                    <div>
                        <img src="parrot_intro/media/menu3.jpeg" alt="" />
                        <div className='txt' onClick={()=>this.Goto('extinct')}>瀕臨絕種</div>
                    </div>
                    <div>
                        <img src="parrot_intro/media/menu4.jpeg" alt="" />
                        <div className='txt' onClick={()=>this.Goto('pick')}>拾獲鳥類</div>
                    </div>
                </div>
                <hr />

                <div style={{fontSize:'15px',marginTop: 30,marginBottom:30}}>｜ 影片介紹 VIDEOS </div>
                <div className='video'>
                    <div>
                        <img src="parrot_intro/media/youtube.jpg" alt="" />
                        <div className='txt'><a href='https://www.youtube.com/watch?v=Ge4dm4MCDaI'  target="_blank"  rel="noreferrer">點我觀看</a></div>
                    </div>
                    <div className='about' style={{fontSize:15}}>
                        影片名稱：【從零開始養】鸚鵡!哪種鸚鵡會說髒話回電話?獸醫推薦好養鸚鵡?鸚鵡吃什麼?鸚鵡籠子推薦?【許伯簡芝】parrot
                        <br />
                        <span style={{color:'gray',fontSize:13}}>影片介紹：於台中羽森林動物醫院拍攝，獸醫師介紹了尋常人家飼養鸚鵡的品種、飼養需要注意的地方、鸚鵡的基本習性，另外還有介紹了適合一般住家飼養的鸚鵡。</span>
                    </div>
                </div>
                <hr />
                <div style={{fontSize:'15px',marginTop: 30,marginBottom:30}}>｜ 最新新聞 NEWS </div>
                <div className='news'>
                    <div>
                    {
                        news.map((c)=>{
                            return(
                                <div className="card mb-3" key={c.id}>
                                <div className="row g-0" style={{alignItems:'center'}}>
                                    <div className="col-md-4">
                                    <img src={c.pic} alt="..."/>
                                    </div>
                                    <div className="col-md-8">
                                    <div className="card-body">
                                        <h6 className="card-title">{c.name}</h6>
                                        <p className="card-text">{c.txt}</p>
                                        <p className="card-text" style={{textAlign:'right'}}><small className="text-muted" ><a href={c.url}   target="_blank"  rel="noreferrer">繼續閱讀...</a></small></p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                        )
                        })
                    }
                    </div>
                </div>
                <hr />
                {/* 左上懸浮巴丹 */}
                <div className='left'>
                    <img src="parrot_intro/media/2454492.png" alt="" onClick={this.show} />
                    <div className={show?'txt p-1 p-md-2':'txtx'}>
                        <a href='https://www.facebook.com/RRGTaiwan/' target="_blank"  rel="noreferrer">台灣猛禽研究會</a><br />
                        <a href='https://www.facebook.com/WildOne2017/' target="_blank"  rel="noreferrer">野灣野生動物保育協會</a>
                        </div>
                    </div>
            </div>
            </div>
        )
    }
}
export default withRouter(About)