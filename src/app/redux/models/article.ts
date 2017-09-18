export class Article {
    id: number
    link : string
    title : string
    points : number
    constructor(id: number, title: string, link: string, points?: number) {
        this.id = id
        this.title = title;
        this.link = link;
        this.points = points || 0;
    }
}
