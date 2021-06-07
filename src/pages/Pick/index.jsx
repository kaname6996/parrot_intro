import React, { Component } from 'react'
import './index.css'

export default class Pick extends Component {
    render() {
        return (
            <div className='pick'>
                <div className='img'> <img src="parrot_intro/media/拾獲鳥類.jpg" alt="" className='w-100 my-1' /> </div>
                <div className="container ">
                    <div className="row ">
                        <div className="col-12 col-xxl-6">
                            <div className="txt h-100 ">
                                <h5>首｜先動作</h5>
                                <p>野鳥救傷通報與收容的案例，絕大多是拾獲到剛離巢的幼鳥。許多鳥類的幼鳥剛離巢時，外觀圓短、可站立和短距離移動，但飛行能力較弱，習慣被動待在原地等待親鳥回來餵食，經常讓人誤以為不會飛。此階段在學習飛行過程中若稍有差錯，就容易掉落地面，因而被人發現或遭遇其他潛在危險。自然少干擾的情形下，親鳥會引導待在地面的幼鳥，慢慢移動到安全的地方或就近育雛，這是鳥類學習求生的重要過程。</p>
                                <p>因此若您有發現類似狀況，請<span>不要著急</span>出手幫忙，建議先保持距離觀察，若有立即的危險如車輛、野貓野犬等迫近，再將其移動至鄰近的樹木、灌叢或相對高的平台。由於幼鳥很有可能因躁動或緊張繼續亂跳，放置後請保持一段距離再觀察，也讓周遭的鳥爸媽減少警戒。</p>
                                <p> <u>最重要是先把鳥擦乾，注意保暖，並且千萬不要餵食，餵食並不是最急迫需要的，不清楚食性和身體狀況貿然餵食可能會造成不可逆的傷害。</u></p>
                            </div>
                            </div>
                        <div className="col-12 col-xxl-6 ">
                            
                            <div className="txt h-100 my-3 my-xxl-0">
                                <div ><h5>再｜來聯絡</h5>
                                <p>如果發現野鳥有明顯外傷、動作不協調、精神不佳或其他各種案例，建議優先<a href='https://www.bird.org.tw/basicpage/117?fbclid=IwAR32qTbWKcpAJpOG_KwpyuhPf6q_KTArMJuD18MvuIemBwWdG-C_08DHdpI' target="_blank"  rel="noreferrer">電話諮詢</a>，並聽從專業建議的判斷或指示，請勿急於移送救傷收容單位，避免錯誤的處理方式造成鳥隻二次傷害，或健康的野鳥因誤會而被帶離棲地。</p>
                                
                                </div>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}
