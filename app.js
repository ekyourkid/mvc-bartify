const SongController = require('./controller/controller')

let command = process.argv[2]
let input = process.argv[3]
let inputUpdateValue = process.argv[4]

switch (command) {
  case 'list':
    return SongController.getSongList()
  case 'find':
    return SongController.findById(input)
  case 'add':
    return SongController.addSong(input)
  case 'update':
    return SongController.updateSong(input, inputUpdateValue)
  case 'delete':
    return SongController.getDeleteSong(input)
  case 'play':
    console.log('play song ....')
    break
  default:
    SongController.help()
    break
}
