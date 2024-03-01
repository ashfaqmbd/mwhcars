var carVariants = {
  honda: {
    civic: {
      type: {
        // reborn: {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrQ-ypEp33fi8IA_u_a06FR1gcFqdDP5CJVA&usqp=CAU",
        name: "Honda Civic Reborn",
        model: 2023,
        price: 2000000,
        colors: ["red", "black", "white"],
        gates: 4,
        wheels: 4,
        // },
      },
    },
    accord: {
      type: {
        // lx: {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS5DCA33mSUVZKPSOLW5-68ihzErgZ0stQzKBCvJTJ9R7Rbo9HaVtp2D9PKETDEYdpe8k&usqp=CAU",
        name: "Honda Accord LX",
        model: 2022,
        price: 2500000,
        colors: ["blue", "silver", "black"],
        gates: 4,
        wheels: 4,
        // },
      },
    },
  },
  toyota: {
    corolla: {
      type: {
        // gli: {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5HHL3I8UivpKUr8I2cKvEATROCHBf416gaw&usqp=CAU",
        name: "Toyota Corolla Gli",
        model: 2020,
        price: 1000000,
        colors: ["red", "black", "white"],
        gates: 4,
        wheels: 4,
        // },
      },
    },
    camry: {
      type: {
        // xle: {
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnCadhvVuU6lYtTpZ200lvUl40O1ETpbK5Ng&usqp=CAU",
        name: "Toyota Camry XLE",
        model: 2021,
        price: 2800000,
        colors: ["gray", "white", "silver"],
        gates: 4,
        wheels: 4,
        // },
      },
    },
  },
  ford: {
    mustang: {
      type: {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1yN_A_41OwikmEIr1IXg6V1lC_fPrTe5A4A&usqp=CAU",
        // gt: {
        name: "Ford Mustang GT",
        model: 2022,
        price: 2500000,
        colors: ["blue", "yellow", "orange"],
        gates: 2,
        wheels: 4,
        // },
      },
    },
    focus: {
      type: {
        // se: {
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX3u94n7ayUxK5Zq5RgqRLtXja9CSyHmxouA&usqp=CAU",
        name: "Ford Focus SE",
        model: 2020,
        price: 1800000,
        colors: ["black", "white", "red"],
        gates: 4,
        wheels: 4,
        // },
      },
    },
  },
  // Add more companies below...
  chevrolet: {
    cruze: {
      type: {
        // lt: {
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9NkvXkNU5_BaCKXLaw5312H6qMBXiAvC4xA&usqp=CAU",
        name: "Chevrolet Cruze LT",
        model: 2021,
        price: 2200000,
        colors: ["silver", "black", "blue"],
        gates: 4,
        wheels: 4,
        // },
      },
    },
    malibu: {
      type: {
        // premier: {
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMuK-Gw0wg0q_Obx0BB1Xh_2eVI20kcwQ2_w&usqp=CAU",
        name: "Chevrolet Malibu Premier",
        model: 2020,
        price: 2800000,
        colors: ["white", "gray", "red"],
        gates: 4,
        wheels: 4,
        // },
      },
    },
  },
  mercedes: {
    benz: {
      type: {
        // cClass: {
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAbdOGCYagOqYLp8Tx5ny7n2gpxllfcAZEZQ&usqp=CAU",
        name: "Mercedes-Benz C-Class",
        model: 2022,
        price: 400000,
        colors: ["black", "white", "silver"],
        gates: 4,
        wheels: 4,
        // },
      },
    },
    amg: {
      type: {
        // gt63: {
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqHXFrBWHpZSfGX8mOooaUXXOjpppy0VW8XQ&usqp=CAU",
        name: "Mercedes-AMG GT 63",
        model: 2023,
        price: 6500000,
        colors: ["gray", "red", "blue"],
        gates: 4,
        wheels: 4,
        // },
      },
    },
  },
  audi: {
    a3: {
      type: {
        // sedan: {
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ93T4PKkRylSM_Uw81UrWz_2PWNKnsV38Dhg&usqp=CAU",
        name: "Audi A3 Sedan",
        model: 2021,
        price: 3500000,
        colors: ["black", "white", "gray"],
        gates: 4,
        wheels: 4,
        // },
      },
    },
    q7: {
      type: {
        // premiumPlus: {
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_f2FLvREb3mMt_nhYsv3ErFAqaRcS03X9tA&usqp=CAU",
        name: "Audi Q7 Premium Plus",
        model: 2020,
        price: 5500000,
        colors: ["silver", "blue", "black"],
        gates: 4,
        wheels: 4,
        // },
      },
    },
  },

  // Add more companies...
};

var company=document.getElementById("company");
var brand=document.getElementById("brand");
var allCars=document.getElementById("allCars");

company.innerHTML=`<option value="">Select Company</option>`;
brand.innerHTML = `<option value="">Select Brand</option>`;

for(var key in carVariants){
// console.log(key);
company.innerHTML+=`
<option value=${key}>${key.toUpperCase()}</option>`

for(var key1 in carVariants[key])
{
  for(var key2 in carVariants[key][key1]){
    
     var carData = carVariants[key][key1][key2];
     var colorDev="";
     for(var i=0;i<carData.colors.length; i++){
        // console.log(carData.colors[i]);
        colorDev+=`<div 
        class="me-2"
        style=
        "width:20px; 
        height:20px;
         border-radius:10px;
         border:1px solid;
          background-color:${carData.colors[i]}"></div>`;
     }
     
    //  console.log(colorDev);
    
        // console.log(carVariants[key][key1][key2][key3]);
        allCars.innerHTML += `
    <div class="col mb-2">
        <div class="card">
        <img src="${
          carData.image
        }" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${
      carData.name || "unknown"
    }</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${
      carData.model
    }</h6>
    <h2>Rs. ${carData.price}</h2>
     <div class="d-flex">${colorDev}</div>
  </div>
</div>
      </div>
    
    `;
      }
}
// console.log(key1);
}

function onCompanyChange(){
  brand.innerHTML="";
  brand.innerHTML = `<option value="">Select Brand</option>`;
// console.log(company.value);
for(var key in carVariants[company.value]){
  // console.log(key);
  brand.innerHTML += `
  <option value=${key}>${key.toUpperCase()}</option>
  `;
}
}

function filterCars(){
  
  // console.log(carVariants[company.value][brand.value].type);
  var carData = carVariants[company.value][brand.value].type;
  var colorDev = "";
  for (var i = 0; i < carData.colors.length; i++) {
    // console.log(carData.colors[i]);
    colorDev += `<div 
        class="me-2"
        style=
        "width:20px; 
        height:20px;
         border-radius:10px;
         border:1px solid;
          background-color:${carData.colors[i]}"></div>`;
  }
  
  allCars.innerHTML = `
    <div class="col mb-2">
        <div class="card"">
        <img style="height:400px;" src="${
          carData.image
        }" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${carData.name || "unknown"}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${carData.model}</h6>
    <h2>Rs. ${carData.price}</h2>
     <div class="d-flex">${colorDev}</div>
  </div>
</div>
      </div>
    
    `;
}