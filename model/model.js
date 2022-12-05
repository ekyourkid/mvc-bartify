const fs = require('fs')
const SongView = require('../view/view')
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
  static save(data) {
    fs.writeFileSync('./data.json', JSON.stringify(data, null, 2))
    return true
  }
  static add(title, band, genre) {
    let data = this.readFromJson()
    let list = [...data]
    const newSong = new SongModel(data.length + 1, title, band, genre)
    list.push(newSong)
    this.save(list)
    return list
  }
  static findById(data, id) {
    let find = data.filter((song) => song.id == id)
    if (find.length) {
      return { status: 200, data: find[0] }
    } else {
      return { status: 404, message: `Data with id ${id} not found` }
    }
  }
  static delete(data, id) {
    let list = []
    data.forEach((song) => {
      if (song.id != id) {
        list.push(song)
      }
    })
    this.save(list)
    return list
  }
  static updateSong(id, data, song, payload) {
    let index = data.indexOf(song)
    data[index][payload.field] = payload.value
    SongView.displayResult('update', id)
    this.save(data)
    return data
  }
}
module.exports = SongModel
