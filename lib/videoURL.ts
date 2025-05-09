export const videoURL = (url:any) => {
    return url?.replace('https://youtu.be/', 'https://www.youtube.com/embed/').replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/').replace('https://www.youtube.com/embed/', 'https://www.youtube.com/embed/')
}