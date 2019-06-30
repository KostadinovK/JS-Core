const SoftUniFy = require('../03. Softunify');

const { expect } = require('chai');

describe('Tests', () => {
    describe('Constructor Tests', () => {
        it('Should initialized allSongs as an empty object', () => {
            let s = new SoftUniFy();
            let expected = {};

            let actual = s.allSongs;

            expect(actual).to.be.eql(expected);
        });
    });

    describe('downloadSong() Tests', () => {
        it('download song of new artist, should add artist and song', () => {
            let s = new SoftUniFy();
            let artist = 'Manowar';
            let song = 'Kings of Metal';
            let lyrics = 'We are Kings of Metal';

            let expected = `${song} - ${lyrics}`;
            s.downloadSong(artist, song, lyrics);

            let actual = s.allSongs[artist]['songs'][0];

            expect(actual).to.be.equal(expected);
        });
    });

    describe('playSong() Tests', () => {
        it('play song that is not downloaded, should return message for download', () => {
            let s = new SoftUniFy();
            let song = 'Kings of Metal';
            let expected = `You have not downloaded a ${song} song yet. Use SoftUniFy's function downloadSong() to change that!`;

            let actual = s.playSong(song);

            expect(actual).to.be.equal(expected);
        });

        it('play song that is downloaded, should work correctly', () => {
            let s = new SoftUniFy();
            let artist = 'Manowar';
            let song = 'Kings of Metal';
            let lyrics = 'We are Kings of Metal';
            let expected = `${artist}:\n${song} - ${lyrics}\n`;

            s.downloadSong(artist, song, lyrics);
            let actual = s.playSong(song);

            expect(actual).to.be.equal(expected);
        });
    });

    describe('songsList() Tests', () => {
        it('list songs when playlist is empty, should return message for no songs', () => {
            let s = new SoftUniFy();
            let expected = `Your song list is empty`;

            let actual = s.songsList;

            expect(actual).to.be.equal(expected);
        });

        it('list songs when playlist is not empty, should work correctly', () => {
            let s = new SoftUniFy();
            let artist = 'Manowar';
            let song = 'Kings of Metal';
            let lyrics = 'We are Kings of Metal';
            let expected = `${song} - ${lyrics}`;
            
            s.downloadSong(artist, song, lyrics);
            let actual = s.songsList;

            expect(actual).to.be.equal(expected);
        });
    });

    describe('rateArtist() Tests', () => {
        it('rate an artist that is not in playlist, should return message for no artist', () => {
            let s = new SoftUniFy();
            let expected = `The Manowar is not on your artist list.`;

            let actual = s.rateArtist('Manowar');

            expect(actual).to.be.equal(expected);
        });
    });
});