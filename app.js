const SongController = require('./controller/controller')

let command = process.argv[2]
let input = process.argv[3]

switch (command) {
  case 'list':
    return SongController.getSongList()
  case 'find':
    return SongController.findById(input)
  case 'add':
    return SongController.addSong(input)
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
