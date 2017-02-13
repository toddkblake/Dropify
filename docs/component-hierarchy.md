## Component Hierarchy

**Root**

**SplashContainer**
- HeroImage
- WelcomeContainer

**WelcomeContainer**
- AuthFormContainer
- MarketingComponent

**AuthFormContainer**
- WelcomeComponent
- SignUpFormComponent
  - SignUpErrors
- LoginFormComponent
  - LoginErrors

**SidebarNavContainer**
- Logo
- Nav
- CurrentUser
- Logout

**MainContentContainer**
- BrowseContainer
- ArtistDetailContainer
- AlbumDetailContainer
- PlaylistDetailContainer
- PlayQueueContainer
- CollectionContainer
- FollowContainer
- UserDetailContainer

**BrowseContainer**
- BrowseNavComponent
- ArtistsContainer
- GenreContainer(Bonus)

**NowPlayingContainer**
- NowPlayingComponent
- Related Music(Bonus)

**ArtistDetailContainer**
- ArtistHeaderComponent
- AlbumsContainer
  - AlbumComponent

**AlbumDetailContainer**
- AlbumHeaderComponent
- SongsContainer

**PlaylistDetailContainer**
- PlaylistHeaderComponent
- SongsContainer

**PlayQueueContainer**
- CurrentSongContainer
- QueuedSongsContainer

**CollectionContainer**
- PlaylistsContainer
- CollectionNavComponent(Bonus)
- UsersSongsContainer(Bonus)
- UsersAlbumsContainer(Bonus)
- UsersArtistsContainer(Bonus)

**FollowContainer**
- UserFollowComponent

**UserDetailContainer**
- UserHeaderComponent
- PlaylistsContainer

### Modular

**SongsContainer**
- SongComponent
  - MoreContextMenu

**PlaylistsContainer**
- UserPlaylistsComponent
- UserFollowedPlaylistsComponent

## BONUS: Search

**SearchContainer**
- SearchInputComponent
- SearchResultsContainer
  - SearchResultsSongsComponent
  - SearchResultsArtistsComponent
  - SearchResultsAlbumsComponent
  - SearchResultsPlaylistsComponent
  - SearchResultsUsersComponent

## Routes

|Path                                 |Component                 |
|-------------------------------------|--------------------------|
|"/welcome"                           |"WelcomeComponent"        |
|"/signup"                            |"SignUpFormComponent"     |
|"/login"                             |"LoginFormComponent"      |
|"/browse"                            |"BrowseContainer"         |
|"/artists/:artistId"                 |"ArtistDetailContainer"   |
|"/artists/:artistId/albums/:albumId" |"AlbumDetailContainer"    |
|"/user/:userId/playlists/:playlistId"|"PlaylistDetailContainer" |
|"/queue"                             |"PlayQueueContainer"      |
|"/user/:userId/collection"           |"CollectionContainer"     |
|"/follow"                            |"FollowContainer"         |
|"/user/:userId"                      |"UserDetailContainer"     |
