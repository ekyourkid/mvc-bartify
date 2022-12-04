let command = process.argv[2]
let input = process.argv[3]
let payload = process.argv[4]

// list song, add song , update song, delete song , play song
// song has property : id, title, band, genre

switch (command) {
  case 'list':
    console.log('list of songs....')
    break
  default:
    console.log('help')
    break
}
