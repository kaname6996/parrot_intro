import React, { Component } from 'react'
import './index.css'


export default class Extinct extends Component {
    render() {
        return (
            <div className='extinct'>
                <div className="extinctbox">
                    <div className="pic"><img src="parrot_intro/media/extinct1.jpg" alt="" /> </div>
                    <div className="txt">
                        <div>《里約大冒險》 主角鸚鵡在野外已經滅絕</div>
                        <p>著名動畫電影《里約大冒險》(Rio)裡的人氣明星：斯皮克斯金剛鸚鵡(Spix's Macaw)，據信在野外已經完全滅絕...</p>
                        <p style={{textAlign:'right'}}> <a href='https://pets.ettoday.net/news/1254020' target="_blank"  rel="noreferrer" >繼續閱讀...</a></p>
                    </div>
                </div>
                <div className="extinctbox">
                    <div className="txt">
                        <div>2020年紐西蘭：極度瀕危的鴞鸚鵡</div>
                        <p>鴞鸚鵡在十九世紀後期被動物園、博物館以及收藏家獵捕、加上棲息地生態系統被干擾破壞，導致鴞鸚鵡幾乎絕跡。<br />
                        </p>
                        <p style={{textAlign:'right'}}> <a href='https://www.storm.mg/article/3211520' target="_blank"  rel="noreferrer">繼續閱讀...</a></p>
                    </div>
                    <div className="pic"><img src="parrot_intro/media/extinct2.jpg" alt="" /> </div>
                </div>
                <div className="extinctbox">
                    <div className="pic"><img src="parrot_intro/media/extinct3.jpg" alt="" /> </div>
                    <div className="txt">
                        <div>亞馬遜大火 「紫藍金剛」棲地受威脅</div>
                        <p>
                        綜合外媒報導，紫藍金剛鸚鵡在全球最大的棲地因近期大規模的野火而使當地12%的植被消失，恐導致這些鸚鵡瀕臨絕種。</p>
                        <p style={{textAlign:'right'}}> <a href='https://news.ltn.com.tw/news/world/breakingnews/3266218'target="_blank"  rel="noreferrer" >繼續閱讀...</a></p>
                    </div>
                </div>
                <div className="extinctbox">
                    <div className="txt">
                        <div>紐西蘭啄羊鸚鵡面臨3威脅剩1000隻　</div>
                        <p>世界唯一生長在高山的「啄羊鸚鵡」(kea)因外來種引進、與人類互動、當地人建屋材料所引起的鉛中毒面臨絕種危機，紐西蘭保育人士預估只剩下1000隻到1500隻。</p>
                        <p style={{textAlign:'right'}}> <a href='https://pets.ettoday.net/news/779489' target="_blank"  rel="noreferrer" >繼續閱讀...</a></p>
                    </div>
                    <div className="pic"><img src="parrot_intro/media/extinct4.jpg" alt="" /> </div>
                </div>
            </div>
        )
    }
}
