

    // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
      ];

      
const people = [
        'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
        'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
        'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
        'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
        'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
      ];
      
      // Array.prototype.filter()
      // 1. Filter the list of inventors for those who were born in the 1500's
      const fifteen = inventors.filter(function(inventor) {
        if (inventor.year >= 1500 && inventor.year <=1600) {
            return true;
        }
      });
    //   console.table(fifteen);
    //   -------------- CONSOLE.TABLE returns result object in a table form ----- 
      // Array.prototype.map()
      // 2. Give us an array of the inventors first and last names
      const fullName = inventors.map(function(inventor) {
          return inventor.first + ' ' + inventor.last;
      })
    //   console.table(fullName);
      // Array.prototype.sort()
      // 3. Sort the inventors by birthdate, oldest to youngest
      const oldToYoung = inventors.sort(function(a, b){
          if(a.year > b.year){
              return 1;
          } else {
              return -1;
          }
      });

    //   console.table(oldToYoung)
  
      // Array.prototype.reduce()
      // 4. How many years did all the inventors live all together?
      const lengthOfLife = inventors.reduce(function(total, inventor){
          return total + (inventor.passed - inventor.year);
      }, 0);
    //   console.table(lengthOfLife);
  
      // 5. Sort the inventors by years lived
      const oldest = inventors.sort(function(a, b){
          const lastGuy = a.passed - a.year;
          const nextGuy = b.passed -b.year;
          if(lastGuy > nextGuy) {
              return -1;
          } else {
              return 1;
          }

        //   _*_*_*-can also be returned as return lastguy > nextguy ? -1: 1;-*_*_*_
      });

    //   console.table(oldest)

      // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
      // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
      
    //   variable to store the selector for the list of links
    // const category = document.querySelector('.mw-category');
    // //   variable to store links from within that element
    // //  links stores all the links as a node list not an array so there are two ways to overcome this
    // //   1. array.from()
    // //   2. wrap in array brackets with spread notation '...' [...category.querySelectorAll('a')]
    // const links = Array.from(category.querySelectorAll('a'));


    //  variable to store all the links in
    // let de = links.map(function(link) {
    //     return link.textContent});
    //     // filter that list to return only names including 'de'
    //     de.filter(function(streetName) {
    //         if (streetName.includes('de')) {
    //             return true;}
    //         });

  
      // 7. sort Exercise
      // Sort the people alphabetically by last name
    //   
    const alpha = people.sort(function(lastOne, nextOne) {
        // Array variable to split the peoples names into two names
        const [last, first]= lastOne.split(', ');   
        // Array variable to split the people last name into two names
        const [alast, afirst]= nextOne.split(', ');  
        // is lastname of lastOne is more than lastname of nextOne then return as true if not return as false 
        return last > alast ? 1: -1;
    })
    // console.log(alpha)
  
      // 8. Reduce Exercise
      // Sum up the instances of each of these
      const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
      
      const transportation = data.reduce(function(obj, item) {
        // this will loop through everything and display in console.
        // console.log(item);
        // conditional statement which says if you havent already counted the item, make its count 0, if you have then add 1 to the count
        if(!obj[item]){
            obj[item] = 0;
        }
        // add 1
        obj[item]++;
        // return the object count
        return obj;

      },{})
//   show me the list counted of each item
console.table(transportation);