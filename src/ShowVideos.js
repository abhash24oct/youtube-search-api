import React,{Component} from 'react';

class ShowVideos extends Component{

    constructor(props){
        super(props);

        this.state={
            videoId:""
        }
    }
    componentDidMount(){
        if(this.props.videoList.results.length>0){
            this.setState({
                videoId :this.props.videoList.results[0].videoId
            })
        }
    }
    showVideo(videoId){

        console.log(videoId+" yes ");
        this.setState({
            videoId 
        });
    }
    render(){
        console.log(this.props.videoList);
        let x="";
        let y="";
        if(this.props.videoList.results.length>0){
                console.log(this.props.videoList);
                 x=this.props.videoList.results.map((item,i)=>{
                     
                  return (
                    <div className="box-wrapper" key={i+'box'}  onClick={this.showVideo.bind(this,item.videoId)}>
                        <div className="thumbnail" key={i+'thmb'} onClick={this.showVideo.bind(this,item.videoId)} >
                            <img src={item.thumbnail} />
                        </div>
                        <div key={i} className="video-thmb">
                                {item.title}    
                        </div>   
                    </div>      
                    )
                });

               
                let srcUrl=`https://www.youtube.com/embed/${this.state.videoId}`;
                console.log("Embeded url "+srcUrl);     
                y= <iframe width="560" height="315"
                src={srcUrl} frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen></iframe>
                
        }        
        return(
            <div>
                <div id="framecontainer">
                      {y}
                </div>
                <div id="video-container"> 
                    {x}
                </div>
            </div>
        )
    }
}

export default ShowVideos;