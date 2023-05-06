import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="resources">
        <h2>Links</h2>
        <ul>
          <li>link</li>
          <li>link</li>
          <li>link</li>
        </ul>
      </div>
      <div className="icon">
        <FacebookIcon className="fb" />
        <InstagramIcon className="insta" />
        <TwitterIcon className="twitter" />
        <PinterestIcon className="pinterest" />
        <YouTubeIcon className="yt" />
        <LinkedInIcon className="linked" />
      </div>
    </div>
  );
}

export default Footer;
