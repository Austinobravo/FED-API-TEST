const username = 'coalition'
const password = 'skills-test'
const authKey = btoa(`${username}:${password}`)

fetch('https://fedskillstest.coalitiontechnologies.workers.dev',{
  headers:{
    Authorization: `Basic ${authKey}`
  }
})

.then((response)=> 
  response.json()
)
.then((value)=>{
  populateData(value)
  
})
.catch((error)=> {
  console.error("err",error)
})

 const populateMainPatientDetail = (data) => {
  // Append the diagnosis history
  data.diagnosis_history.map((item) => {
    document.querySelector('.systolic').querySelector('.reading').textContent = item.blood_pressure.systolic.value
    document.querySelector('.systolic').querySelector('.higher_average').querySelector('p').textContent = item.blood_pressure.systolic.levels
    document.querySelector('.diastolic').querySelector('.reading').textContent = item.blood_pressure.diastolic.value
    document.querySelector('.diastolic').querySelector('.lower_average').querySelector('p').textContent = item.blood_pressure.diastolic.levels
  })
 
  // Append the chart and populate it 
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.diagnosis_history.map((item) => `${item.month.slice(0,3)}, ${item.year}`).slice(0,7),
      datasets: [{
        backgroundColor: [
          '#E66FD2'
        ],
        borderColor: [
          '#E66FD2'
        ],
        label: '',
        data: data.diagnosis_history.map((item) => item.blood_pressure.systolic.value ),
        borderWidth: 1
      },
      {
        backgroundColor: [
          '#8C6FE6'
        ],
        borderColor: [
          '#8C6FE6'
        ],
        label: '',
        data: data.diagnosis_history.map((item) => item.blood_pressure.diastolic.value ),
        borderWidth: 1
      },]
    },
    options: {
        animations: {
            tension: {
              duration: 1000,
              easing: 'linear',
              from: 1,
              to: 0,
              loop: true
            }
          },
      scales: {
        y: {
          beginAtZero: true
        //   min: 0,
        // max: 100
        }
      }
    }
  });

  // Append the diagnosis history to the temperature, heart rate and respiratory grid
  data.diagnosis_history.map((item) => {
    document.querySelector('.heart_rate').querySelector('h5').textContent = `${item.heart_rate.value } bpm`
    document.querySelector('.heart_rate').querySelector('span').textContent = `${item.heart_rate.levels }`
    document.querySelector('.temperature').querySelector('h5').textContent = `${item.temperature.value } F`
    document.querySelector('.temperature').querySelector('p').textContent = `${item.temperature.levels }`
    document.querySelector('.respiratory').querySelector('h5').textContent = `${item.respiratory_rate.value } bpm`
    document.querySelector('.respiratory').querySelector('p').textContent = `${item.respiratory_rate.levels }`
  })
  const tableBody = document.querySelector('.table_body')
  const tableRow = tableBody.querySelector('tr')

    // Append the diagnosis list to the table
  data.diagnostic_list.forEach((item) => {
    const tableRowClone = tableRow.cloneNode(true)
    tableRowClone.querySelector('.name').textContent = item.name
    tableRowClone.querySelector('.description').textContent = item.description
    tableRowClone.querySelector('.status').textContent = item.status

    tableBody.appendChild(tableRowClone)
  })
  tableRow.style.display = 'none'
 }
 const populateRightSidebarPatientDetail = (data) => {
   const rightSidebarPatientDetails = document.querySelector('.details');
   const rightSidebarPatientDetailsLab = document.querySelector('.lab')
   const rightSidebarPatientDetailsLink = rightSidebarPatientDetailsLab.querySelector('a')


   // //Populate the right side
   rightSidebarPatientDetails.querySelector('.profile_picture').src = data.profile_picture
   rightSidebarPatientDetails.querySelector('.name').textContent = data.name
   rightSidebarPatientDetails.querySelector('.date_of_birth').textContent = data.date_of_birth
   rightSidebarPatientDetails.querySelector('.gender').textContent = data.gender
   rightSidebarPatientDetails.querySelector('.contact_info').textContent = data.phone_number
   rightSidebarPatientDetails.querySelector('.emergency_info').textContent = data.emergency_contact
   rightSidebarPatientDetails.querySelector('.insurance_provider').textContent = data.insurance_type
   
   data.lab_results.forEach((lab_result) => {
     const rightSidebarPatientDetailsLinkClone = rightSidebarPatientDetailsLink.cloneNode(true)

      // Populate the cloned template with patient data
     rightSidebarPatientDetailsLink.querySelector('span').textContent = lab_result

     // Append the cloned and populated template to the right sidebar
     rightSidebarPatientDetailsLab.appendChild(rightSidebarPatientDetailsLinkClone)
    });
    rightSidebarPatientDetailsLink.style.display = 'none'
  }

 const populateLeftSidebarPatientDetail = (data) => {
   const left_sidebar = document.querySelector('.left_sidebar')
   const leftSidebarPatientDetails = document.querySelector('.patients_details');
   data.forEach(patient => { 
     const leftSidebarPatientDetailsClone = leftSidebarPatientDetails.cloneNode(true);
     
     // Populate the cloned template with patient data
     leftSidebarPatientDetailsClone.querySelector('.name').textContent = patient.name;
     leftSidebarPatientDetailsClone.querySelector('.profile_pic').src = patient?.profile_picture;
     leftSidebarPatientDetailsClone.querySelectorAll('.gender').forEach(el => el.textContent = patient.gender);
     leftSidebarPatientDetailsClone.querySelector('.age').textContent = patient.age;
  
     
     // Append the cloned and populated template to the left sidebar
     left_sidebar.appendChild(leftSidebarPatientDetailsClone);
   });
  leftSidebarPatientDetails.style.display = 'none'

   
  }
