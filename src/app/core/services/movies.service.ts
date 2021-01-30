import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  moviesData = [
    {
      title: 'Judas and the Black Messiah',
      slug: 'judas-and-the-black-messiah',
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BYjNlZWZmYTUtOGMzNy00ODVlLWFjOGMtNjUwMmUwMWNiMjk5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
      releaseDate: 'February 1, 2021',
      syn:  "FBI informant William O'Neal infiltrates the Illinois Black Panther Party and is tasked with keeping tabs on their charismatic leader, Chairman Fred Hampton. A career thief, O'Neal revels in the danger of manipulating both his comrades and his handler, Special Agent Roy Mitchell. Hampton's political prowess grows just as he's falling in love with fellow revolutionary Deborah Johnson. Meanwhile, a battle wages for O'Neal's soul. Will he align with the forces of good? Or subdue Hampton and The Panthers by any means, as FBI Director J. Edgar Hoover commands? ",
      chairs: [
        'available',
        'available',
        'available',
        'reserved',
        'reserved',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'reserved',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'reserved',
        'reserved',
        'reserved',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'reserved',
        'reserved',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'reserved',
        'available',
        'available'
      ]
      
    },
    {
      title: 'Wonder Woman 1984',
      slug: 'wonder-woman-1984',
      imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/wonder-woman-1984-poster-1606931235.jpg?resize=480:*',
      releaseDate: 'December 25, 2020',
      syn: "Diana Prince lives quietly among mortals in the vibrant, sleek 1980s -- an era of excess driven by the pursuit of having it all. Though she's come into her full powers, she maintains a low profile by curating ancient artifacts, and only performing heroic acts incognito. But soon, Diana will have to muster all of her strength, wisdom and courage as she finds herself squaring off against Maxwell Lord and the Cheetah, a villainess who possesses superhuman strength and agility."
      
    },
    {
      title: 'Tom & Jerry',
      slug: 'tom-and-jerry',
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BYzE3ODhiNzAtOWY4MS00NTdiLThmNDctNDM4NjRiNGFmYjI1XkEyXkFqcGdeQXVyMTI2ODM1ODUw._V1_.jpg',
      releaseDate: 'February 26, 2021',
      syn: "Adaptation of the classic Hanna-Barbera property, which reveals how Tom and Jerry first meet and form their rivalry. "
      
    },
    {
      title: 'Back To The Future',
      slug: 'back-to-the-futre',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71pwYomGC1L._AC_SL1418_.jpg',
      releaseDate: 'July 3, 1985',
      syn: "In this 1980s sci-fi classic, small-town California teen Marty McFly (Michael J. Fox) is thrown back into the '50s when an experiment by his eccentric scientist friend Doc Brown (Christopher Lloyd) goes awry. Traveling through time in a modified DeLorean car, Marty encounters young versions of his parents (Crispin Glover, Lea Thompson), and must make sure that they fall in love or he'll cease to exist. Even more dauntingly, Marty has to return to his own time and save the life of Doc Brown."
      
    }
  ];

  constructor() { 

    
  }
  getAllMovies() {
    return this.moviesData
  }

  getMovieData(slug: string | null) {
    return this.moviesData.filter(movie => {
      return movie.slug === slug
    })
  }
reserveChair(slug, index) {
  console.log(`${slug}: ${index}`)
} 

}
