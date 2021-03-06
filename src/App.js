import { useState, useEffect } from 'react'

import StyledApp from './App.styled'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styles/Global'

import Header from './components/Header'
import AlbumsContainer from './components/AlbumsContainer'
import AlbumDetails from './components/AlbumDetails'

const theme = {
  colors: {
    body: '#000'
  },
  bgColors: {
    body: '#FFF'
  },
  fonts: {
    body: `'Roboto', sans-serif`
  }
}


function App() {

  const [albumsData, setAlbumsData] = useState([{
    id: 1,
    queryParamValue: 'The%20Red%20Hot%20Chili%20Peppers',
    name: 'The Red Hot Chili Peppers',
    date: '1984-08-10'
  }, {
    id: 2,
    queryParamValue: 'Freaky%20Styley',
    name: 'Freaky Styley',
    date: '1985-08-16'
  }, {
    id: 3,
    queryParamValue: 'The%20Uplift%20Mofo%20Party%20Plan',
    name: 'The Uplift Mofo Party Plan',
    date: '1987-09-29'
  }, {
    id: 4,
    queryParamValue: 'Mother\'s%20Milk',
    name: 'Mother\'s Milk',
    date: '1989-08-16'
  }, {
    id: 5,
    queryParamValue: 'Blood%20Sugar%20Sex%20Magik',
    name: 'Blood Sugar Sex Magik',
    date: '1991-09-24'
  }, {
    id: 6,
    queryParamValue: 'One%20Hot%20Minute',
    name: 'One Hot Minute',
    date: '1995-09-12'
  }, {
    id: 7,
    queryParamValue: 'Californication',
    name: 'Californication',
    date: '1999-06-08'
  }, {
    id: 8,
    queryParamValue: 'By%20the%20Way',
    name: 'By the Way',
    date: '2002-07-09'
  }, {
    id: 9,
    queryParamValue: 'Stadium%20Arcadium',
    name: 'Stadium Arcadium',
    date: '2006-05-09'
  }, {
    id: 10,
    queryParamValue: 'I\'m%20with%20You',
    name: 'I\'m with You',
    date: '2011-08-29'
  }, {
    id: 11,
    queryParamValue: 'The%20Getaway',
    name: 'The Getaway',
    date: '2016-06-17'
  }, {
    id: 12,
    queryParamValue: 'Unlimited%20Love',
    name: 'Unlimited Love',
    date: '2022-04-1'
  }])
  const [filteredAlbumsData, setFilteredAlbumsData] = useState([])
  const [searchKeyword, setSearchKeyword] = useState('')
  const [showAlbumDetails, setShowAlbumDetails] = useState(false)
  const [selectedAlbumCardData, setSelectedAlbumCardData] = useState({})

  useEffect( () => {
      if (searchKeyword && searchKeyword.length > 3){
        let filteredData = [...albumsData].filter( album => album.name.toLocaleLowerCase().includes(searchKeyword.toLocaleLowerCase()))
        setFilteredAlbumsData(filteredData)
      } else {
        setFilteredAlbumsData([])
      }
  }, [searchKeyword])
  

  //Search Album input
  const handleSearchChange = e => {
    const { value } = e.target
    setSearchKeyword(value)
  }

  //Sort by date btn
  const handleSortByDateClick = e => {
    const sortedData = [...albumsData].sort((a, b) => {
      let dateA = new Date(a.date)
      let dateB = new Date(b.date)
      return dateB - dateA
    })

    setAlbumsData(sortedData)
  }

  //Sort by date btn
  const handleSortByNameClick = e => {
    const sortedData = [...albumsData].sort((a, b) => {
      let nameA = a.name.toLowerCase()
      let nameB = b.name.toLowerCase()
  
      if (nameA < nameB) {
      return -1;
      }
      if (nameA > nameB) {
      return 1;
      }
      return 0;
      })

      setAlbumsData(sortedData)
  }

  // Display de details of the selected album
  const handleAlbumCardClick = data => {
  setShowAlbumDetails( prevState => !prevState)
  setSelectedAlbumCardData(data)
  }

  // Close album details modal
  const handleCloseAlbumDetailsClick = e => {
    setShowAlbumDetails( prevState => !prevState)
  }


  return (
    <ThemeProvider theme={theme}>
      <StyledApp showAlbumDetails={showAlbumDetails}>
        <GlobalStyles />
        <Header handleSearchChange={handleSearchChange}
                searchKeyword={searchKeyword}
                handleSortByDateClick={handleSortByDateClick}
                handleSortByNameClick={handleSortByNameClick}
              />
        <AlbumsContainer  albumsData={albumsData}
                          filteredAlbumsData={filteredAlbumsData}
                          handleAlbumCardClick={handleAlbumCardClick}
                        />
        { showAlbumDetails && <AlbumDetails  data={selectedAlbumCardData} handleCloseAlbumDetailsClick={handleCloseAlbumDetailsClick} /> }
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
