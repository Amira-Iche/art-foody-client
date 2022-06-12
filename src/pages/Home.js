
import AllPosts from '../component/AllPosts'
import CreatePost from '../component/CreatePost'
import Following from '../component/Following'
import Nav from '../component/Nav'


const Home = () => {
 

    return (
        <>
            <Nav/>  
            <div className=" flex justify-between md:flex-row sm:flex-col-reverse">
            
                <div className=" justify-between w-4/6 px-4 sm:px-0 ">
                 <AllPosts/>
                </div>
            
                <div className=" w-96 mr-5 md:mt-0 ">
                    <CreatePost/>
                    <Following/>
                </div> 
            
               
            </div>      
            
           
            
        </>
    )
}

export default Home
