import "../../index.css";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

export function MyMoods(){
    const { loggedInUser } = useContext(AuthContext);

    return (
        <>
    
            <Header where="My Moods" name={loggedInUser.user.name} />



        
        {/* TITLE MOOD FEED */}
        <div className="divTitlePageMoodFeed">
            <h1 className="txtTitlePageMoodFeed">Meu histórico de humor:</h1>
        </div>


        {/* MOOD FEED */}
        <div className="moodFeed">
            {/* DAY1 */}
            <div className="boxMoodFeed">
                    <div className="imgHumorMoodFeed">
                        <img src="https://svgshare.com/i/n86.svg" className="benzinhaOfThisDay" alt="humorOfThisDay"></img>
                    </div>

                <div className="textsMoodFeed">
                    <div className="dateMoodFeed">
                        <h6 className="dateTxtMoodFeed">23/04/2022</h6>
                    </div>
                    <div className="nameHumorMoodFeed">
                        <h4 className="nameTxtHumorMoodFeed">De bem</h4>
                    </div>
                    <div className="msgHumorMoodFeed">
                        <h5 className="msgTxtHumorMoodFeed">Aqui vai um comentário (opcional) da pessoa sobre o dia dela</h5>
                    </div>
                </div>

            </div>

        {/* OS DIAS A SEGUIR ERAM APENAS PARA TESTAR O
        SCROLL DA PÁGINA E DEIXAR CONFIGURADO CERTINHO */}

            {/* DAY2 */}
            <div className="boxMoodFeed">
                    <div className="imgHumorMoodFeed">
                        <img src="https://svgshare.com/i/n86.svg" className="benzinhaOfThisDay" alt="humorOfThisDay"></img>
                    </div>

                <div className="textsMoodFeed">
                    <div className="dateMoodFeed">
                        <h6 className="dateTxtMoodFeed">23/04/2022</h6>
                    </div>
                    <div className="nameHumorMoodFeed">
                        <h4 className="nameTxtHumorMoodFeed">De bem</h4>
                    </div>
                    <div className="msgHumorMoodFeed">
                        <h5 className="msgTxtHumorMoodFeed">Aqui vai um comentário (opcional) da pessoa sobre o dia dela</h5>
                    </div>
                </div>
                
            </div>



            {/* DAY3 */}
            <div className="boxMoodFeed">
                    <div className="imgHumorMoodFeed">
                        <img src="https://svgshare.com/i/n86.svg" className="benzinhaOfThisDay" alt="humorOfThisDay"></img>
                    </div>

                <div className="textsMoodFeed">
                    <div className="dateMoodFeed">
                        <h6 className="dateTxtMoodFeed">23/04/2022</h6>
                    </div>
                    <div className="nameHumorMoodFeed">
                        <h4 className="nameTxtHumorMoodFeed">De bem</h4>
                    </div>
                    <div className="msgHumorMoodFeed">
                        <h5 className="msgTxtHumorMoodFeed">Aqui vai um comentário (opcional) da pessoa sobre o dia dela</h5>
                    </div>
                </div>
                
            </div>




            {/* DAY4 */}
            <div className="boxMoodFeed">
                    <div className="imgHumorMoodFeed">
                        <img src="https://svgshare.com/i/n86.svg" className="benzinhaOfThisDay" alt="humorOfThisDay"></img>
                    </div>

                <div className="textsMoodFeed">
                    <div className="dateMoodFeed">
                        <h6 className="dateTxtMoodFeed">23/04/2022</h6>
                    </div>
                    <div className="nameHumorMoodFeed">
                        <h4 className="nameTxtHumorMoodFeed">De bem</h4>
                    </div>
                    <div className="msgHumorMoodFeed">
                        <h5 className="msgTxtHumorMoodFeed">Aqui vai um comentário (opcional) da pessoa sobre o dia dela</h5>
                    </div>
                </div>
                
            </div>



            {/* DAY5 */}
            <div className="boxMoodFeed">
                    <div className="imgHumorMoodFeed">
                        <img src="https://svgshare.com/i/n86.svg" className="benzinhaOfThisDay" alt="humorOfThisDay"></img>
                    </div>

                <div className="textsMoodFeed">
                    <div className="dateMoodFeed">
                        <h6 className="dateTxtMoodFeed">23/04/2022</h6>
                    </div>
                    <div className="nameHumorMoodFeed">
                        <h4 className="nameTxtHumorMoodFeed">De bem</h4>
                    </div>
                    <div className="msgHumorMoodFeed">
                        <h5 className="msgTxtHumorMoodFeed">Aqui vai um comentário (opcional) da pessoa sobre o dia dela</h5>
                    </div>
                </div>
                
            </div>



            {/* DAY6 */}
            <div className="boxMoodFeed">
                    <div className="imgHumorMoodFeed">
                        <img src="https://svgshare.com/i/n86.svg" className="benzinhaOfThisDay" alt="humorOfThisDay"></img>
                    </div>

                <div className="textsMoodFeed">
                    <div className="dateMoodFeed">
                        <h6 className="dateTxtMoodFeed">23/04/2022</h6>
                    </div>
                    <div className="nameHumorMoodFeed">
                        <h4 className="nameTxtHumorMoodFeed">De bem</h4>
                    </div>
                    <div className="msgHumorMoodFeed">
                        <h5 className="msgTxtHumorMoodFeed">Aqui vai um comentário (opcional) da pessoa sobre o dia dela</h5>
                    </div>
                </div>
                
            </div>
        
        </div>







        {/* MENU */}
        <div className="footer">
        {/* HOME */}
        <Link to={"/"}>
            <div className="homeIcon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
                </svg>
            </div>
        </Link>


        {/* MY MOODS */}
        <Link to={"/mymoods"}>
            <div className="myMoodsIcon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zM4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z"/>
                </svg>
            </div>
        </Link>


        {/* PROFILE */}
        <Link to={"/profile"}>
            <div className="profileIcon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
            </div>
        </Link>


        {/* SOS */}
        <Link to={"/errorpage"}>
            <div className="errorIcon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                </svg>
            </div>
        </Link>


        {/* COMMUNITIES */}
        <Link to={"/communities"}>
            <div className="communitiesIcon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15Zm0-9.007c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
                </svg>
            </div>
        </Link>

            {/* Comuniddade específica: /idCommunity */}


        {/* PROGRAMS */}
        <Link to={"/errorpage"}>
            <div className="errorIcon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm6.258-6.437a.5.5 0 0 1 .507.013l4 2.5a.5.5 0 0 1 0 .848l-4 2.5A.5.5 0 0 1 6 12V7a.5.5 0 0 1 .258-.437z"/>
                </svg>
            </div>
        </Link>
        </div>


        </>
)}
