import React, { useState } from 'react'
import SearchForm from './components/SearchForm'
import Datadisplay from './components/Datadisplay'
import RepoForm from './components/RepoForm'
import Pagination from './Pagination'

export default function App() {
  const [userData,setUserData] = useState(null)
  const [repos,setRepos] = useState([])
  const [currentPage,setCurrentPage] = useState(1)
  const [perPage] =useState(5)
  const [page,setPage] = useState(1)
  const fetchData = async(username)=>{
    try{
       const userResponse =await fetch(`https://api.github.com/users/${username}`)
       if(userResponse.ok){
        const userData = await userResponse.json()
        setUserData(userData)
        console.log(userData)

        //fetch repositories
        const repoResponse = await fetch(`${userData.repos_url}?page=${page}`)
        if(repoResponse.ok){
          const reposData = await repoResponse.json()
          setRepos(reposData)
          console.log(reposData)
        }else {
          throw new Error("Failed to fetch any user repository")
        }
       } else {
        throw new Error("User Not Found")
       }
      } catch(error){
        console.log(error)
        setUserData(null)
      }
  }
  const indexOfLastRepo = currentPage * perPage
  const indexOfFirstRepo =  indexOfLastRepo - perPage
  const currentRepos = repos.slice(indexOfFirstRepo,indexOfLastRepo)
  const paginate =(pageNumber) =>{
    setCurrentPage(pageNumber)
  }
  return (
    <div className='app'>
      <h1>GitHub user Finder</h1>
      <SearchForm fetchData = {fetchData}/>
      {userData && <Datadisplay user={userData}/>}
      {currentRepos.length>0?(
        <>        <RepoForm repos={currentRepos} page={page} setPage={setPage}/>
        <Pagination 
        totalRepos={repos.length}
        reposPerPage={perPage}
        currentPage={currentPage}
        paginate={paginate}/>
        </>
      ):(
        <div>
          <p>No Repository Found</p>
        </div>
      )}
      
    </div>
  )
}
