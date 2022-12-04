let command = process.argv[2]
let input = process.argv[3]
let payload = process.argv[4]

switch (command) {
  case 'list':
    console.log('list of songs....')
    break
  default:
    console.log('help')
    break
}
