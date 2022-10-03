// 6 ícones: home, my moods, profile, telefone (sos), papo privado, programas


export function Menu(
    <>
    <footer>


    //HOME
        <Link to={"/"}>
            <div className={style.homeIcon}>

            </div>
        </Link>


    //MY MOODS
        <Link to={"/mymoods"}>
            <div className={style.myMoodsIcon}>

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