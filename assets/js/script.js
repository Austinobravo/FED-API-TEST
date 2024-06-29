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
  const data = value.find((patient) => patient.name == "Jessica Taylor")
  populateData(value)
  console.log("res",value)
  
})
.catch((error)=> {
  console.error("err",error)
})
// document.querySelectorAll('.gender').forEach(type => type.textContent = data.gender)
// document.querySelector('.age').textContent  = data.age
 const populateMain = (data) => {
  const tableBody = document.querySelector('.table_body')
  const tableRow = tableBody.querySelector('tr')
  data.diagnostic_list.forEach((item) => {
    const tableRowClone = tableRow.cloneNode(true)
    tableRowClone.querySelector('.name').textContent = item.name
    tableRowClone.querySelector('.description').textContent = item.description
    tableRowClone.querySelector('.status').textContent = item.status

    tableBody.appendChild(tableRowClone)
  })
  tableRow.style.display = 'none'
 }
const populateData = (data_details) => {
  const left_sidebar = document.querySelector('.left_sidebar')
  const right_sidebar = document.querySelector('.right_sidebar')
  const rightSidebarPatientDetails = document.querySelector('.details');
  const leftSidebarPatientDetails = document.querySelector('.patients_details');
  const getRightSidebarPatientDetail = (data) => {

    const rightSidebarPatientDetailsLab = document.querySelector('.lab')
    const rightSidebarPatientDetailsLink = rightSidebarPatientDetailsLab.querySelector('a')
    // //Populate the right side
    rightSidebarPatientDetails.querySelector('.profile_picture').src = data.profile_picture
    rightSidebarPatientDetails.querySelector('.date_of_birth').textContent = data.date_of_birth
    rightSidebarPatientDetails.querySelector('.gender').textContent = data.gender
    rightSidebarPatientDetails.querySelector('.contact_info').textContent = data.phone_number
    rightSidebarPatientDetails.querySelector('.emergency_info').textContent = data.emergency_contact
    rightSidebarPatientDetails.querySelector('.insurance_provider').textContent = data.insurance_type
    
    data.lab_results.forEach((lab_result) => {
      const rightSidebarPatientDetailsLinkClone = rightSidebarPatientDetailsLink.cloneNode(true)
      rightSidebarPatientDetailsLink.querySelector('span').textContent = lab_result
      console.log(lab_result)
      
      rightSidebarPatientDetailsLab.appendChild(rightSidebarPatientDetailsLinkClone)
    });
    rightSidebarPatientDetailsLink.style.display = 'none'
    // rightSidebarPatientDetailsLab.style.display = 'none'
  }
  data = [
    {
      name: 'Jessica Falcon',
      gender: 'female',
      age: 24,
      profile_picture : `/assets/images/user.svg`,
      date_of_birth:  '08/23/1997',
      insurance_type: 'Sunrise HEalth Insurance',
      phone_number: '(415) 555 1234',
      emergency_contact: '(415) 123 3456',
      lab_results: ['Blood Tests', 'CT Scans', 'X-Rays'],
      diagnostic_list: [
        {
          name: 'Hypertension',
          status: 'Under Observation',
          description: 'Chronic high blood pressure'
        },
        {
          name: 'Hypertension',
          status: 'Under Observation',
          description: 'Chronic high blood pressure'
        },
        {
          name: 'Hypertension',
          status: 'Under Observation',
          description: 'Chronic high blood pressure'
        },
        {
          name: 'Hypertension',
          status: 'Under Observation',
          description: 'Chronic high blood pressure'
        },
    ],
      diagnosis_history: [
        {
          blood_pressure: {
            systolic: {value: 160, levels: 'Higher than Average'},
            diastolic: {value: 78, levels: 'Lower than Average'}
          },
          heart_rate: {value: 78, levels: 'Lower than Average'},
          month: "March",
          respiratory_rate : {value: 20, levels: 'Normal'},
          temperature: {value: 98.6, levels: 'Normal'},
          year: 2024
        }
      ]
    },
    {
      name: 'Naomi Esther',
      gender: 'female',
      age: 24,
      profile_picture : `/assets/images/user.svg`,
      date_of_birth:  '08/23/1997',
      insurance_type: 'Sunrise HEalth Insurance',
      phone_number: '(415) 555 1234',
      emergency_contact: '(415) 123 3456',
      lab_results: ['Blood Tests', 'CT Scans', 'X-Rays'],
      diagnostic_list: [
        {
          name: 'Hypertension',
          status: 'Under Observation',
          description: 'Chronic high blood pressure'
        },
        {
          name: 'Hypertension',
          status: 'Under Observation',
          description: 'Chronic high blood pressure'
        },
        {
          name: 'Hypertension',
          status: 'Under Observation',
          description: 'Chronic high blood pressure'
        },
        {
          name: 'Hypertension',
          status: 'Under Observation',
          description: 'Chronic high blood pressure'
        },
    ],
      diagnosis_history: [
        {
          blood_pressure: {
            systolic: {value: 160, levels: 'Higher than Average'},
            diastolic: {value: 78, levels: 'Lower than Average'}
          },
          heart_rate: {value: 78, levels: 'Lower than Average'},
          month: "March",
          respiratory_rate : {value: 20, levels: 'Normal'},
          temperature: {value: 98.6, levels: 'Normal'},
          year: 2024
        }
      ]
    },
    {
      name: 'Patra Glory ',
      gender: 'female',
      age: 24,
      profile_picture : `/assets/images/user.svg`,
      date_of_birth:  '08/23/1997',
      insurance_type: 'Sunrise HEalth Insurance',
      phone_number: '(415) 555 1234',
      emergency_contact: '(415) 123 3456',
      lab_results: ['Blood Tests', 'CT Scans', 'X-Rays'],
      diagnostic_list: [
        {
          name: 'Hypertension',
          status: 'Under Observation',
          description: 'Chronic high blood pressure'
        },
        {
          name: 'Hypertension',
          status: 'Under Observation',
          description: 'Chronic high blood pressure'
        },
        {
          name: 'Hypertension',
          status: 'Under Observation',
          description: 'Chronic high blood pressure'
        },
        {
          name: 'Hypertension',
          status: 'Under Observation',
          description: 'Chronic high blood pressure'
        },
    ],
      diagnosis_history: [
        {
          blood_pressure: {
            systolic: {value: 160, levels: 'Higher than Average'},
            diastolic: {value: 78, levels: 'Lower than Average'}
          },
          heart_rate: {value: 78, levels: 'Lower than Average'},
          month: "March",
          respiratory_rate : {value: 20, levels: 'Normal'},
          temperature: {value: 98.6, levels: 'Normal'},
          year: 2024
        }
      ]
    },
    {
      name: 'Emily Williams',
      gender: 'female',
      age: 24,
      profile_picture : `/assets/images/user.svg`,
      date_of_birth:  '08/23/1997',
      insurance_type: 'Sunrise HEalth Insurance',
      phone_number: '(415) 555 1234',
      emergency_contact: '(415) 123 3456',
      lab_results: ['Blood Tests', 'CT Scans', 'X-Rays'],
      diagnostic_list: [
        {
          name: 'Hypertension',
          status: 'Under Observation',
          description: 'Chronic high blood pressure'
        },
        {
          name: 'Hypertension',
          status: 'Under Observation',
          description: 'Chronic high blood pressure'
        },
        {
          name: 'Hypertension',
          status: 'Under Observation',
          description: 'Chronic high blood pressure'
        },
        {
          name: 'Hypertension',
          status: 'Under Observation',
          description: 'Chronic high blood pressure'
        },
    ],
      diagnosis_history: [
        {
          blood_pressure: {
            systolic: {value: 160, levels: 'Higher than Average'},
            diastolic: {value: 78, levels: 'Lower than Average'}
          },
          heart_rate: {value: 78, levels: 'Lower than Average'},
          month: "March",
          respiratory_rate : {value: 20, levels: 'Normal'},
          temperature: {value: 98.6, levels: 'Normal'},
          year: 2024
        }
      ]
    },
    
  ]

  data.forEach(patient => { 
    const leftSidebarPatientDetailsClone = leftSidebarPatientDetails.cloneNode(true);
    
    // Populate the cloned template with patient data
    leftSidebarPatientDetailsClone.querySelector('.name').textContent = patient.name;
    leftSidebarPatientDetailsClone.querySelector('.profile_pic').src = patient?.profile_picture;
    console.log(patient.profile_picture);
    leftSidebarPatientDetailsClone.querySelectorAll('.gender').forEach(el => el.textContent = patient.gender);
    leftSidebarPatientDetailsClone.querySelector('.age').textContent = patient.age;

    
    // Append the cloned and populated template to the left sidebar
    left_sidebar.appendChild(leftSidebarPatientDetailsClone);
    // console.log("patient",data[0])
  });
  getRightSidebarPatientDetail(data[0])
  populateMain(data[0])
leftSidebarPatientDetails.style.display = 'none'


  }
  populateData([])


const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
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