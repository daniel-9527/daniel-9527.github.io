const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "只要平凡",
        artist: '张杰 / 张碧晨',
        url: 'http://music.163.com/song/media/outer/url?id=574919767.mp3',
        cover: 'http://p1.music.126.net/CjGoliP3xOB0gcCUaeTTBg==/109951163375727336.jpg',
      },
      {
        name: 'Señorita',
        artist: 'Shawn Mendes / Camila Cabello',
        url: 'http://music.163.com/song/media/outer/url?id=1373168742.mp3',
        cover: 'http://p1.music.126.net/eSrLKe5g3U8jX-lb629q6A==/109951164162885535.jpg',
      }
    ]
});