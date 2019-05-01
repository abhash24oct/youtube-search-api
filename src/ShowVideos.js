import React,{Component} from 'react';

class ShowVideos extends Component{


    render(){
        console.log(this.props.videoList);

        return(
            <div> 
                    {this.props.videList.results.map(item=>{
                    <div key={item.videoid} className="video-thmb">
                        {item.title}   
                    </div>   
                    })}

                  
                

            </div>
        )
    }
}

export default ShowVideos;