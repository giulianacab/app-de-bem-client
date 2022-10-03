// 6 ícones: home, my moods, profile, telefone (sos), papo privado, programas
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';


export function Menu(
    <>
    <footer>


    //HOME
        <Link to={"/"}>
            <div className={style.homeIcon}>
                <EmojiEmotionsIcon
                    fontSize="large",
                    color="white"
                />
            </div>
        </Link>


    //MY MOODS
        <Link to={"/mymoods"}>
            <div className={style.myMoodsIcon}>
                <HomeIcon
                    fontSize="large",
                    color="white"
                />
            </div>
        </Link>


    //PROFILE
        <Link to={"/profile"}>
            <div className={style.profileIcon}>

            </div>
        </Link>


    //ERROR PAGE
        <Link to={"/errorpage"}>
            <div className={style.errorIcon}>

            </div>
        </Link>


    //COMMUNITIES
        <Link to={"/communities"}>
            <div className={style.communitiesIcon}>

            </div>
        </Link>

        //Comuniddade específica: /idCommunity


    //ERROR PAGE
        <Link to={"/errorpage"}>
            <div className={style.errorIcon}>

            </div>
        </Link>


    </footer>
    </>
)