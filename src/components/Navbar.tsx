import './navbar.css';
import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';
import BuildIcon from '@mui/icons-material/Build';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { Link } from 'react-scroll';

function ResponsiveAppBar() {
  return (
    <div className="nav-container">
      <div className="main-nav">
        {/* Link components for smooth scrolling */}
        <div className="icon-wrapper" id="home-icon-wrapper">
          <Link to="home-section" smooth={true} duration={500}>
            <HomeIcon sx={{ fontSize: 27, color: "black" }} />
          </Link>
        </div>
        <div className="icon-wrapper" id="folder-icon-wrapper">
          <Link to="projects-section" smooth={true} duration={500}>
            <FolderIcon sx={{ fontSize: 27, color: "black" }} />
          </Link>
        </div>
        <div className="icon-wrapper" id="build-icon-wrapper">
          <Link to="skills-section" smooth={true} duration={500}>
            <BuildIcon sx={{ fontSize: 27, color: "black" }} />
          </Link>
        </div>
        <div className="icon-wrapper" id="emoji-events-icon-wrapper">
          <Link to="awards-section" smooth={true} duration={500}>
            <EmojiEventsIcon sx={{ fontSize: 27, color: "black" }} />
          </Link>
        </div>
        <div className="icon-wrapper" id="contact-page-icon-wrapper">
          <Link to="contact-section" smooth={true} duration={500}>
            <ContactPageIcon sx={{ fontSize: 27, color: "black" }} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveAppBar;
