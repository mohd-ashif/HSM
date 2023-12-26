const user = {
    departments: [
      {
        departmentName: "Cardiology",
        departmentProfileImage: "cardiology.jpg",
        yearFounded: 1980,
        description: "The Cardiology department specializes in...",
      },
      {
        departmentName: "Orthopedics",
        departmentProfileImage: "orthopedics.jpg",
        yearFounded: 1992,
        description: "The Orthopedics department focuses on...",
      },
      // Add more departments as needed
    ],
  
    departmentHeads: [
      {
        name: "Dr. Sarah Johnson",
        employeeNumber: "E001",
        age: 45,
        profileImage: "sarah_johnson.jpg",
        profileDescription: "Head of Cardiology Department",
        department: "Cardiology",
      },
      {
        name: "Dr. Michael Smith",
        employeeNumber: "E002",
        age: 50,
        profileImage: "michael_smith.jpg",
        profileDescription: "Head of Orthopedics Department",
        department: "Orthopedics",
      },
      // Add more department heads as needed
    ],
  
    employees: [
      {
        name: "Nurse Emily Davis",
        employeeNumber: "E101",
        age: 32,
        profileImage: "emily_davis.jpg",
        profileDescription: "Cardiology Nurse",
        department: "Cardiology",
        reportTo: "Dr. Sarah Johnson",
      },
      {
        name: "Dr. James Anderson",
        employeeNumber: "E102",
        age: 40,
        profileImage: "james_anderson.jpg",
        profileDescription: "Orthopedic Surgeon",
        department: "Orthopedics",
        reportTo: "Dr. Michael Smith",
      },
      // Add more employees as needed
    ],
  };
  
  export default data;
  