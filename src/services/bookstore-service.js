export default class Bookstore {
  data = [
    {
      id: 1,
      name: "C++ for Dummies",
      author: "Max Huyaks",
      price: 32,
      coverImage: "https://m.media-amazon.com/images/I/81wJwAo+YZL.jpg",
    },
    {
      id: 2,
      name: "++C for Advanced",
      author: "Ladislav Wagner",
      price: 45,
      coverImage:
        "https://d1b14unh5d6w7g.cloudfront.net/111882377X.01.S001.LXXXXXXX.jpg?Expires=1676568630&Signature=RL1F9Qo2Q7ehSPABGwR95JksPt6rUaq~KLY8iOfjSqc3FyPKuAqm699sSkbOzRfWQ9V8D30G7QEiHaQoqm2glp1BZbQRSAhqmHpjqq8h7k2uCWiLont5Mox1N0HUnsnNqXl5E1Laii2UAkmMwqCbyWz7dB4NPOlK0sGQZ4TdAmQ_&Key-Pair-Id=APKAIUO27P366FGALUMQ",
    },
  ];
  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error("Something bad happened"));
        } else {
          resolve(this.data);
        }
      }, 700);
    });
  }
}
