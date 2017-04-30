'use strict';

var data = {
  pets: [
    {
      name: 'Dona',
      animal: 'dog',
      breed: 'Bokserek',
      age: '4 lata',
      gender: 'Suczka',
      image_url: 'img/pets/dona.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=1101434396637650',
	  omnie: 'dona.html',
      tags: ['pies', 'bokser', 'bokserek', 'dorosły', '4', 'dominująca', 'średni', 'karmelowy', 'brązowy', 'energiczna', 'łagodna', 'łagodny', 'suczka', 'karmelowa', 'dona']
    },
    {
      name: 'Ziutek',
      animal: 'dog',
      breed: 'w typie jamnika',
      age: '2 lata',
      gender: 'Samiec',
      image_url: 'img/pets/ziutek.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=913111915469900',
      tags: ['pies', 'przyjacielski', 'krótkowłosy', 'dorosły', 'samiec', 'mały', 'biszkoptowy', 'beżowy', 'radosny', 'zabawa', 'kontaktowy', 'ziutek']
    },
    {
      name: 'Migotka',
      animal: 'dog',
      breed: 'Micro Colie',
      age: 'seniorka',
      gender: 'Suczka',
      image_url: 'img/pets/migotka.jpg',
	  facebook: 'https://web.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=1281932115254543',
      tags: ['pies', 'przyjacielski', 'dorosły', 'suczka', 'mały', 'ciemny', 'radosny', 'dzieci', 'kontaktowy', 'micro colie', 'kundelek', 'migotka']
    },
    {
      name: 'Pikuś',
      animal: 'dog',
      breed: 'Kundelek',
      age: '4 lata',
      gender: 'Samiec',
      image_url: 'img/pets/pikus.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=490333897747706',
      tags: ['pies', 'przyjacielski', 'dorosły', 'samiec', 'mały', 'jasny', 'biszkoptowy', 'beżowy', 'przyjacielski', 'łagodny', 'radosny', 'dzieci', 'kontaktowy', 'kundelek', 'pikuś']
    },
    {
      name: 'Kumpel',
      animal: 'dog',
      breed: 'W typie Sznaucerka',
      age: 'Młody',
      gender: 'Samiec',
      image_url: 'img/pets/kumpel.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=1188833781231044',
      tags: ['pies', 'przyjacielski', 'młody', 'samiec', 'mały', 'mix', 'przyjacielski', 'łagodny', 'radosny', 'dzieci', 'kontaktowy', 'kundelek', 'do innych psów', 'kumpel']
    },
   
	{
      name: 'Gucio',
      animal: 'dog',
      breed: 'Wilczur',
      age: '8 lat',
      gender: 'Samiec',
      image_url: 'img/pets/gucio.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=367124443401986',
      tags: ['pies', 'towarzyski', 'dorosły', 'samiec', 'duży', 'posłuszny', 'do suczki', 'do domu z ogrodem', 'ogród', 'pieszczoch', 'spacery', 'gucio']
    },
	{
      name: 'Pelikan',
      animal: 'dog',
      breed: 'Kundelek',
      age: 'Starszy, ok.9 lat',
      gender: 'Samiec',
      image_url: 'img/pets/pelikan.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=408191629295267',
      tags: ['pies', 'przyjacielski', 'starszy', 'samiec', 'średni', 'kundelek', 'łagodny', 'radosny', 'wesoły', 'pelikan']
    },
	{
      name: 'Dyzio',
      animal: 'dog',
      breed: 'Kundelek',
      age: 'Starszy, ok.10 lat',
      gender: 'Samiec',
      image_url: 'img/pets/dyzio.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=907841812663577',
      tags: ['pies', 'przyjacielski', 'starszy', 'samiec', 'średni', 'kundelek', 'pozytywny', 'radosny', 'wesoły', 'zadbany', 'ciepłolubny', 'dyzio']
    },	
	{
      name: 'Kazan',
      animal: 'dog',
      breed: 'Amstaff',
      age: 'powyżej 6 lat',
      gender: 'Samiec',
      image_url: 'img/pets/kazan.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=929773047137120',
      tags: ['pies', 'samiec', 'średni', 'amstaff', 'spokojny pies', 'kochany', 'starszy', 'kazan']
    },
	{
      name: 'Rodnej',
      animal: 'dog',
      breed: 'w typie Bernardyna',
      age: '9 lat',
      gender: 'Samiec',
      image_url: 'img/pets/rodnej.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=842594389188320',
      tags: ['pies', 'samiec', 'duży', 'wesoły', 'energiczny', 'kochany', 'starszy', 'stróż', 'spacery', 'bernardyn', 'rodnej']
    },
	{
      name: 'Adaś',
      animal: 'dog',
      breed: '',
      age: '6 lat',
      gender: 'Samiec',
      image_url: 'img/pets/adas.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=324569007657530',
      tags: ['pies', 'samiec', 'duży', 'wesoły', 'energiczny', 'kochany', 'sport', 'brązowy', 'spacery', 'aktywny', 'doberman', 'gończy', 'adaś']
    },
		{
      name: 'Heks',
      animal: 'dog',
      breed: 'Kundelek',
      age: 'Starszy',
      gender: 'Samiec',
      image_url: 'img/pets/heks.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=912365968877828',
      tags: ['pies', 'samiec', 'duży', 'wesoły', 'rezerwa', 'czas', 'brązowy', 'spacery', 'owczarek', 'heks', 'reks']
    },
	{
      name: 'Lusia',
      animal: 'dog',
      breed: 'Kundelek',
      age: '5 lat',
      gender: 'Suczka',
      image_url: 'img/pets/lusia.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=555879417859820',
      tags: ['pies', 'suczka', 'sunia', 'pieszczoch', 'łobuziak', 'czas', 'brązowy', 'szylkret', 'spacery', 'lusia']
    },
	{
      name: 'Tadek',
      animal: 'dog',
      breed: 'Owczarko-jamnik',
      age: '6-8 lat',
      gender: 'Samiec',
      image_url: 'img/pets/tadzik.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=1010297465751344',
      tags: ['pies', 'samiec', 'jamnik', 'owczarek', 'kontaktowy', 'towarzyski', 'broni domu', 'toleruje sunie', 'brązowy', 'czarny', 'tadek', 'tadzik']
    },
	{
      name: 'Sanczo',
      animal: 'dog',
      breed: 'Kundelek',
      age: '2 lata',
      gender: 'Samiec',
      image_url: 'img/pets/sanczo.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=1019194824861608',
      tags: ['pies', 'samiec', 'mały', 'kundelek', 'kontaktowy', 'towarzyski', 'żywiołowy', 'słodki', 'biały', 'czarny', 'sanczo']
    },
	{
      name: 'Sajan',
      animal: 'dog',
      breed: 'Owczarek Środkowoazj.',
      age: '5 lat',
      gender: 'Samiec',
      image_url: 'img/pets/sajan.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=1099319286849161',
      tags: ['pies', 'samiec', 'duży', 'owczarek', 'stróżujący', 'obronny', 'boski', 'beżowy', 'biały', 'biszkoptowy', 'uroczy','sajan']
    },
	{
      name: 'Iskierka',
      animal: 'dog',
      breed: 'Kundelek',
      age: 'ok. 7 lat',
      gender: 'Suczka',
      image_url: 'img/pets/iskierka.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=1195937267187362',
      tags: ['pies', 'suczka', 'mała', 'drobniutka', 'kudłata', 'czarna', 'urocza', 'przekochana', 'kochana', 'przylepa', 'akceptuje psy', 'dzieci', 'łagodna', 'spokojna', 'nie niszczy', 'sama w domu', 'iskierka']
    },
	{
      name: 'Wito',
      animal: 'dog',
      breed: 'Kundelek',
      age: 'ok. 1.5 roku',
      gender: 'Samiec',
      image_url: 'img/pets/wito.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=1114316855349404',
      tags: ['pies', 'samiec', 'mały', 'obserwujący', 'aktywny', 'czarny', 'spacery', 'wito']
    },
	{
      name: 'Lajla',
      animal: 'dog',
      breed: 'W typie Owczarka',
      age: '7 lat',
      gender: 'Suczka',
      image_url: 'img/pets/lajla.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=1211621605618928',
      tags: ['pies', 'suczka', 'owczarek', 'średni', 'kontaktowa', 'towarzyska', 'spacery', 'do kolana', 'lajla']
    },
    
	{
      name: 'Vixi',
      animal: 'dog',
      breed: 'Kundelek',
      age: '6 lat',
      gender: 'Suczka',
      image_url: 'img/pets/vixi.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=1222743011173454',
      tags: ['pies', 'suczka', 'popielata', 'beżowa', 'średnia', 'łagodna', 'wrażliwa', 'drugi pies', 'delikatna', 'vixi']
    },
	{
      name: 'Ekler',
      animal: 'dog',
      breed: 'Kundelek',
      age: '3 lata',
      gender: 'Samiec',
      image_url: 'img/pets/ekler.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=1261141054000316',
      tags: ['pies', 'samiec', 'kudłaty', 'kontaktowy', 'pewny siebie', 'auto', 'dzieci', 'brązowy', 'delikatna', 'ekler']
	
    },
	{
      name: 'Champion',
      animal: 'dog',
      breed: 'Kundelek',
      age: 'Starszy',
      gender: 'Samiec',
      image_url: 'img/pets/champion.jpg',
	  facebook: 'https://www.facebook.com/events/1202771879818924',
      tags: ['pies', 'samiec', 'krótkowłosy', 'champion', 'biszkoptowy', 'fajny', 'mały']
	
    },
	{
      name: 'Poker',
      animal: 'dog',
      breed: 'Kundelek',
      age: 'Starszy',
      gender: 'Samiec',
      image_url: 'img/pets/poker.jpg',
	  facebook: 'https://www.facebook.com/events/1202771879818924',
      tags: ['pies', 'samiec', 'krótkowłosy', 'poker', 'biszkoptowy', 'fajny', 'mały', 'kontaktowy', 'akceptuje psy', 'pozytywny', 'przytulas']
	
    },
	{
      name: 'Limba',
      animal: 'dog',
      breed: 'W typie labradora',
      age: 'ok.9 lat',
      gender: 'Suczka',
      image_url: 'img/pets/limba.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=933327073448384',
      tags: ['pies', 'suczka', 'krótkowłosa', 'limba', 'biszkoptowy', 'biszkoptowa', 'fajna', 'fajny', 'średnia', 'kontaktowa', 'akceptuje psy', 'pozytywna', 'łagodna', 'mądra', 'psina' ]
	
    },
	{
      name: 'Gryz',
      animal: 'dog',
      breed: 'Kundelek',
      age: 'Dorosły',
      gender: 'Samiec',
      image_url: 'img/pets/gryz.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=1239311296183292',
      tags: ['pies', 'samiec', 'krótkowłosy', 'gryz', 'czarny', 'ogród', 'ogrodu', 'fajny', 'mały', 'z charakterem', 'stróż', 'kumpel', 'mądry'  ]
	
    },
	{
      name: 'Blinder',
      animal: 'cat',
      breed: 'Europejski',
      age: 'dorosły',
      gender: 'Kocurek',
      image_url: 'img/pets/blinder.jpg',
	  facebook: 'https://www.facebook.com/pg/StowarzyszenieDogRescue/photos/?tab=album&album_id=1242351925879229',
      tags: ['kot', 'kocur', 'biały', 'bury', 'dorosły', 'blinder']
	
    },
	{
      name: 'Pepsi',
      animal: 'cat',
      breed: 'Europejski',
      age: 'ok.7 m-cy',
      gender: 'Kotka',
      image_url: 'img/pets/pepsi.jpg',
	  facebook: '#',
      tags: ['kot', 'kotka', 'kociak', 'bury', 'kicia', 'spokojna', 'zabawa', 'bawić', 'akceptuje koty', 'młody', 'pepsi']
	
    },
	{
      name: 'Panda',
      animal: 'cat',
      breed: 'Europejski',
      age: '3 lata',
      gender: 'Kotka',
      image_url: 'img/pets/panda.jpg',
	  facebook: 'https://www.facebook.com/pg/DogRescueKoty/photos/?tab=album&album_id=602788866598749',
      tags: ['kot', 'kotka', 'szylkret', 'szylkretka', 'spokojna', 'akceptuje koty', 'młoda', 'panda']
	
    }
	
	
  ]
}
