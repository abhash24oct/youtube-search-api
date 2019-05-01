import React,{Component} from 'react';

class ShowVideos extends Component{


    render(){
        console.log(this.props.videoList);
        let x="";
        if(this.props.videoList.results!=[]){
                console.log(this.props.videoList);
                 x=this.props.videoList.results.map((item,i)=>{
                  return ( <div key={i} className="video-thmb">
                        {item.title}    
                      </div>   
                    )
                });
        }        
        return(
            <div> 
                {x}
            </div>
        )
    }
}

export default ShowVideos;