const express = require('express')

//intilization

const app = express()

//defining

let json1 = {
  "info": {
    "count": 126,
    "pages": 7,
    "next": "https://rickandmortyapi.com/api/location?page=2",
    "prev": null
  },
  "results": [
    {
      "id": 1,
      "name": "Earth (C-137)",
      "type": "Planet",
      "dimension": "Dimension C-137",
      "residents": [
        "https://rickandmortyapi.com/api/character/38",
        "https://rickandmortyapi.com/api/character/45",
        "https://rickandmortyapi.com/api/character/71",
        "https://rickandmortyapi.com/api/character/394"
      ],
      "url": "https://rickandmortyapi.com/api/location/1",
      "created": "2017-11-10T12:42:04.162Z"
    },
    {
      "id": 2,
      "name": "Abadango",
      "type": "Cluster",
      "dimension": "unknown",
      "residents": [
        "https://rickandmortyapi.com/api/character/6"
      ],
      "url": "https://rickandmortyapi.com/api/location/2",
      "created": "2017-11-10T13:06:38.182Z"
    },
    {
      "id": 3,
      "name": "Citadel of Ricks",
      "type": "Space station",
      "dimension": "unknown",
      "residents": [
        "https://rickandmortyapi.com/api/character/8",
        "https://rickandmortyapi.com/api/character/14",
        "https://rickandmortyapi.com/api/character/818"
      ],
      "url": "https://rickandmortyapi.com/api/location/3",
      "created": "2017-11-10T13:08:13.191Z"
    },
    {
      "id": 4,
      "name": "Worldender's lair",
      "type": "Planet",
      "dimension": "unknown",
      "residents": [
        "https://rickandmortyapi.com/api/character/10",
        "https://rickandmortyapi.com/api/character/81",
        "https://rickandmortyapi.com/api/character/208",
        "https://rickandmortyapi.com/api/character/395"
      ],
      "url": "https://rickandmortyapi.com/api/location/4",
      "created": "2017-11-10T13:08:20.569Z"
    },
    {
      "id": 5,
      "name": "Anatomy Park",
      "type": "Microverse",
      "dimension": "Dimension C-137",
      "residents": [
        "https://rickandmortyapi.com/api/character/12",
        "https://rickandmortyapi.com/api/character/300"
      ],
      "url": "https://rickandmortyapi.com/api/location/5",
      "created": "2017-11-10T13:08:46.060Z"
    },
    {
      "id": 6,
      "name": "Interdimensional Cable",
      "type": "TV",
      "dimension": "unknown",
      "residents": [
        "https://rickandmortyapi.com/api/character/20",
        "https://rickandmortyapi.com/api/character/711"
      ],
      "url": "https://rickandmortyapi.com/api/location/6",
      "created": "2017-11-10T13:09:09.102Z"
    },
    {
      "id": 7,
      "name": "Immortality Field Resort",
      "type": "Resort",
      "dimension": "unknown",
      "residents": [
        "https://rickandmortyapi.com/api/character/23",
        "https://rickandmortyapi.com/api/character/204",
        "https://rickandmortyapi.com/api/character/320"
      ],
      "url": "https://rickandmortyapi.com/api/location/7",
      "created": "2017-11-10T13:09:17.136Z"
    },
    {
      "id": 8,
      "name": "Post-Apocalyptic Earth",
      "type": "Planet",
      "dimension": "Post-Apocalyptic Dimension",
      "residents": [
        "https://rickandmortyapi.com/api/character/25",
        "https://rickandmortyapi.com/api/character/52",
        "https://rickandmortyapi.com/api/character/68",
        "https://rickandmortyapi.com/api/character/342"
      ],
      "url": "https://rickandmortyapi.com/api/location/8",
      "created": "2017-11-10T13:09:22.551Z"
    },
    {
      "id": 9,
      "name": "Purge Planet",
      "type": "Planet",
      "dimension": "Replacement Dimension",
      "residents": [
        "https://rickandmortyapi.com/api/character/26",
        "https://rickandmortyapi.com/api/character/139",
        "https://rickandmortyapi.com/api/character/202",
        "https://rickandmortyapi.com/api/character/273"
      ],
      "url": "https://rickandmortyapi.com/api/location/9",
      "created": "2017-11-10T13:09:29.566Z"
    },
    {
      "id": 10,
      "name": "Venzenulon 7",
      "type": "Planet",
      "dimension": "unknown",
      "residents": [
        "https://rickandmortyapi.com/api/character/33"
      ],
      "url": "https://rickandmortyapi.com/api/location/10",
      "created": "2017-11-18T11:21:51.643Z"
    },
    {
      "id": 11,
      "name": "Bepis 9",
      "type": "Planet",
      "dimension": "unknown",
      "residents": [
        "https://rickandmortyapi.com/api/character/35"
      ],
      "url": "https://rickandmortyapi.com/api/location/11",
      "created": "2017-11-18T11:26:03.325Z"
    },
    {
      "id": 12,
      "name": "Cronenberg Earth",
      "type": "Planet",
      "dimension": "Cronenberg Dimension",
      "residents": [],
      "url": "https://rickandmortyapi.com/api/location/12",
      "created": "2017-11-18T11:29:27.857Z"
    },
    {
      "id": 13,
      "name": "Nuptia 4",
      "type": "Planet",
      "dimension": "unknown",
      "residents": [
        "https://rickandmortyapi.com/api/character/40",
        "https://rickandmortyapi.com/api/character/387"
      ],
      "url": "https://rickandmortyapi.com/api/location/13",
      "created": "2017-11-18T11:30:29.780Z"
    },
    {
      "id": 14,
      "name": "Giant's Town",
      "type": "Fantasy town",
      "dimension": "Fantasy Dimension",
      "residents": [
        "https://rickandmortyapi.com/api/character/89",
        "https://rickandmortyapi.com/api/character/399",
        "https://rickandmortyapi.com/api/character/400"
      ],
      "url": "https://rickandmortyapi.com/api/location/14",
      "created": "2017-11-18T11:31:15.248Z"
    },
    {
      "id": 15,
      "name": "Bird World",
      "type": "Planet",
      "dimension": "unknown",
      "residents": [],
      "url": "https://rickandmortyapi.com/api/location/15",
      "created": "2017-11-18T11:32:26.752Z"
    },
    {
      "id": 16,
      "name": "St. Gloopy Noops Hospital",
      "type": "Space station",
      "dimension": "unknown",
      "residents": [
        "https://rickandmortyapi.com/api/character/105",
        "https://rickandmortyapi.com/api/character/460"
      ],
      "url": "https://rickandmortyapi.com/api/location/16",
      "created": "2017-11-18T11:43:20.075Z"
    },
    {
      "id": 17,
      "name": "Earth (5-126)",
      "type": "Planet",
      "dimension": "Dimension 5-126",
      "residents": [],
      "url": "https://rickandmortyapi.com/api/location/17",
      "created": "2017-11-18T11:41:08.486Z"
    },
    {
      "id": 18,
      "name": "Mr. Goldenfold's dream",
      "type": "Dream",
      "dimension": "Dimension C-137",
      "residents": [
        "https://rickandmortyapi.com/api/character/63",
        "https://rickandmortyapi.com/api/character/396"
      ],
      "url": "https://rickandmortyapi.com/api/location/18",
      "created": "2017-11-18T11:46:22.933Z"
    },
    {
      "id": 19,
      "name": "Gromflom Prime",
      "type": "Planet",
      "dimension": "Replacement Dimension",
      "residents": [],
      "url": "https://rickandmortyapi.com/api/location/19",
      "created": "2017-11-18T11:39:52.165Z"
    },
    {
      "id": 20,
      "name": "Earth (Replacement Dimension)",
      "type": "Planet",
      "dimension": "Replacement Dimension",
      "residents": [],
      "url": "https://rickandmortyapi.com/api/location/20",
      "created": "2017-11-18T19:33:01.173Z"
    }
  ]
}



