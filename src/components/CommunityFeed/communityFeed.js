import CreateComment from "../CreateComment/createComment";

export function CommunityFeed(props){
    return(
        <div className="communityFeed">

            <div className="boxCommunityFeed">
                <div className="dateCommunityFeed">
                    <h6 className="dateTxtCommunityFeed">{props.createdAt.slice(0,10)} às {props.createdAt.slice(11,16)}</h6>
                </div>

                <div className="titleCommunityFeed">
                    <h2 className="titleTxtCommunityFeed">{props.title}</h2>
                </div>

                <div className="bodyCommunityFeed">
                    <h3 className="bodyTxtCommunityFeed">{props.body}</h3>
                </div>
            
                <CreateComment />
                
            </div>

        </div>
        
    )
}