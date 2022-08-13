import  { useEffect, useState } from 'react'
import axios from 'axios';
// import '../styles/createPost.css'




function CreatePost() {

    const [title, setTitle] = useState('')
    const [postText, setPostText] = useState('')
    const [selectedImage, setSelectedImage] = useState()
    const [preview, setPreview] = useState()

    useEffect(() => {
      if (!selectedImage) {
        setPreview(undefined)
        return
    }
      const objectUrl = URL.createObjectURL(selectedImage)
      setPreview(objectUrl)

      return () => URL.revokeObjectURL(objectUrl)
    }, [selectedImage])
    

 
    
    ////// Fetch data from 

    const  postSubmit = (e) => {
         e.preventDefault(); 
       
        const formData = new FormData();   
        formData.append("title", title)
        formData.append("postText", postText)

        if(selectedImage){
          formData.append("image", selectedImage)
          
        }

        axios.post("https://art-foody.herokuapp.com/posts", formData, {
          headers: {
             accessToken:localStorage.getItem("SecretToken")
            } 
          })
          .then(res => {
              try {
               
              } catch (error) {
                console.log("can't add post");
              } 
            })
            
            setTitle("")
            setPostText("")
            setSelectedImage("")
      
    }


    return (

     

      <div >
        <form  id="form" onSubmit={postSubmit} method='POST' encType='multipart/form-data'>
          <div className="shadow sm:rounded-md sm:overflow-hidden mt-10">
            <div className="px-4 py-5  bg-slate-100 space-y-6 sm:p-6">
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                    TITLE
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                  <input autoFocus className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        placeholder="Your Title..." required 
                        onChange={(e) => { setTitle(e.target.value)}} 
                        type="text"value={title}/> 
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                  Tell us Your Story
                </label>
                <div className="mt-1">
                  <textarea className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                   placeholder="Whats New ?" required 
                   onChange={(e) => {setPostText(e.target.value)}}
                   rows={3}
                   value={postText}/>
                </div>         
              </div>

              <div>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                     <div className="flex text-sm text-gray-600">
                    <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload an Image</span>
                        <input id="file-upload" onChange={(e) => { setSelectedImage(e.target.files[0])}}  name='image' type="file" className="sr-only" />
                      </label>
                     </div>
                  </div>
                </div>
                {selectedImage && <img src={preview} alt="preview" />}

              </div>
            </div>
            <div className="px-4 py-3 bg-slate-100 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    
 
    )
}

export default CreatePost