let json2 = {
  "prof_employees": [
    {
      "id": 1,
      "first_name": "Kedar",
      "last_name": "Swamy",
      "email": "kedarswami203@gmail.com",
      "company": "TechM",
      "phone": 7416618834,
      "salary": 70000.5,
      "desgination": "SDET",
      "location": "Hyderabad",
      "isActive": true,
      "isDelete": false,
      "isIncrement": null
    },
    {
      "id": 2,
      "first_name": "ajk",
      "last_name": "swami",
      "email": "ajkswami@gmail.com",
      "company": "Capgemini",
      "phone": "9116618834",
      "salary": "100000",
      "desgination": "Full Stack Developer",
      "location": "Chennai",
      "isActive": true,
      "isDelete": false,
      "isIncrement": null
    },
    {
      "id": 3,
      "first_name": "Mounika",
      "last_name": "Kasoju",
      "email": "Mounika_kasoju@gmail.com",
      "company": "Google",
      "phone": "8416618834",
      "salary": "60000",
      "desgination": "QA",
      "location": "Bangalore",
      "isActive": true,
      "isDelete": false,
      "isIncrement": null
    },
    {
      "id": 4,
      "first_name": "Samantha",
      "last_name": "Smith",
      "email": "samantha.smith@example.com",
      "company": "Microsoft",
      "phone": 1234567890,
      "salary": 80000.75,
      "desgination": "Software Engineer",
      "location": "Seattle",
      "isActive": true,
      "isDelete": false,
      "isIncrement": null
    },
    {
      "id": 5,
      "first_name": "John",
      "last_name": "Doe",
      "email": "john.doe@example.com",
      "company": "Amazon",
      "phone": "9876543210",
      "salary": "95000",
      "desgination": "DevOps Engineer",
      "location": "New York",
      "isActive": true,
      "isDelete": false,
      "isIncrement": null
    },
    {
      "id": 6,
      "first_name": "Alice",
      "last_name": "Johnson",
      "email": "alice.johnson@example.com",
      "company": "Facebook",
      "phone": "8765432109",
      "salary": "75000",
      "desgination": "Frontend Developer",
      "location": "San Francisco",
      "isActive": true,
      "isDelete": false,
      "isIncrement": null
    },
    {
      "id": 7,
      "first_name": "Robert",
      "last_name": "Miller",
      "email": "robert.miller@example.com",
      "company": "Apple",
      "phone": "7654321098",
      "salary": "85000",
      "desgination": "iOS Developer",
      "location": "Cupertino",
      "isActive": true,
      "isDelete": false,
      "isIncrement": null
    },
    {
      "id": 8,
      "first_name": "Emily",
      "last_name": "Taylor",
      "email": "emily.taylor@example.com",
      "company": "Tesla",
      "phone": "6543210987",
      "salary": "90000",
      "desgination": "Data Scientist",
      "location": "Palo Alto",
      "isActive": true,
      "isDelete": false,
      "isIncrement": null
    },
    {
      "id": 9,
      "first_name": "Daniel",
      "last_name": "Anderson",
      "email": "daniel.anderson@example.com",
      "company": "Uber",
      "phone": "5432109876",
      "salary": "80000",
      "desgination": "Backend Developer",
      "location": "San Francisco",
      "isActive": true,
      "isDelete": false,
      "isIncrement": null
    },
    {
      "id": 10,
      "first_name": "Sophia",
      "last_name": "White",
      "email": "sophia.white@example.com",
      "company": "Netflix",
      "phone": "4321098765",
      "salary": "70000",
      "desgination": "UI/UX Designer",
      "location": "Los Angeles",
      "isActive": true,
      "isDelete": false,
      "isIncrement": null
    },
    {
      "id": 11,
      "first_name": "Ethan",
      "last_name": "Brown",
      "email": "ethan.brown@example.com",
      "company": "Adobe",
      "phone": "3210987654",
      "salary": "95000",
      "desgination": "Product Manager",
      "location": "San Jose",
      "isActive": true,
      "isDelete": false,
      "isIncrement": null
    },
    {
      "id": 12,
      "first_name": "Olivia",
      "last_name": "Clark",
      "email": "olivia.clark@example.com",
      "company": "Intel",
      "phone": "2109876543",
      "salary": "90000",
      "desgination": "Security Analyst",
      "location": "Santa Clara",
      "isActive": true,
      "isDelete": false,
      "isIncrement": null
    },
    {
      "id": 13,
      "first_name": "Liam",
      "last_name": "Wilson",
      "email": "liam.wilson@example.com",
      "company": "Cisco",
      "phone": "1098765432",
      "salary": "85000",
      "desgination": "Network Engineer",
      "location": "San Jose",
      "isActive": true,
      "isDelete": false,
      "isIncrement": null
    }
  ]
}



//function callings

app.get('/api1',(request, response, next)=>{
    return response.json(json1)
})

app.get('/api2',(request, response, next)=>{
  return response.json(json2)
})


//server
let port = 1000

app.listen(port,()=>{
  console.log(`listening on port ${1000}`)
})