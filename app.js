const SongController = require('./controller/controller')

let command = process.argv[2]
let input = process.argv[3]
let payload = process.argv[4]

switch (command) {
  case 'list':
    return SongController.getSongList()
  case 'find':
    console.log('find song by id', input)
  case 'add':
    return SongController.getAddSong()
  case 'update':
    console.log('update song ....')
    break
  case 'delete':
    console.log('delete song ....')
    break
  case 'play':
    console.log('play song ....')
    break
  default:
    SongController.help()
    break
}
