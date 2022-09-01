
export default function feed( { Feed }) {

    console.log(Feed);
    return(
        <div className= 'page-container'>
        
        <div className = 'Main'>
            <h1>Feed</h1>
            <div className ='title'>
            <h3>{ Feed.title }</h3>
            
            <img clasName='img1' src ={Feed.image} />
            <p> {Feed.description}</p>
            </div>
        </div>
        </div>
        
    );
};

export async function getServerSideProps(context)  {
    const apiResponse = await fetch(  'https://newsapi.org/v2/everything?q=tesla&from=2022-08-01&sortBy=publishedAt&apiKey=b1658350096e446ead7d0d5b8faa5098',);
    const Feed = await apiResponse.json();

    return{
        props: {
            Feed
        }
    }

};

    
    
