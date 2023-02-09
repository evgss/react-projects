import './achievements.css'

export default function Achievements() {
    return (
        <div className='achievements'>

            <div className="achievements__head">
                <div className='achievements__line'>
                </div>
                <div className="achievements__title">В эксплуатации <br/> и на обслуживании</div>
            </div>

            <div className="achievements__info">
                <div className="achievements__source">
                    <span className='achievements__digits'>10</span> источников <br/> тепловой энергии
                </div>
                <div className="achievements__net">
                   Свыше <span className='achievements__digits'>10</span> километров <br/>  тепловых сетей
                </div>
                <div className="achievements__underground">
                    <span className='achievements__digits'>22</span> подземных <br/> водоисточника
                </div>
                <div className="achievements__water">
                  Свыше  <span className='achievements__digits'>170</span> км <br/> водопроводных сетей
                </div>
                <div className="achievements__square">
                   Свыше <span className='achievements__digits'>22000</span>  м<sup>2</sup> <br/>площади многоквартирного жилого фонда.
                </div>
            </div>


        </div>
    )
}
