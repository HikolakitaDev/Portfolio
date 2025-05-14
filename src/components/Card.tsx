
import './card.css';
import HikolakitaLogo from '../assets/Hikolakita_ProLogo_Green.png';
import Waves from '../assets/waves.png';
import YoutubeLogo from '../assets/youtubeLogo.png';
import GithubLogo from '../assets/githubLogo.png';
import DevLogo from '../assets/devLogo.png';


function Card() {
    return (
        <div className="card-container">
            <div className="card-content">
                <img src={Waves} className='waves'/>
                <img src={HikolakitaLogo} alt="Hikolakita" className='hikolakita-logo' />
                <p className='hikolakita-text'>Hikolakita</p>
                <p className="card-description">An indepedent frontend developer based in France.</p>
                <div className="logos-container">
                    <a href="https://www.youtube.com/@Hikolakita3" target='_blank' style={{textDecoration: 'none'}}><img src={YoutubeLogo} alt="Youtube" className='logos' /></a>
                    <a href="https://github.com/HikolakitaDev" target='_blank' style={{textDecoration: 'none'}}><img src={GithubLogo} alt="Github" className='logos' /></a>
                    <a href="https://dev.to/hikolakita" target='_blank' style={{textDecoration: 'none'}}><img src={DevLogo} alt="Dev" className='logos' /></a>
                </div>

            </div>
        </div>
    )
}

export default Card;