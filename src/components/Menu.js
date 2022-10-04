// 6 ícones: home, my moods, profile, telefone (sos), papo privado, programas
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ForumIcon from '@mui/icons-material/Forum';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import style from "./menu.style.css";


export default function Menu() {
    <>
    <footer>


    {/* HOME */}
        <Link to={"/"}>
            <div className={style.homeIcon}>
                <HomeIcon
                    fontSize="large"
                    color="white"
                />
            </div>
        </Link>


    {/* MY MOODS */}
        <Link to={"/mymoods"}>
            <div className={style.myMoodsIcon}>
                <EmojiEmotionsIcon
                    fontSize="large"
                    color="white"
                />
            </div>
        </Link>


    {/* PROFILE */}
        <Link to={"/profile"}>
            <div className={style.profileIcon}>
                <PersonIcon
                    fontSize="large"
                    color="white"
                />
            </div>
        </Link>


    {/* SOS */}
        <Link to={"/errorpage"}>
            <div className={style.errorIcon}>
                <LocalPhoneIcon
                    fontSize="large"
                    color="white"
                />
            </div>
        </Link>


    {/* COMMUNITIES */}
        <Link to={"/communities"}>
            <div className={style.communitiesIcon}>
                <ForumIcon
                    fontSize="large"
                    color="white"
                />
            </div>
        </Link>

        //Comuniddade específica: /idCommunity


    {/* PROGRAMS */}
        <Link to={"/errorpage"}>
            <div className={style.errorIcon}>
                <VideoLibraryIcon
                    fontSize="large"
                    color="white"
                />
            </div>
        </Link>


    </footer>
    </>
};