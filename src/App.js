import React from 'react'
import './App.css'

//import pages ( components )
import Footer from './components/Footer/Footer.module'
import Header from './components/Header/Header.module'
import Main from './components/Main/Main.module'
// import NotFound from './components/404/404.module'
// import AboutStudent from './components/AboutStudent/AboutStudent.module'
// import AchievementsCatalog from './components/AchievementsCatalog/AchievementsCatalog.module'
// import AddClass from './components/AddClass/AddClass.module'
// import AddWorkProgramForm from './components/AddWorkProgramForm/AddWorkProgramForm.module'
// import AddPostForm from './components/AddPostForm/AddPostForm.module'
// import AddTask from './components/AddTask/AddTask.module'
// import AnotherNews from './components/AnotherNews/AnotherNews.module'
// import AwardMaterialGenerating from './components/AwardMaterialGenerating/AwardMaterialGenerating.module'
// import AwardMaterialsCatalog from './components/AwardMaterialsCatalog/AwardMaterialsCatalog.module'
// import BalancePage from './components/BalancePage/BalancePage.module'
// import CatalogVideo from './components/CatalogVideo/CatalogVideo.module'
// import CerificateCatalog from './components/CertificateCatalog/CertificateCatalog.module'
// import ClassDetail from './components/ClassDetail/ClassDetail.module'
// import CompetitionsPage from './components/CompetitionsPage/CompetitionsPage.module'
// import СontentProgramPage from './components/СontentProgramPage/СontentProgramPage.module'
// import CreateTest from './components/CreateTest/CreateTest.module'
// import DescribeStudent from './components/DescribeStudent/DescribeStudent.module'
// import DetailedPage from './components/DetailedPage/DetailedPage.module'
// import EducationalМaterialsCatalog from './components/EducationalМaterialsCatalog/EducationalМaterialsCatalog.module'
// import FavoritesVideo from './components/FavoritesVideo/FavoritesVideo.module'
// import InteractiveTasksCatalog2 from './components/InteractiveTasksCatalog2/InteractiveTasksCatalog2.module'
// import JobTitle from './components/JobTitle/JobTitle.module'
// import ListCourses from './components/ListCourses/ListCourses.module'
// import MaterialsPage from './components/MaterialsPage/MaterialsPage.module'
// import NameClass from './components/NameClass/NameClass.module'
// import NameConferences from './components/NameConferences/NameConferences.module'
// import NewsCatalog from './components/NewsCatalog/NewsCatalog.module'
// import NewTask from './components/NewTask/NewTask.module'
// import ProfileDetail from './components/ProfileDetail/ProfileDetail.module'
// import ProfileEditing from './components/ProfileEditing/ProfileEditing.module'
// import PublicationCatalog from './components/PublicationCatalog/PublicationCatalog.module'
// import PublicationDetail from './components/PublicationDetail/PublicationDetail.module'
// import RatingPage from './components/RatingPage/RatingPage.module'
// import TaskPage2 from './components/TaskPage2/TaskPage2.module'
// import TasksPage from './components/TasksPage/TasksPage.module'
// import TestsCatalog from './components/TestsCatalog/TestsCatalog.module'
// import TestsDetailPage from './components/TestsDetailPage/TestsDetailPage.module'
// import WebinarCatalog from './components/WebinarCatalog/WebinarCatalog.module'
// import WebinarDetail from './components/WebinarDetail/WebinarDetail.module'
// import СontentProgramPage from './components/СontentProgramPage/СontentProgramPage.module'
// import WorkingProgramsCatalog from './components/WorkingProgramsCatalog/WorkingProgramsCatalog.module'



class App extends React.Component{

  render(){
    return (
      
      <>
        <div className="wrapper">
          <Header />
          <Main />
        </div>
        <Footer />
      </>
  
    );
  }

}

export default App;
