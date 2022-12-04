const fs = require('fs')
class SongModel {
  constructor(id, title, band, genre) {
    this.id = id
    this.title = title
    this.band = band
    this.genre = genre
  }
  static readFromJson() {
    return JSON.parse(fs.readFileSync('./data.json', 'utf8'))
  }
  static addSong(title, band, genre) {
    let list = []
    let data = this.readFromJson()
    data.forEach((song) => {
      list.push(song)
    })
    const newSong = new SongModel(1, title, band, genre)
    list.push(newSong)
    return list
  }
  static save() {
    // create new song `new SongModel('','','','')
    // push new song to data
    // write file
  }
}
module.exports = SongModel
