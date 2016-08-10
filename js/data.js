'use strict';

var data = {
  pets: [
    {
      name: 'Spanky',
      animal: 'dog',
      breed: 'Pit Bull & Terrier Mix',
      age: 'Adult',
      gender: 'Male',
      image_url: 'img/pets/spanky.jpeg',
      tags: ['dog', 'pit bull', 'terrier', 'adult', 'male', 'large', 'black', 'white', 'playful', 'energetic']
    },
    {
      name: 'Wally',
      animal: 'cat',
      breed: 'Domestic Short Hair Mix',
      age: 'Adult',
      gender: 'Male',
      image_url: 'img/pets/wally.jpeg',
      tags: ['cat', 'domestic', 'short hair', 'adult', 'male', 'medium', 'orange', 'white', 'quiet']
    },
    {
      name: 'Ellen',
      animal: 'dog',
      breed: 'Chihuahua Mix',
      age: 'Baby',
      gender: 'Female',
      image_url: 'img/pets/ellen.jpeg',
      tags: ['dog', 'chihuahua', 'baby', 'female', 'short hair', 'small', 'brown', 'white', 'children', 'affectionate']
    },
    {
      name: 'Isabel',
      animal: 'cat',
      breed: 'Domestic Long Hair Mix',
      age: 'Adult',
      gender: 'Female',
      image_url: 'img/pets/isabel.jpeg',
      tags: ['cat', 'domestic', 'long hair', 'adult', 'female', 'small', 'grey', 'sweet', 'fluffy']
    },
    {
      name: 'Fozzy',
      animal: 'rabbit',
      breed: 'Bunny Rabbit',
      age: 'Young',
      gender: 'Male',
      image_url: 'img/pets/fozzy.jpeg',
      tags: ['rabbit', 'bunny rabbit', 'young', 'male', 'small', 'brown', 'gentle', 'playful']
    },
    {
      name: 'Daisy Duck',
      animal: 'cat',
      breed: 'Terrier & Dachshund Mix',
      age: 'Adult',
      gender: 'Female',
      image_url: 'img/pets/daisy_duck.jpeg',
      tags: ['dog', 'terrier', 'dachshund', 'baby', 'female', 'small', 'brown', 'black', 'white', 'tricolor', 'playful']
    },
    {
      name: 'Woody',
      animal: 'dog',
      breed: 'Chihuahua Mix',
      age: 'Baby',
      gender: 'Male',
      image_url: 'img/pets/woody.jpeg',
      tags: ['dog', 'chihuahua', 'baby', 'male', 'short hair', 'small', 'brown', 'white', 'children', 'quiet']
    },
    {
      name: 'Berta',
      animal: 'dog',
      breed: 'Dachshund & Chihuahua Mix',
      age: 'Baby',
      gender: 'Female',
      image_url: 'img/pets/berta.jpeg',
      tags: ['dog', 'chihuahua', 'dachshund', 'baby', 'female', 'small', 'brown', 'children', 'quiet']
    },
    {
      name: 'Brownie',
      animal: 'rabbit',
      breed: 'Bunny Rabbit & Lionhead Mix',
      age: 'Young',
      gender: 'Male',
      image_url: 'img/pets/brownie.jpeg',
      tags: ['rabbit', 'bunny rabbit', 'lionhead', 'young', 'male', 'small', 'brown', 'fluffy']
    },
    {
      name: 'Shazan',
      animal: 'cat',
      breed: 'Domestic Short Hair Mix',
      age: 'Adult',
      gender: 'Male',
      image_url: 'img/pets/shazan.jpeg',
      tags: ['cat', 'domestic', 'adult', 'male', 'short hair', 'large', 'black', 'brown', 'lazy']
    },
    {
      name: 'Timber',
      animal: 'dog',
      breed: 'Miniature Pinscher Mix',
      age: 'Young',
      gender: 'Male',
      image_url: 'img/pets/timber.jpeg',
      tags: ['dog', 'miniature pinscher', 'young', 'male', 'medium hair', 'brown', 'playful', 'energetic']
    },
    {
      name: 'Harry',
      animal: 'dog',
      breed: 'Spaniel & Dachshund Mix',
      age: 'Baby',
      gender: 'Male',
      image_url: 'img/pets/harry.jpeg',
      tags: ['dog', 'spaniel', 'dachshund', 'baby', 'male', 'medium', 'brown', 'blonde', 'children', 'lazy']
    },
    {
      name: 'Julia',
      animal: 'rabbit',
      breed: 'Mini-Lop',
      age: 'Adult',
      gender: 'Female',
      image_url: 'img/pets/julia.jpeg',
      tags: ['rabbit', 'mini lop', 'adult', 'male', 'small', 'grey', 'quiet', 'fluffy']
    },
    {
      name: 'Buttercup',
      animal: 'dog',
      breed: 'Chihuahua Mix',
      age: 'Young',
      gender: 'Male',
      image_url: 'img/pets/buttercup.jpeg',
      tags: ['dog', 'chihuahua', 'baby', 'male', 'short hair', 'small', 'brown', 'white', 'quiet']
    },
    {
      name: 'Daisy',
      animal: 'dog',
      breed: 'Chihuahua Mix',
      age: 'Adult',
      gender: 'Female',
      image_url: 'img/pets/daisy.jpeg',
      tags: ['dog', 'chihuahua', 'adult', 'female', 'short hair', 'small', 'black', 'white', 'children', 'energetic']
    },
    {
      name: 'Amidala',
      animal: 'cat',
      breed: 'Domestic Short Hair Mix',
      age: 'Senior',
      gender: 'Female',
      image_url: 'img/pets/amidala.jpeg',
      tags: ['cat', 'domestic', 'senior', 'female', 'short hair', 'small', 'white', 'black', 'brown', 'lazy']
    },
    {
      name: 'Sylas',
      animal: 'dog',
      breed: 'Mountain Dog & Shepherd Mix',
      age: 'Baby',
      gender: 'Male',
      image_url: 'img/pets/sylas.jpeg',
      tags: ['dog', 'mountain dog','shepherd', 'baby', 'male', 'medium hair', 'large', 'black', 'brown', 'active']
    },
    {
      name: 'Olive',
      animal: 'dog',
      breed: 'Mountain Dog & Shepherd Mix',
      age: 'Young',
      gender: 'Female',
      image_url: 'img/pets/olive.jpeg',
      tags: ['dog', 'mountain dog','shepherd', 'young', 'female', 'medium hair', 'large', 'brown', 'sweet']
    },
    {
      name: 'Anthony',
      animal: 'dog',
      breed: 'Labrador Retriever & Mountain Dog Mix',
      age: 'Young',
      gender: 'Male',
      image_url: 'img/pets/anthony.jpeg',
      tags: ['dog', 'labrador retriever','mountain dog', 'young', 'male', 'short hair', 'medium', 'white']
    },
    {
      name: 'Harper',
      animal: 'rabbit',
      breed: 'Bunny Rabbit',
      age: 'Young',
      gender: 'Female',
      image_url: 'img/pets/harper.jpeg',
      tags: ['rabbit', 'bunny rabbit', 'young', 'female', 'small', 'white']
    },
    {
      name: 'Bunzie',
      animal: 'dog',
      breed: 'Pug Mix',
      age: 'Young',
      gender: 'Male',
      image_url: 'img/pets/bunzie.jpeg',
      tags: ['dog', 'pug', 'young', 'male', 'medium hair', 'small', 'brown', 'underbite']
    },
    {
      name: 'Ollie',
      animal: 'dog',
      breed: 'Lhasa Apso Mix',
      age: 'Adult',
      gender: 'Male',
      image_url: 'img/pets/ollie.jpeg',
      tags: ['dog', 'lhasa apso', 'adult', 'male', 'medium hair', 'small', 'white', 'quiet']
    },
    {
      name: 'Maggie',
      animal: 'dog',
      breed: 'Poodle Mix',
      age: 'Adult',
      gender: 'Female',
      image_url: 'img/pets/maggie.jpeg',
      tags: ['dog', 'poodle', 'adult', 'female', 'long hair', 'small', 'white', 'playful', 'fluffy']
    },
    {
      name: 'Tim',
      animal: 'rabbit',
      breed: 'English Spot',
      age: 'Adult',
      gender: 'Male',
      image_url: 'img/pets/tim.jpeg',
      tags: ['rabbit', 'english spot', 'adult', 'male', 'large', 'white', 'black']
    },
    {
      name: 'Susie',
      animal: 'dog',
      breed: 'Dachshund',
      age: 'Young',
      gender: 'Female',
      image_url: 'img/pets/susie.jpeg',
      tags: ['dog', 'dachshund', 'young', 'female', 'small', 'black', 'brown', 'special needs']
    },
    {
      name: 'Zena',
      animal: 'dog',
      breed: 'Shepherd & Great Pyrenees Mix',
      age: 'Adult',
      gender: 'Female',
      image_url: 'img/pets/zena.jpeg',
      tags: ['dog', 'shepherd', 'great pyrenees', 'adult', 'female', 'short hair', 'large', 'brown', 'white']
    },
    {
      name: 'Sweetheart',
      animal: 'cat',
      breed: 'Domestic Short Hair Mix',
      age: 'Adult',
      gender: 'Female',
      image_url: 'img/pets/sweetheart.jpeg',
      tags: ['cat', 'domestic', 'adult', 'female', 'short hair', 'large', 'white', 'black']
    },
    {
      name: 'Nigel',
      animal: 'rabbit',
      breed: 'Bunny Rabbit',
      age: 'Adult',
      gender: 'Male',
      image_url: 'img/pets/nigel.jpeg',
      tags: ['rabbit', 'bunny rabbit', 'adult', 'male', 'small', 'brown']
    },
    {
      name: 'Holly',
      animal: 'dog',
      breed: 'Dachshund & Maltese Mix',
      age: 'Baby',
      gender: 'Female',
      image_url: 'img/pets/holly.jpeg',
      tags: ['dog', 'maltese', 'dachshund', 'baby', 'female', 'small', 'white', 'children']
    },
    {
      name: 'Gary',
      animal: 'cat',
      breed: 'Domestic Short Hair Mix',
      age: 'Young',
      gender: 'Male',
      image_url: 'img/pets/gary.jpeg',
      tags: ['cat', 'domestic', 'young', 'male', 'medium hair', 'medium', 'black']
    },
    {
      name: 'Mika',
      animal: 'cat',
      breed: 'Domestic Long Hair Mix',
      age: 'Adult',
      gender: 'Female',
      image_url: 'img/pets/mika.jpeg',
      tags: ['cat', 'domestic', 'adult', 'female', 'long hair', 'medium', 'black', 'brown', 'fluffy']
    },
    {
      name: 'Sandy',
      animal: 'rabbit',
      breed: 'Californian',
      age: 'Adult',
      gender: 'Female',
      image_url: 'img/pets/sandy.jpeg',
      tags: ['rabbit', 'californian', 'adult', 'female', 'medium', 'white']
    },
    {
      name: 'Picasso',
      animal: 'dog',
      breed: 'Dachshund Mix',
      age: 'Baby',
      gender: 'Male',
      image_url: 'img/pets/picasso.jpeg',
      tags: ['dog', 'dachshund', 'baby', 'male', 'small', 'brown', 'blonde', 'children']
    },
    {
      name: 'Lando',
      animal: 'rabbit',
      breed: 'Himalayan',
      age: 'Senior',
      gender: 'Female',
      image_url: 'img/pets/lando.jpeg',
      tags: ['rabbit', 'himalayan', 'senior', 'female', 'medium', 'white']
    },
    {
      name: 'Sally',
      animal: 'dog',
      breed: 'Dachshund & Beagle Mix',
      age: 'Baby',
      gender: 'Female',
      image_url: 'img/pets/sally.jpeg',
      tags: ['dog', 'beagle', 'dachshund', 'baby', 'female', 'small', 'black', 'children']
    }
  ]
}