const populateData = (data_details) => {
  const data = data_details.find((patient) => patient.name == "Jessica Taylor")
  // data = [
  //   {
  //     name: 'Jessica Falcon',
  //     gender: 'female',
  //     age: 24,
  //     profile_picture : `/assets/images/user.svg`,
  //     date_of_birth:  '08/23/1997',
  //     insurance_type: 'Sunrise HEalth Insurance',
  //     phone_number: '(415) 555 1234',
  //     emergency_contact: '(415) 123 3456',
  //     lab_results: ['Blood Tests', 'CT Scans', 'X-Rays'],
  //     diagnostic_list: [
  //       {
  //         name: 'Hypertension',
  //         status: 'Under Observation',
  //         description: 'Chronic high blood pressure'
  //       },
  //       {
  //         name: 'Hypertension',
  //         status: 'Under Observation',
  //         description: 'Chronic high blood pressure'
  //       },
  //       {
  //         name: 'Hypertension',
  //         status: 'Under Observation',
  //         description: 'Chronic high blood pressure'
  //       },
  //       {
  //         name: 'Hypertension',
  //         status: 'Under Observation',
  //         description: 'Chronic high blood pressure'
  //       },
  //   ],
  //     diagnosis_history: [
  //       {
  //         blood_pressure: {
  //           systolic: {value: 160, levels: 'Higher than Average'},
  //           diastolic: {value: 78, levels: 'Lower than Average'}
  //         },
  //         heart_rate: {value: 78, levels: 'Lower than Average'},
  //         month: "March",
  //         respiratory_rate : {value: 20, levels: 'Normal'},
  //         temperature: {value: 98.6, levels: 'Normal'},
  //         year: 2024
  //       },
  //       {
  //         blood_pressure: {
  //           systolic: {value: 10, levels: 'Higher than Average'},
  //           diastolic: {value: 7, levels: 'Lower than Average'}
  //         },
  //         heart_rate: {value: 78, levels: 'Lower than Average'},
  //         month: "Februrary",
  //         respiratory_rate : {value: 20, levels: 'Normal'},
  //         temperature: {value: 98.6, levels: 'Normal'},
  //         year: 2024
  //       },
  //       {
  //         blood_pressure: {
  //           systolic: {value: 130, levels: 'Higher than Average'},
  //           diastolic: {value: 34, levels: 'Lower than Average'}
  //         },
  //         heart_rate: {value: 78, levels: 'Lower than Average'},
  //         month: "January",
  //         respiratory_rate : {value: 20, levels: 'Normal'},
  //         temperature: {value: 98.6, levels: 'Normal'},
  //         year: 2024
  //       },
  //       {
  //         blood_pressure: {
  //           systolic: {value: 60, levels: 'Higher than Average'},
  //           diastolic: {value: 98, levels: 'Lower than Average'}
  //         },
  //         heart_rate: {value: 78, levels: 'Lower than Average'},
  //         month: "December",
  //         respiratory_rate : {value: 20, levels: 'Normal'},
  //         temperature: {value: 98.6, levels: 'Normal'},
  //         year: 2023
  //       },
  //     ]
  //   },
  //   {
  //     name: 'Naomi Esther',
  //     gender: 'female',
  //     age: 24,
  //     profile_picture : `/assets/images/user.svg`,
  //     date_of_birth:  '08/23/1997',
  //     insurance_type: 'Sunrise HEalth Insurance',
  //     phone_number: '(415) 555 1234',
  //     emergency_contact: '(415) 123 3456',
  //     lab_results: ['Blood Tests', 'CT Scans', 'X-Rays'],
  //     diagnostic_list: [
  //       {
  //         name: 'Hypertension',
  //         status: 'Under Observation',
  //         description: 'Chronic high blood pressure'
  //       },
  //       {
  //         name: 'Hypertension',
  //         status: 'Under Observation',
  //         description: 'Chronic high blood pressure'
  //       },
  //       {
  //         name: 'Hypertension',
  //         status: 'Under Observation',
  //         description: 'Chronic high blood pressure'
  //       },
  //       {
  //         name: 'Hypertension',
  //         status: 'Under Observation',
  //         description: 'Chronic high blood pressure'
  //       },
  //   ],
  //     diagnosis_history: [
  //       {
  //         blood_pressure: {
  //           systolic: {value: 160, levels: 'Higher than Average'},
  //           diastolic: {value: 78, levels: 'Lower than Average'}
  //         },
  //         heart_rate: {value: 78, levels: 'Lower than Average'},
  //         month: "March",
  //         respiratory_rate : {value: 20, levels: 'Normal'},
  //         temperature: {value: 98.6, levels: 'Normal'},
  //         year: 2024
  //       }
  //     ]
  //   },
  //   {
  //     name: 'Patra Glory ',
  //     gender: 'female',
  //     age: 24,
  //     profile_picture : `/assets/images/user.svg`,
  //     date_of_birth:  '08/23/1997',
  //     insurance_type: 'Sunrise HEalth Insurance',
  //     phone_number: '(415) 555 1234',
  //     emergency_contact: '(415) 123 3456',
  //     lab_results: ['Blood Tests', 'CT Scans', 'X-Rays'],
  //     diagnostic_list: [
  //       {
  //         name: 'Hypertension',
  //         status: 'Under Observation',
  //         description: 'Chronic high blood pressure'
  //       },
  //       {
  //         name: 'Hypertension',
  //         status: 'Under Observation',
  //         description: 'Chronic high blood pressure'
  //       },
  //       {
  //         name: 'Hypertension',
  //         status: 'Under Observation',
  //         description: 'Chronic high blood pressure'
  //       },
  //       {
  //         name: 'Hypertension',
  //         status: 'Under Observation',
  //         description: 'Chronic high blood pressure'
  //       },
  //   ],
  //     diagnosis_history: [
  //       {
  //         blood_pressure: {
  //           systolic: {value: 160, levels: 'Higher than Average'},
  //           diastolic: {value: 78, levels: 'Lower than Average'}
  //         },
  //         heart_rate: {value: 78, levels: 'Lower than Average'},
  //         month: "March",
  //         respiratory_rate : {value: 20, levels: 'Normal'},
  //         temperature: {value: 98.6, levels: 'Normal'},
  //         year: 2024
  //       }
  //     ]
  //   },
  //   {
  //     name: 'Emily Williams',
  //     gender: 'female',
  //     age: 24,
  //     profile_picture : `/assets/images/user.svg`,
  //     date_of_birth:  '08/23/1997',
  //     insurance_type: 'Sunrise HEalth Insurance',
  //     phone_number: '(415) 555 1234',
  //     emergency_contact: '(415) 123 3456',
  //     lab_results: ['Blood Tests', 'CT Scans', 'X-Rays'],
  //     diagnostic_list: [
  //       {
  //         name: 'Hypertension',
  //         status: 'Under Observation',
  //         description: 'Chronic high blood pressure'
  //       },
  //       {
  //         name: 'Hypertension',
  //         status: 'Under Observation',
  //         description: 'Chronic high blood pressure'
  //       },
  //       {
  //         name: 'Hypertension',
  //         status: 'Under Observation',
  //         description: 'Chronic high blood pressure'
  //       },
  //       {
  //         name: 'Hypertension',
  //         status: 'Under Observation',
  //         description: 'Chronic high blood pressure'
  //       },
  //   ],
  //     diagnosis_history: [
  //       {
  //         blood_pressure: {
  //           systolic: {value: 160, levels: 'Higher than Average'},
  //           diastolic: {value: 78, levels: 'Lower than Average'}
  //         },
  //         heart_rate: {value: 78, levels: 'Lower than Average'},
  //         month: "March",
  //         respiratory_rate : {value: 20, levels: 'Normal'},
  //         temperature: {value: 98.6, levels: 'Normal'},
  //         year: 2024
  //       }
  //     ]
  //   },
    
  // ]
  populateLeftSidebarPatientDetail(data)
  populateRightSidebarPatientDetail(data)
  populateMainPatientDetail(data)
  }
  // populateData([])


