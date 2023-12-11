
const athletes = [
    {
      name: "Usain Bolt",
      sport: "Track and Field",
      hasWorldRecord: true,
      gender: "Male",
      age: 35,
      totalMedals: 8,
      country: "Jamaica",
    },
    {
      name: "Simone Biles",
      sport: "Gymnastics",
      hasWorldRecord: false,
      gender: "Female",
      age: 25,
      totalMedals: 12,
      country: "United States",
    },
    {
      name: "Michael Phelps",
      sport: "Swimming",
      hasWorldRecord: true,
      gender: "Male",
      age: 37,
      totalMedals: 28,
      country: "United States",
    },
    {
      name: "Katie Ledecky",
      sport: "Swimming",
      hasWorldRecord: true,
      gender: "Female",
      age: 25,
      totalMedals: 10,
      country: "United States",
    },
    {
      name: "Allyson Felix",
      sport: "Track and Field",
      hasWorldRecord: false,
      gender: "Female",
      age: 36,
      totalMedals: 9,
      country: "United States",
    },
    {
      name: "Nadia Comăneci",
      sport: "Gymnastics",
      hasWorldRecord: true,
      gender: "Female",
      age: 60,
      totalMedals: 9,
      country: "Romania",
    },
    {
      name: "Birgit Fischer",
      sport: "Canoeing",
      hasWorldRecord: true,
      gender: "Female",
      age: 60,
      totalMedals: 12,
      country: "Germany",
    },
    {
      name: "Mariana Pajón",
      sport: "Cycling",
      hasWorldRecord: false,
      gender: "Female",
      age: 30,
      totalMedals: 4,
      country: "Colombia",
    },
    {
      name: "Wayne Gretzky",
      sport: "Ice Hockey",
      hasWorldRecord: false,
      gender: "Male",
      age: 61,
      totalMedals: 4,
      country: "Canada",
    },
    {
      name: "Yuna Kim",
      sport: "Figure Skating",
      hasWorldRecord: false,
      gender: "Female",
      age: 31,
      totalMedals: 6,
      country: "South Korea",
    },
  ];
//   1 . Dünya rekordu olan atletlərdən ibarət array yaratmaq.
//   const hasWorldRecord=athletes.filter((a)=>a.hasWorldRecord)
//   console.log(hasWorldRecord)
// 2 . Medallarının sayı 10 və daha artıq olan qadın atletlərdən ibarət array yaratmaq.
//   const gender=athletes.filter((a)=>a.gender=="Female")
//   console.log(gender)
//   const totalMedals=gender.filter((a)=>a.totalMedals>=10)
//   console.log(totalMedals)
// 3 . Atletlərin adlarından ibarət array yaratmaq.
//   const name=athletes.map((a)=>a.name)
//   console.log(name)
// 4 . Atletlərin adları və ölkələri olan obyektlərdən ibarət array yaratmaq.
// const athletes2 = athletes.map((a) => { return {name:a.name, country:a.country}})
// console.log(athletes2)
// 5 . Bütün atletlərin ümumi medallarının sayını hesablamaq
//   const totalMedals=athletes.map((a)=>a.totalMedals)
//   console.log(totalMedals)
//   const sum=totalMedals.reduce((a,b)=> a+b)
//  console.log(sum)
// 6 . Atletlərin medallarının sayının artım sırasına görə sıralanmış array yaratmaq.
    // const totalMedals=athletes.map((a)=>a.totalMedals)
    // console.log(totalMedals)
    // totalMedals.sort((a, b)=>a-b);
    // console.log(totalMedals)
 // 7. Atletlərin adlarının əlifba sırası ilə sıralanmış array yaratmaq.
    //  const name=athletes.map((a)=>a.name)
    //  console.log(name)
    //  name.sort();
    //  console.log(name)
 // 8. Atletin adına əsasən spesifik obyekti tapıb console-a yazmaq.
    // const result = athletes.find(({ name }) => name === "Usain Bolt");
    //  console.log(result); 
// 9. Hər hansı bir kişi atletin dünya rekordu olub olmamasını yoxlamaq.
    //   const gender=athletes.filter((a)=>a.gender=="Male")
    //   console.log(gender)
    //   const hasWorldRecord=gender.filter((a)=>a.hasWorldRecord)
    //   console.log(hasWorldRecord)
// 10. Amerikalı və dünya rekordu olan atletlərin adlarından ibarət array yaratmaq.
        // const country=athletes.filter((a)=>a.country=="United States")
        // console.log(country)
        // const hasWorldRecord=country.filter((a)=>a.hasWorldRecord)
        // console.log(hasWorldRecord)
// 11. Kişi atletlərin yaşlarının ortalamasını tapmaq.
        // const gender=athletes.filter((a)=>a.gender=="Male")
        // console.log(gender)
        // const age=gender.map((a)=>a.age)
        // console.log(age)
        // const sum=age.reduce((a,b)=> a+b)
        // console.log(sum/2)
