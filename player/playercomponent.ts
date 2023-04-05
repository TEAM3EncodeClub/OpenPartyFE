import { Component, OnInit } from '@angular/core';
import { OPSongsService } from '../services/opsongs.service';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent implements OnInit {
  songs: string[] = []; // Array to store the minted songs
  currentSongIndex: number = 0; // Index of the currently playing song
  isPlaying: boolean = false; // Flag to indicate if the music is currently playing

  constructor(private opSongsService: OPSongsService) { }

  ngOnInit() {
    // Fetch the minted songs from the OPSongs service
    this.songs = this.opSongsService.getMintedSongs();
  }

  playSong() {
    this.isPlaying = true;
    // Play the current song
    // Logic for playing the song goes here
  }

  pauseSong() {
    this.isPlaying = false;
    // Pause the current song
    // Logic for pausing the song goes here
  }

  nextSong() {
    // Move to the next song in the collection
    this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;
    // Stop playing the current song if it's playing
    if (this.isPlaying) {
      this.pauseSong();
    }
  }

  previousSong() {
    // Move to the previous song in the collection
    this.currentSongIndex = (this.currentSongIndex - 1 + this.songs.length) % this.songs.length;
    // Stop playing the current song if it's playing
    if (this.isPlaying) {
      this.pauseSong();
    }
  }

  viewCollection() {
    // Logic for displaying the minted songs collection goes here
  }
}
