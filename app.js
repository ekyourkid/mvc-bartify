let command = process.argv[2]
let input = process.argv[3]
let payload = process.argv[4]

// list song, add song , update song, delete song , play song
// song has property : id, title, band, genre

switch (command) {
  case 'list':
    console.log('list of songs....')
    break
  case 'add':
    console.log('add song ....')
    break
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
    console.log('help')
    break
}
